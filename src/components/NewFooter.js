import React from "react";
import { Link } from "react-router-dom"; // Correct import for Link from react-router-dom
import Gudmed from "../img/Gudmed1-removebg-preview.png";

const socialIcons = [
  { iconClass: "fab fa-whatsapp", link: "https://wa.me/919999196828" },
  { iconClass: "fab fa-facebook-f", link: "https://www.facebook.com/GudMedicare/" },
  { iconClass: "fab fa-twitter", link: "https://x.com/GudMedicare" },
  { iconClass: "fab fa-instagram", link: "https://www.instagram.com/gudmedicare/" },
  { iconClass: "fab fa-youtube", link: "https://www.youtube.com/channel/UC2qkjYWuIsmEuQ5dnMV3l9Q" },
  { iconClass: "fab fa-linkedin", link: "https://www.linkedin.com/company/gudmed/" },
];

const NewFooter = () => {
  return (
    <footer className="bg-[#2E4168] text-white text-sm md:text-base py-8 px-4 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
        {/* Links and Social Icons */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl">©2025 GudMed. All Rights Reserved.</p>
            <div className="mt-2 text-sm sm:text-base">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Link to="#" className="underline hover:text-gray-300">Privacy Policy</Link>
                <span>|</span>
                <Link to="#" className="underline hover:text-gray-300">Terms & Conditions</Link>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-36 h-16 bg-slate-100 p-2 rounded-lg">
              <img
                src={Gudmed}
                alt="Gudmed logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Contact Info and Social Icons */}
          <div className="text-center lg:text-right space-y-4">
            {/* Contact Info */}
            <div className="flex flex-col items-center sm:items-center lg:items-end space-y-3 sm:space-y-4 w-full">
  <a
    href="tel:+919999196828"
    className="flex items-center justify-center sm:justify-start lg:justify-end text-sm sm:text-lg hover:text-gray-300"
  >
    <i className="fas fa-phone-alt rotate-90 text-xl sm:text-2xl md:text-2xl"></i>
    <span className="ml-2 text-base sm:text-lg md:text-xl">+91-9999196828</span>
  </a>
  <p className="text-base sm:text-lg md:text-xl text-center sm:text-left lg:text-right">
    MON–SAT 10AM–6PM
  </p>
  <a
    href="mailto:cs@gudmed.in"
    className="block text-lg sm:text-xl md:text-2xl text-center sm:text-left lg:text-right hover:text-gray-300"
  >
    cs@gudmed.in
  </a>
</div>




            {/* Social Icons */}
            <div className="flex justify-center gap-4 sm:justify-center md:justify-center lg:justify-end w-full md:gap-0 lg:gap-0 sm:ml-2   md:ml-12 ">
  {socialIcons.map((icon, index) => (
    <a
      key={index}
      href={icon.link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-300 flex items-center justify-center bg-[#2E4168] rounded-full"
      style={{
        width: "clamp(2.0rem, 3vw, 3.0rem)", // Adjusts width dynamically, optimized for iPads
        height: "clamp(2.5rem, 4vw, 3.5rem)", // Adjusts height dynamically, optimized for iPads
        fontSize: "clamp(1.25rem, 2.5vw, 1.10rem)", // Adjusts font size dynamically, optimized for iPads
      }}
    >
      <i className={icon.iconClass}></i>
    </a>
  ))}
</div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
