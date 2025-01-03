import React from 'react';
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
        <footer className="bg-[#2E4168] text-white text-sm md:text-base py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
                {/* Logo */}
                

                {/* Links and Social Icons */}
                <div className="w-full flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Left Section */}
                    <div className="text-center lg:text-left">
  <p className="text-2xl md:text-xl">©2025 GudMed. All Rights Reserved.</p>
  <div className="mt-2 text-2xl md:text-xl">
    <div className="block sm:flex sm:justify-center sm:text-center">
      <a href="#" className="underline hover:text-gray-300 mx-1">Privacy Policy</a>|
      <a href="#" className="underline hover:text-gray-300 mx-1">Terms & Conditions</a>
    </div>
  </div>
</div>

                    <div className="flex items-center justify-center ">
                    <img src={Gudmed} alt="Gudmed logo" className="h-16 bg-slate-100 p-2 rounded-lg" />
                </div>

                    {/* Contact Info and Social Icons */}
                    <div className="text-center lg:text-right space-y-4 md:text-lg text-2xl ">
                        {/* Contact Info */}
                        <div className='space-y-5'>
                            <a href="tel:+919999196828" className="md:text-lg text-white flex items-center justify-center lg:justify-end hover:text-gray-300">
                                <i className="fas fa-phone-alt rotate-90"></i>
                                <span className="ml-2">+91-9999196828</span>
                            </a>
                            <p>MON–SAT 10AM–6PM</p>
                            <a href="mailto:cs@gudmed.in" className="md:text-lg mb-7 md:mt-0 mt-20  md:mb-0 text-3xl text-white hover:text-gray-300">
                                cs@gudmed.in
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-4 md:gap-0  lg:justify-end space-x-4 text-3xl md:text-xl ">
                            {socialIcons.map((icon, index) => (
                                <a
                                    key={index}
                                    href={icon.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-300"
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
