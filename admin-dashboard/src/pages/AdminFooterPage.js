import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { Toaster, toast } from "react-hot-toast";

// Initialize Socket.IO connection with reconnection enabled
const socket = io("http://localhost:5000", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

const AdminFooterPage = () => {
  const [footer, setFooter] = useState({
    copyright: {
      year: 2025,
      companyName: "Gud Medicare Solutions Private Limited",
      rightsReserved: "All rights reserved ®",
    },
    contact: {
      phone: "+91-9999196828",
      email: "cs@gudmed.in",
    },
    socialIcons: [
      { iconClass: "fab fa-whatsapp", link: "https://wa.me/919999196828" },
      { iconClass: "fab fa-facebook-f", link: "https://www.facebook.com/GudMedicare/" },
      { iconClass: "fab fa-twitter", link: "https://x.com/GudMedicare" },
      { iconClass: "fab fa-instagram", link: "https://www.instagram.com/gudmedicare/" },
      { iconClass: "fab fa-youtube", link: "https://www.youtube.com/channel/UC2qkjYWuIsmEuQ5dnMV3l9Q" },
      { iconClass: "fab fa-linkedin", link: "https://www.linkedin.com/company/gudmed/" },
    ],
    logoUrl: "http://localhost:5000/images/gudmed-logo.png",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const token = localStorage.getItem("token");

  // Fetch initial footer data
  const fetchFooter = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/footer");
      setFooter({
        copyright: response.data.copyright || footer.copyright,
        contact: response.data.contact || footer.contact,
        socialIcons: response.data.socialIcons || footer.socialIcons,
        logoUrl: response.data.logoUrl || footer.logoUrl,
      });
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to fetch footer data");
      setLoading(false);
    }
  };

  // Set up Socket.IO and fetch initial data
  useEffect(() => {
    fetchFooter();

    socket.on("connect", () => {
      console.log("Socket.IO connected");
    });
    socket.on("disconnect", () => {
      console.log("Socket.IO disconnected");
    });

    socket.on("footerUpdated", (updatedData) => {
      console.log("Received footerUpdated event with data:", updatedData);
      setFooter((prev) => ({
        ...prev,
        copyright: { ...updatedData.copyright },
        contact: { ...updatedData.contact },
        socialIcons: [...updatedData.socialIcons],
        logoUrl: updatedData.logoUrl,
      }));
      toast.success("Footer updated in real-time!");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("footerUpdated");
    };
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError("Please log in to perform this action.");
      toast.error("Please log in first.");
      return;
    }
    setIsSaving(true);
    try {
      await axios.put("http://localhost:5000/api/footer", footer, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Changes saved successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error updating footer data");
      toast.error(err.response?.data?.message || "Failed to save changes.");
    } finally {
      setTimeout(() => setIsSaving(false), 500);
    }
  };

  // Add a new social icon
  const addSocialIcon = () => {
    setFooter((prev) => ({
      ...prev,
      socialIcons: [...prev.socialIcons, { iconClass: "", link: "" }],
    }));
    toast.success("New social icon added!");
  };

  // Update a social icon field
  const handleSocialIconChange = (index, field, value) => {
    setFooter((prev) => ({
      ...prev,
      socialIcons: prev.socialIcons.map((icon, i) =>
        i === index ? { ...icon, [field]: value } : icon
      ),
    }));
  };

  // Delete a social icon
  const handleDeleteSocialIcon = (index) => {
    if (!window.confirm("Are you sure you want to delete this social icon?")) return;
    setFooter((prev) => ({
      ...prev,
      socialIcons: prev.socialIcons.filter((_, i) => i !== index),
    }));
    toast.success("Social icon deleted!");
  };

  // Update copyright or contact fields
  const handleFieldChange = (section, field, value) => {
    setFooter((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // Update logo URL
  const handleLogoChange = (field, value) => {
    setFooter((prev) => ({ ...prev, [field]: value }));
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manage Footer</h1>
        {error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Copyright Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Copyright</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Year</label>
                <input
                  type="number"
                  value={footer.copyright.year}
                  onChange={(e) => handleFieldChange("copyright", "year", Number(e.target.value))}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2025"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Company Name</label>
                <input
                  type="text"
                  value={footer.copyright.companyName}
                  onChange={(e) => handleFieldChange("copyright", "companyName", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Gud Medicare Solutions Private Limited"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Rights Reserved</label>
                <input
                  type="text"
                  value={footer.copyright.rightsReserved}
                  onChange={(e) => handleFieldChange("copyright", "rightsReserved", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., All rights reserved ®"
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone</label>
                <input
                  type="text"
                  value={footer.contact.phone}
                  onChange={(e) => handleFieldChange("contact", "phone", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., +91-9999196828"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={footer.contact.email}
                  onChange={(e) => handleFieldChange("contact", "email", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., cs@gudmed.in"
                  required
                />
              </div>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Social Icons</h2>
            {footer.socialIcons.map((icon, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
                <input
                  type="text"
                  value={icon.iconClass}
                  onChange={(e) => handleSocialIconChange(index, "iconClass", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Icon Class (e.g., fab fa-whatsapp)"
                  required
                />
                <input
                  type="url"
                  value={icon.link}
                  onChange={(e) => handleSocialIconChange(index, "link", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Link (e.g., https://wa.me/919999196828)"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleDeleteSocialIcon(index)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSocialIcon}
              className="w-full sm:w-auto mt-4 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              + Add Social Icon
            </button>
          </div>

          {/* Logo Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Logo</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Logo URL</label>
                <input
                  type="url"
                  value={footer.logoUrl}
                  onChange={(e) => handleLogoChange("logoUrl", e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., http://localhost:5000/images/gudmed-logo.png"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSaving}
              className={`w-full sm:w-auto p-3 bg-green-600 text-white rounded-lg text-lg font-semibold transition-all duration-300 ${
                isSaving ? "animate-pulse opacity-75 cursor-not-allowed" : "hover:bg-green-700"
              }`}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminFooterPage;