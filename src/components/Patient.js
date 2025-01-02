import React from "react";
import doctorImage from "../img/DoctorPage2.jpeg"; // Ensure to replace with correct image path
import DoctorImage from "../img/DoctorpageImage.jpeg";
import DoctorPatientRecord from "../img/DocPatientRecord.jpeg"
import FollowUpRemainder from "../img/AutomaticFollowUpMessage.jpeg"
import PatientConversesion from "../img/patientConversasion.jpeg"
import DisachargeSummary from "../img/GudmedNotificationjpeg.jpeg"
import PatientImage from "../img/PatientImage.jpg"
const Patient = () => {
  return (
    <div className="relative bg-gray-50 py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#2E4168] mb-8 text-center">
        For Patients
      </h1>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={PatientImage}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6 ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2E4168] text-left w-full -mr-60 whitespace-nowrap">
  Healthcare can be complex
  </h2>

  <span className="text-[#2E4168] mt-5  text-3xl sm:text-4xl lg:text-5xl font-medium">but GudMed is here </span>
  <span className="text-[#2E4168] mt-5 whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl font-medium">to simplify it for you.</span>


          <div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">
            <a
              href="https://patient.gudmed.in/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-4 text-white bg-[#2E4168] rounded-full shadow-lg hover:bg-[#0e182c] focus:outline-none transition-transform duration-300 hover:scale-105"
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
                className="w-full sm:w-auto  px-8 py-4 md:px-12 md:py-4 text-blue-600 border border-blue-600 rounded-full shadow-lg hover:bg-[#2E4168] hover:text-white focus:outline-none transition-transform duration-300 hover:scale-105"
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
          Our platform ensures you have all your medical information at your fingertips, from digital prescriptions to reminders for your next medicine dose. With GudMed, you stay connected with your healthcare provider, receive timely updates, and have your entire health history securely stored. We help you understand your treatment better, offering peace of mind and making healthcare more accessible.
          </p>


          

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
      <h2 className="md:text-6xl sm:text-2xl font-semibold text-[#2E4168] text-center mt-10 ">
            Key Features for Patients:
          </h2>
      {/* 3rd section  */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-re justify-center md:justify-start">
          <img
            src={DoctorPatientRecord}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-medium text-[#2E4168] text-center gap-80 ml-10">
          Easy access to your health records<br />

          </h2>
          <div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">


          </div>
        </div>
      </div>
      {/* 4th section  */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4 my-12">
  {/* Content Section */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
    <h2 className="text-3xl sm:text-4xl lg:text-3xl font-medium text-[#2E4168] text-center md:text-left">
    Reminders for medications and follow-up appointments<br />
    </h2>
    <div className="flex flex-row gap-4 justify-center md:justify-start sm:pl-4">
      {/* Additional content or buttons can be added here */}
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <img
      src={FollowUpRemainder}
      alt="Doctor"
      className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
    />
  </div>
</div>

{/* 5th section  */}
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-re justify-center md:justify-start">
          <img
            src={PatientConversesion}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-medium text-[#2E4168] text-center gap-80 ml-10">
          Better Communication with your doctor<br />

          </h2>
          <div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">


          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
   
    <div className="flex flex-row gap-4 justify-center md:justify-start sm:pl-4">
      {/* Additional content or buttons can be added here */}
      
    </div>
  </div>

  {/* Image Section */}
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4 my-12">
  {/* Content Section */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
    <h2 className="text-3xl sm:text-4xl lg:text-3xl font-medium text-[#2E4168] text-center md:text-left">
    Digital prescriptions delivered instantly<br />
    </h2>
    <div className="flex flex-row gap-4 justify-center md:justify-start sm:pl-4">
      {/* Additional content or buttons can be added here */}
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <img
      src={DisachargeSummary}
      alt="Doctor"
      className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
    />
  </div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 my-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-re justify-center md:justify-start">
          <img
            src={PatientConversesion}
            alt="Doctor"
            className="w-full max-h-[300px] md:max-h-[350px] rounded-lg shadow-lg object-cover transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ">
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-medium text-[#2E4168] text-center gap-80 ml-10">
          Reduced waiting times for discharge<br />

          </h2>
          <div className="flex flex-row gap-4 justify-center md:justify-center sm:pl-4 ">


          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
   
    <div className="flex flex-row gap-4 justify-center md:justify-start sm:pl-4">
      {/* Additional content or buttons can be added here */}
      
    </div>
  </div>

      

    </div>
    
  );
};

export default Patient;
