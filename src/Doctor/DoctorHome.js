import React from "react";
import doctorImage from "../img/DoctorPage2.jpeg"; // Ensure to replace with correct image path
import DoctorImage from "../img/DoctorpageImage.jpeg";

const DoctorHome = () => {
  return (
    <div className="relative bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2E4168] mb-8 text-center">
        For Doctors
      </h1>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={DoctorImage}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2E4168] text-center gap-80">
            Your Clinic <br />
            <span className="text-[#2E4168] mt-5">Digitized In Your Way</span>
          </h2>
          <div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">
            <a
              href="https://doctor.gudmed.in/signin"
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
              href="https://doctor.gudmed.in/signup"
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
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Left: Features Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mx-auto max-w-screen-sm">
  At GudMed, we empower doctors by streamlining patient management
  through cutting-edge technology. Our platform allows you to focus
  more on patient care and less on administrative tasks. With
  real-time prescription digitization, patient engagement tools, and
  AI-powered operational support, GudMed helps you improve efficiency,
  reduce errors, and offer a more personalized healthcare experience.
  Join us in revolutionizing healthcare with smarter solutions that
  make your practice run smoother and deliver better patient outcomes.
</p>


          <h2 className="text-xl sm:text-2xl font-semibold text-[#2E4168]">
            Key Features for Doctors:
          </h2>

          <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-2">
  <li className=" sm:ml-0 -ml-6">Quick and accurate discharge summaries</li>
  <li className=" sm:ml-0 whitespace-nowrap mx-auto -ml-20">Seamless patient communication</li>
  <li className="-ml-6 sm:ml-0 ">Automated post-care follow-ups and reminders</li>
  <li className="-ml-6 sm:ml-0 ">Real-time access to patient history and reports</li>
</ul>

        </div>

        {/* Right: Features Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
