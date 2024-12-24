import React from 'react';
import PatientImage from "../img/PatientImage.jpg";

const Patient = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 sm:p-10 lg:p-14 rounded-2xl shadow-xl ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-16">
          <img
            src={PatientImage}
            alt="Doctor"
            className="object-cover w-full h-auto rounded-xl shadow-lg transform transition-transform duration-300  "
          />
        </div>


        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2E4168] leading-tight ">
            Healthcare can be complex, but GudMed is here to simplify it for you.
          </h2>
          <div className="flex flex-row sm:flex-row gap-6 justify-center lg:justify-start items-center ml-28 mt-28">
            <a
              href="https://patient.gudmed.in/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full items-center sm:w-auto px-8 py-3 text-white bg-[#2E4168] rounded-full shadow-lg hover:bg-[#0e182c]  transition-transform duration-300 hover:scale-105"
                aria-label="Sign In"
              >
                Sign In
              </button>
            </a>
            <a
              href="https://patient.gudmed.in/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full sm:w-auto px-8 py-3 text-[#2E4168] bg-white  rounded-full shadow-lg hover:bg-[#2E4168] hover:text-white  transition-transform duration-300 hover:scale-105"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </a>
          </div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Our platform ensures you have all your medical information at your fingertips, from digital prescriptions to reminders for your next medicine dose. With GudMed, you stay connected with your healthcare provider, receive timely updates, and have your entire health history securely stored. We help you understand your treatment better, offering peace of mind and making healthcare more accessible.
          </p>
          
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Digital prescriptions delivered instantly</li>
            <li>Reminders for medications and follow-up appointments</li>
            <li>Easy access to your health records</li>
            <li>Reduced waiting times for discharge</li>
            <li>Better Communication with your doctor</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Patient;
