import React from 'react';
import PatientImage from "../img/PatientImage.jpg";
import PatientVideo from './PatientVideo';

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
          {/* <div className="flex flex-row justify-center items-center gap-10 ml-6 sm:ml-0 sm:justify-center lg:justify-center mt-12">
  <a
    href="https://patient.gudmed.in/signin"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <button
      className="w-full sm:w-auto px-10 py-4 text-white text-lg bg-[#2E4168] rounded-full whitespace-normal shadow-lg hover:bg-[#0e182c] transition-transform duration-300 hover:scale-105"
      aria-label="Sign In"
    >
      Sign In
    </button>
  </a>
  <a
    href="https://patient.gudmed.in/signup"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <button
      className="w-full sm:w-auto px-10 py-4 text-[#2E4168] whitespace-normal text-lg bg-white rounded-full shadow-lg hover:bg-[#2E4168] hover:text-white transition-transform duration-300 hover:scale-105"
      aria-label="Sign Up"
    >
      Sign Up
    </button>
  </a>
</div> */}
<div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">
            <a
              href="https://patient.gudmed.in/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full sm:w-auto px-10 py-3 text-white bg-[#2E4168] rounded-full shadow-lg hover:bg-[#0e182c] focus:outline-none transition-transform duration-300 hover:scale-105"
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
                className="w-full sm:w-auto px-8 py-3 text-blue-600 border border-blue-600 rounded-full shadow-lg hover:bg-[#2E4168] hover:text-white focus:outline-none focus:ring-4 transition-transform duration-300 hover:scale-105"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </a>
          </div>


          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Our platform ensures you have all your medical information at your fingertips, from digital prescriptions to reminders for your next medicine dose. With GudMed, you stay connected with your healthcare provider, receive timely updates, and have your entire health history securely stored. We help you understand your treatment better, offering peace of mind and making healthcare more accessible.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2E4168]">
            Key Features for Patients:
          </h2>
          
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Digital prescriptions delivered instantly</li>
            <li className='whitespace-normal'>Reminders for medications and follow-up appointments</li>
            <li>Easy access to your health records</li>
            <li>Reduced waiting times for discharge</li>
            <li>Better Communication with your doctor</li>
          </ul>
          
        </div>
      </div>
      <PatientVideo></PatientVideo>
    </div>
  );
};

export default Patient;
