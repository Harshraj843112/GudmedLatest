import React, { useState, useEffect } from "react";
import { FaHospital, FaRobot, FaChartBar, FaRegPaperPlane, FaHeartbeat, FaMedkit, FaClipboardCheck } from "react-icons/fa";
import { FiSettings, FiActivity } from "react-icons/fi";
import { motion } from "framer-motion";
import axios from "axios";
import { socket } from "../socket";

// Icon mapping for dynamic rendering
const iconMap = {
  FaHospital,
  FaChartBar,
  FiSettings,
  FiActivity,
  FaRegPaperPlane,
  FaRobot,
  FaHeartbeat,
  FaMedkit,
  FaClipboardCheck,
};

const HighlightCard = ({ icon, title, description }) => {
  const Icon = iconMap[icon] || FaChartBar; // Fallback to FaChartBar if icon not found
  return (
    <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-6 rounded-xl flex flex-col items-center border border-gray-200 hover:border-blue-300">
      <Icon className="text-blue-500 text-5xl mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const MotionCard = ({ icon, title, description, bgColor }) => {
  const Icon = iconMap[icon] || FaRobot; // Fallback to FaRobot if icon not found
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex items-center justify-center mb-6 p-4 rounded-full`} style={{ backgroundColor: bgColor }}>
        <Icon className="text-white text-5xl" />
      </div>
      <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">{title}</h4>
      <p className="text-[#2E4168] text-base font-medium">{description}</p>
    </motion.div>
  );
};

const TechnologyPage = () => {
  const [technologyData, setTechnologyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch technology page data from the backend
  const fetchTechnologyData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/technology", {
        params: { slug: "technology" }, // Fetch the page with slug "technology"
      });
      if (response.data.length > 0) {
        setTechnologyData(response.data[0]); // Use the first matching page
      } else {
        setTechnologyData(null); // No data found
      }
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Error fetching technology page data");
      setLoading(false);
    }
  };

  // Fetch data on mount and set up WebSocket for real-time updates
  useEffect(() => {
    fetchTechnologyData();
    socket.on("contentUpdated", (updatedSlug) => {
      if (updatedSlug === "technology") {
        fetchTechnologyData();
      }
    });
    return () => socket.off("contentUpdated");
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (!technologyData) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-gray-500 text-lg">No technology page data found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-6 -mt-12 md:-mt-6">
        <h1 className="text-4xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4 p-6">
          {technologyData.title || "GudMed’s Technology"}
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mt-0 md:-mt-4">
          {technologyData.description || "GudMed’s technology is designed to optimize healthcare operations through automation and intelligent tools. Our platform integrates seamlessly with hospital systems, enabling real-time access to patient data, reports, and medication history."}
        </p>
      </div>

      {/* Sections */}
      {technologyData.sections && technologyData.sections.map((section, index) => (
        <section key={index} className={index === 1 ? "py-16 bg-white" : "mb-10"}>
          {section.sectionTitle && (
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-[#2E4168] relative inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text leading-normal">
                {section.sectionTitle}
                {index === 1 && (
                  <div className="h-1 w-32 bg-[#2E4168] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute left-1/2 -translate-x-1/2"></div>
                )}
              </h2>
            </div>
          )}
          {section.sectionDescription && (
            <p className="text-gray-700 max-w-5xl mx-auto text-lg mb-10 md:mx-4 xl:mx-auto">
              {section.sectionDescription}
            </p>
          )}
          <div className={index === 1 ? "container mx-auto px-2 lg:px-0" : ""}>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ${index === 1 ? "gap-12 lg:gap-16" : "gap-8"}`}>
              {section.cards.map((card, cardIndex) => (
                section.cardType === "highlight" ? (
                  <HighlightCard
                    key={cardIndex}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ) : (
                  <MotionCard
                    key={cardIndex}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    bgColor={card.bgColor}
                  />
                )
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TechnologyPage;