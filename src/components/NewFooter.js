import React from 'react';
import Gudmed from "../img/Gudmed1-removebg-preview.png";

const socialIcons = [
    { iconClass: "fab fa-facebook-f", link: "https://www.facebook.com/GudMedicare/" },
    { iconClass: "fab fa-twitter", link: "https://x.com/GudMedicare" },
    { iconClass: "fab fa-instagram", link: "https://www.instagram.com/gudmedicare/" },
    { iconClass: "fab fa-youtube", link: "https://www.youtube.com/channel/UC2qkjYWuIsmEuQ5dnMV3l9Q" },
    { iconClass: "fab fa-linkedin", link: "https://www.linkedin.com/company/gudmed/" }
];

const NewFooter = () => {
    return (
        <footer className="bg-[#2E4168] text-white text-sm md:text-base py-8 px-4">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start">
                {/* Left Content */}
                <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
                    <p className="mb-4 font-sans">
                        Gudmed's unique platform converts prescriptions into digital form, creates secure health records, sends dosage reminders, and allows patients to track vitals. This service is clinic-agnostic and can be accessed anytime via WhatsApp.
                    </p>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 text-left lg:text-right">
                    {/* Phone Number with Icon */}
                    <div className="flex items-center space-x-2 mb-4 justify-start lg:justify-end">
                        <i className="fas fa-phone-alt text-lg"></i>
                        <a href="tel:+919999196828" className="text-lg text-white">
                            +91-9999196828
                        </a>
                    </div>
                    <p className="mb-4">MON–SAT 10AM–6PM</p>
                    <p className="mb-4">
                        {/* Email Address as Clickable */}
                        <a href="mailto:cs@gudmed.in" className="text-lg text-white cursor-pointer hover:text-gray-300">
                            cs@gudmed.in
                        </a>
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-start lg:justify-end space-x-4 text-xl">
                        {socialIcons.map((icon, index) => (
                            <a key={index} href={icon.link} className="hover:text-gray-300">
                                <i className={icon.iconClass}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-[#3974eb] pt-4 flex flex-col lg:flex-row justify-between items-center lg:items-start w-full px-4 lg:px-12 gap-4">
                <p className="text-center lg:text-left mt-10 ">©2024 GudMed  All Rights Reserved.</p>

                {/* Gudmed Logo */}
                <img src={Gudmed} alt="Gudmed logo" className='h-16 bg-white' />

                <p className="mt-2 text-center lg:text-left">
                    <a href="#" className="underline hover:text-gray-300">Privacy Policy</a> |
                    <a href="#" className="underline hover:text-gray-300"> Terms & Conditions</a>
                </p>
            </div>
        </footer>
    );
};

export default NewFooter;
