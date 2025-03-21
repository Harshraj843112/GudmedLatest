import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Trash2, PlusCircle, Edit2 } from "lucide-react";
import { motion } from "framer-motion";

// Initialize Socket.IO client
const socket = io("http://localhost:5000", {
  autoConnect: true,
  reconnection: true,
});

const TechnologyPageManager = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    sections: [
      { cardType: "highlight", cards: [{ icon: "", color: "", title: "", description: "" }] },
    ],
  });
  const [pages, setPages] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editPageId, setEditPageId] = useState(null);

  // Fetch pages and set up real-time updates
  useEffect(() => {
    const fetchPages = async () => {
      setLoading(true);
      try {
        if (!token) throw new Error("Please log in to view pages.");
        const response = await axios.get("http://localhost:5000/api/technology", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Handle response with nested 'data' property
        const fetchedPages = response.data.data || (Array.isArray(response.data) ? response.data : []);
        setPages(fetchedPages);
      } catch (error) {
        setMessage(error.response?.data?.message || error.message || "Failed to fetch pages");
        setMessageType("error");
        setPages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();

    // Real-time updates with Socket.IO
    socket.on("contentUpdated", (updatedPage) => {
      setPages((prevPages) => {
        const currentPages = Array.isArray(prevPages) ? prevPages : [];
        const exists = currentPages.some((page) => page._id === updatedPage._id);
        if (exists) {
          return currentPages.map((page) =>
            page._id === updatedPage._id ? updatedPage : page
          );
        } else {
          return [...currentPages, updatedPage];
        }
      });
      setMessage("Page updated in real-time");
      setMessageType("success");
    });

    return () => {
      socket.off("contentUpdated");
    };
  }, [token]);

  const handleChange = (e, sectionIndex, cardIndex) => {
    const { name, value } = e.target;
    if (sectionIndex !== undefined && cardIndex !== undefined) {
      const updatedSections = [...formData.sections];
      updatedSections[sectionIndex].cards[cardIndex][name] = value;
      setFormData({ ...formData, sections: updatedSections });
    } else if (sectionIndex !== undefined) {
      const updatedSections = [...formData.sections];
      updatedSections[sectionIndex][name] = value;
      setFormData({ ...formData, sections: updatedSections });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [
        ...formData.sections,
        { cardType: "highlight", cards: [{ icon: "", color: "", title: "", description: "" }] },
      ],
    });
  };

  const removeSection = (sectionIndex) => {
    const updatedSections = formData.sections.filter((_, idx) => idx !== sectionIndex);
    setFormData({
      ...formData,
      sections:
        updatedSections.length > 0
          ? updatedSections
          : [{ cardType: "highlight", cards: [{ icon: "", color: "", title: "", description: "" }] }],
    });
  };

  const addCard = (sectionIndex) => {
    const updatedSections = [...formData.sections];
    updatedSections[sectionIndex].cards.push({ icon: "", color: "", title: "", description: "" });
    setFormData({ ...formData, sections: updatedSections });
  };

  const removeCard = (sectionIndex, cardIndex) => {
    const updatedSections = [...formData.sections];
    updatedSections[sectionIndex].cards = updatedSections[sectionIndex].cards.filter(
      (_, idx) => idx !== cardIndex
    );
    if (updatedSections[sectionIndex].cards.length === 0) {
      updatedSections[sectionIndex].cards.push({ icon: "", color: "", title: "", description: "" });
    }
    setFormData({ ...formData, sections: updatedSections });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.slug) {
      setMessage("Title, description, and slug are required.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    try {
      let response;
      if (editMode) {
        response = await axios.put(
          `http://localhost:5000/api/technology/${editPageId}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessage("Page updated successfully");
      } else {
        response = await axios.post("http://localhost:5000/api/technology", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("Page created successfully");
      }
      setMessageType("success");
      socket.emit("contentUpdated", response.data);
      resetForm();
    } catch (error) {
      setMessage(error.response?.data?.message || "Error saving page");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (page) => {
    setEditMode(true);
    setEditPageId(page._id);
    setFormData({
      title: page.title,
      description: page.description,
      slug: page.slug,
      sections: page.sections.map((section) => ({
        cardType: section.cardType,
        cards: section.cards.map((card) => ({
          icon: card.icon,
          color: card.color,
          title: card.title,
          description: card.description,
        })),
      })),
    });
  };

  const handleDelete = async (pageId) => {
    if (!window.confirm("Are you sure you want to delete this page?")) return;

    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:5000/api/technology/${pageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Page deleted successfully");
      setMessageType("success");
      socket.emit("contentUpdated", { _id: pageId, deleted: true }); // Custom event for deletion
      setPages((prevPages) => prevPages.filter((page) => page._id !== pageId));
    } catch (error) {
      setMessage(error.response?.data?.message || "Error deleting page");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      slug: "",
      sections: [
        { cardType: "highlight", cards: [{ icon: "", color: "", title: "", description: "" }] },
      ],
    });
    setEditMode(false);
    setEditPageId(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-6 max-w-4xl"
    >
      <div className="bg-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Technology Page Manager</h1>

        {/* Message Display */}
        {message && (
          <div
            className={`p-4 mb-4 rounded-lg ${
              messageType === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        {/* Form for Create/Update */}
        <h2 className="text-2xl font-semibold mb-4">{editMode ? "Edit Technology Page" : "Create New Technology Page"}</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
              className="w-full p-2 border rounded-lg"
              rows="3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={(e) => handleChange(e)}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {formData.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Section {sectionIndex + 1}</h4>
                <button
                  type="button"
                  onClick={() => removeSection(sectionIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Card Type</label>
                <select
                  name="cardType"
                  value={section.cardType}
                  onChange={(e) => handleChange(e, sectionIndex)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="highlight">Highlight</option>
                  <option value="motion">Motion</option>
                </select>
              </div>
              {section.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="mb-4 p-4 border rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="text-md font-medium">Card {cardIndex + 1}</h5>
                    <button
                      type="button"
                      onClick={() => removeCard(sectionIndex, cardIndex)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-1">Icon (e.g., FaChartBar)</label>
                    <input
                      type="text"
                      name="icon"
                      value={card.icon}
                      onChange={(e) => handleChange(e, sectionIndex, cardIndex)}
                      className="w-full p-2 border rounded-lg"
                      placeholder="e.g., FaBeer"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-1">
                      Icon Color (Tailwind class, e.g., text-red-500)
                    </label>
                    <input
                      type="text"
                      name="color"
                      value={card.color}
                      onChange={(e) => handleChange(e, sectionIndex, cardIndex)}
                      className="w-full p-2 border rounded-lg"
                      placeholder="e.g., text-blue-500"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={card.title}
                      onChange={(e) => handleChange(e, sectionIndex, cardIndex)}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 font-medium mb-1">Description</label>
                    <textarea
                      name="description"
                      value={card.description}
                      onChange={(e) => handleChange(e, sectionIndex, cardIndex)}
                      className="w-full p-2 border rounded-lg"
                      rows="2"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addCard(sectionIndex)}
                className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <PlusCircle className="h-4 w-4" /> Add Card
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addSection}
            className="mb-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <PlusCircle className="h-4 w-4" /> Add Section
          </button>
          <div className="flex justify-end gap-2">
            {editMode && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : editMode ? "Update Page" : "Create Page"}
            </button>
          </div>
        </form>

        {/* Existing Pages List */}
        <h2 className="text-2xl font-bold mb-4">Existing Technology Pages</h2>
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : pages.length === 0 ? (
          <p>No technology pages found.</p>
        ) : (
          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page._id} className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-xl font-semibold">{page.title}</h3>
                <p className="text-gray-600">{page.description}</p>
                <p className="text-sm text-gray-500">Slug: {page.slug}</p>
                <div className="mt-2">
                  {page.sections.map((section, sectionIdx) => (
                    <div key={section._id} className="mb-4">
                      <h4 className="text-lg font-medium">Section {sectionIdx + 1} ({section.cardType})</h4>
                      <ul className="ml-4 space-y-2">
                        {section.cards.map((card) => (
                          <li key={card._id} className="border p-2 rounded-md">
                            <p><strong>Icon:</strong> {card.icon || "None"}</p>
                            <p><strong>Color:</strong> {card.color || "None"}</p>
                            <p><strong>Title:</strong> {card.title}</p>
                            <p><strong>Description:</strong> {card.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(page)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                  >
                    <Edit2 className="h-4 w-4 inline mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(page._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    <Trash2 className="h-4 w-4 inline mr-1" /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TechnologyPageManager;