import React from "react";
import Marquee from "react-fast-marquee";
import { FaHospitalAlt, FaPrescription, FaVials, FaCapsules, FaUserMd, FaRobot } from "react-icons/fa";

const AnimatedText = () => {
  return (
    <div className="relative h-28 mt-2 sm:mt-4 md:mt-4 lg:mt-[40rem] xl:mt-[20rem]">
      {/* Black background with left-to-right moving text */}
      <div
        className="bg-[#2E4168] h-20 flex items-center absolute top-[10px] sm:top-[-96px] md:top-[-10px] lg:top-0 left-0 w-full"
        style={{
          transform: "rotate(-2deg)", // Black rotated and shifted
          zIndex: 1, // Behind the red container
        }}
      >
        <Marquee speed={60} gradient={false} direction="left" className="hide-scrollbar">
          <span className="text-4xl font-bold text-white px-8 flex items-center gap-2">
            <FaCapsules className="text-purple-500" /> Direct Pharmacy Integration for more revenues 💰
          </span>
          <span className="text-4xl font-bold text-white px-8 flex items-center gap-2">
            <FaUserMd className="text-white" /> Improved OPD Management 🏥
          </span>
          <span className="text-4xl font-bold text-white px-8 flex items-center gap-2">
            <FaRobot className="text-yellow-500" /> Automated Patient Engagement
          </span>
        </Marquee>
      </div>

      {/* Red background with right-to-left moving text */}
      <div
        className="bg-[#FF4C4C] h-20 flex items-center absolute -top-[80px] sm:top-[-200px] md:top-[-100px] lg:top-[-70px] xl:top-[-50px] left-0 w-full p-4"
        style={{
          transform: "rotate(2deg)", // Red rotated and shifted
          zIndex: 1, // Above the black container
        }}
      >
        <Marquee speed={60} gradient={false} direction="right" className="hide-scrollbar">
          <span className="text-4xl font-bold text-black px-8 flex items-center gap-2">
            <FaRobot className="text-yellow-500" /> Faster Discharges = Higher Bed Turnover ⏩
          </span>
          <span className="text-4xl font-bold text-black px-8 flex items-center gap-2">
            <FaPrescription className="text-blue-400" /> Real-Time Digital Prescription 📑
          </span>
          <span className="text-4xl font-bold text-black px-8 flex items-center gap-2">
            <FaVials className="text-green-400" /> Seamless Lab Services Generate Revenues 💰
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default AnimatedText;

// Tailwind CSS styles to hide the scrollbar
const style = document.createElement("style");
style.textContent = `
  /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  .hide-scrollbar {
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
