import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const NavbarDropdown = ({ dropdown, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "absolute top-2 left-0 w-full" : "relative"
      } bg-[#2E4168] text-white rounded-lg shadow-lg p-4 md:px-8 z-50`}
    >
      <div className="grid grid-cols-1 gap-6 md:flex md:gap-8">
        {dropdown.map((section, index) => (
          <div key={index} className="flex flex-col gap-6">
            {/* Section Title */}
            {section.title && (
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <ArrowRightRoundedIcon
                  className="text-white hover:text-red-400 transition-transform duration-300"
                />
                {section.title}
              </h3>
            )}

            {/* Section Items */}
            {section.items && (
              <ul className="flex flex-col gap-3">
                {section.items.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:bg-[#244b9a] hover:translate-x-2 transition-transform duration-300 rounded-lg flex items-center gap-2 p-2"
                  >
                    <ArrowRightRoundedIcon
                      size={12}
                      className="text-white transition-transform duration-300"
                    />
                    {/* Updated Item Name */}
                    {typeof item === "object" && item.name && item.link ? (
                      <Link
                        to={item.link}
                        className="text-sm font-medium text-white hover:text-red-400 transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      // Render as text if item is not an object
                      <span className="text-sm font-medium text-white hover:text-red-400">
                        {item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Section Image */}
            {section.image && (
              <div className="mt-4 flex justify-center items-center">
                <img
                  src={section.image}
                  alt="Dropdown Preview"
                  className="rounded-lg shadow-lg w-full h-auto max-h-[300px] object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;
