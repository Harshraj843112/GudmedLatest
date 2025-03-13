import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import { Toaster, toast } from "react-hot-toast";

const socket = io("http://localhost:5000");

const StepByStep = () => {
  const [stepByStep, setStepByStep] = useState({
    heading: "🔧 HOW WE WORKS?",
    subheading: "Simplifying Healthcare with GudMed: 🔧",
    description:
      "At GudMed, we believe that technology should enhance the work you already do, not complicate it. Our solution is designed to keep the process familiar and straightforward while bringing the benefits of digitalization right to your fingertips.",
    steps: [
      {
        title: "Step 1",
        description: "Doctors continue to do what they do best—writing prescriptions with pen and paper.",
      },
      {
        title: "Step 2",
        description: "Simply scan the handwritten prescription using the GudMed Smart Camera.",
      },
      {
        title: "Step 3",
        description: "Press the spacebar, then enter—your digital prescription is ready to go!",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  const fetchStepByStep = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/step-by-step");
      setStepByStep({
        heading: response.data.heading || "🔧 HOW WE WORKS?",
        subheading: response.data.subheading || "Simplifying Healthcare with GudMed: 🔧",
        description:
          response.data.description ||
          "At GudMed, we believe that technology should enhance the work you already do, not complicate it. Our solution is designed to keep the process familiar and straightforward while bringing the benefits of digitalization right to your fingertips.",
        steps: response.data.steps || [
          {
            title: "Step 1",
            description: "Doctors continue to do what they do best—writing prescriptions with pen and paper.",
          },
          {
            title: "Step 2",
            description: "Simply scan the handwritten prescription using the GudMed Smart Camera.",
          },
          {
            title: "Step 3",
            description: "Press the spacebar, then enter—your digital prescription is ready to go!",
          },
        ],
      });
      setLoading(false);
    } catch (err) {
      console.error("Error fetching step-by-step data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStepByStep();
    socket.on("stepByStepUpdated", () => {
      fetchStepByStep();
      toast.success("Steps updated in real-time!");
    });
    return () => socket.off("stepByStepUpdated");
  }, []);

  const ArrowIcon = ({ size }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${size} w-${size} text-[#2E4168]`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );

  const DownArrowIcon = ({ size }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${size} w-${size} text-[#2E4168]`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 13l5 5m0 0l5-5m-5 5V6" />
    </svg>
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Header Section */}
      <div className="-mt-20 md:-mt-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#2E4168] mb-6">
          {stepByStep.heading}
        </h2>
        <h3 className="text-lg sm:text-xl lg:text-3xl text-[#2E4168] font-medium max-w-2xl mx-auto text-center -mt-4 md:mt-0">
          {stepByStep.subheading}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-[#2E4168] mt-4 max-w-3xl mx-auto">
          {stepByStep.description}
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 md:gap-32 gap-3 relative">
        {stepByStep.steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white md:p-8 p-10 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">{step.title}</div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4">
                {step.description}
              </p>
              {/* Downward Arrow for Mobile */}
              {index < stepByStep.steps.length - 1 && (
                <div className="sm:hidden mt-6">
                  <DownArrowIcon size={12} />
                </div>
              )}
            </div>
            {/* Arrow between steps */}
            {index === 0 && stepByStep.steps.length > 1 && (
              <div className="hidden sm:block lg:flex justify-center items-center absolute top-1/3 left-[40%] sm:left-[48%] md:left-[22%] lg:left-[28%] transform -translate-y-1/2 font-medium">
                <ArrowIcon size={32} />
              </div>
            )}
            {index === 1 && stepByStep.steps.length > 2 && (
              <div className="hidden sm:block lg:flex justify-center items-center absolute top-1/3 left-[50%] sm:left-[48%] md:left-[62%] lg:left-[64%] transform -translate-y-1/2 font-medium">
                <ArrowIcon size={32} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;