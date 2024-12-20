import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming React Router is being used
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

const NavbarItem = ({
  list,
  link,
  onMouseEnter,
  onMouseLeave,
  isActive,
  children,
  isFirstItem,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown for mobile view
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li
      className={`relative flex items-center gap-2 cursor-pointer transition-all duration-300 ${
        isFirstItem
          ? "bg-[#2E4168] text-white px-6 py-3 rounded-full shadow-lg "
          : isActive
          ? "bg-slate-100 text-black px-6 py-3 rounded-full shadow-md"
          : "hover:text-gray-700 px-5 py-2 rounded-full hover:bg-slate-200"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleDropdownToggle} // Handle dropdown toggle on mobile
    >
      {/* Wrap List Text in Link */}
      <Link
        to={link}
        className="flex items-center gap-2 text-lg font-semibold transition-all duration-300"
      >
        <span className="whitespace-nowrap">{list}</span>

        {/* Arrow Icon */}
        {/* <ArrowRightRoundedIcon
          size={16}
          className={`rotate-45 transition-transform ${
            isFirstItem
              ? "text-white transform hover:translate-x-1"
              : "text-black transform hover:translate-x-1"
          }`}
        /> */}
      </Link>

      {/* Render Dropdown or Children */}
      {(children || isDropdownOpen) && (
        <div
          className={`absolute ${
            isActive || isDropdownOpen ? "block" : "hidden"
          } top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full sm:w-auto z-50`}
        >
          {children}
        </div>
      )}
    </li>
  );
};

export default NavbarItem;
