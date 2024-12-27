import React from "react";
import GudmedVideo from "../img/GudmedVideo.mp4";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const PatientVideo = () => {
  return (
    <div className="px-4 py-10 bg-gray-50">
      <h1 className="text-center text-3xl font-bold text-[#2E4168] mt-10">
        How GudMed Works ?
      </h1>

      {/* Video and Info Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-8">
        {/* Video Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative shadow-lg rounded-lg overflow-hidden animate-zoom-right">
            <video
              src={GudmedVideo}
              autoPlay
              loop
              muted
              controls
              className="w-full h-auto rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            ></video>
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 text-gray-700">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#2E4168]">
              Your good health is just a "Hi" away!
            </p>
            <ul className="list-disc list-inside space-y-2">
            <li>
  <span className="font-medium text-[#2E4168]">Send "Hi"</span> on{" "}
  <a
    href="https://wa.me/9999196828"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-[#2E4168] hover:text-[#1b2c4f] transition duration-300 "
  >
    <FaWhatsapp size={20} className="mr-2" />
    <span className="text-[#2E4168]">9999196828</span>
  </a>
</li>

              <li className="text-[#2E4168]">Choose your preferred language</li>
              <li className="text-[#2E4168]">Upload prescription</li>
              <li className="text-[#2E4168]">Enter your patient Full Name and email ID</li>
              <li className="text-[#2E4168]">Set medicine reminders</li>
              <li className="text-[#2E4168]">Manage Medical Records (Medilock)</li>
              <li className="text-[#2E4168]">Use our free services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 text-gray-500">
        <p>
          Experience seamless healthcare with GudMed. Start your journey today!
        </p>
      </div>
    </div>
  );
};

export default PatientVideo;
