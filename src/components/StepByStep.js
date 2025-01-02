import React from 'react';

const StepByStep = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2E4168] mb-6 ">
          🔧 HOW WE WORKS?
        </h2>
        <h3 className="text-lg sm:text-xl lg:text-3xl text-[#2E4168] font-medium max-w-2xl mx-auto text-center -mt-4 md:mt-0">
          Simplifying Healthcare with GudMed: 🔧
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-[#2E4168] mt-4 max-w-3xl mx-auto md:mx-auto">
          At GudMed, we believe that technology should enhance the work you already do, not complicate it. Our solution is designed to keep the process familiar and straightforward while bringing the benefits of digitalization right to your fingertips.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-32 gap-3">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white md:p-8 p-10 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Step 1</div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 ">
            Doctors continue to do what they do best—writing prescriptions with pen and paper.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white  md:p-8 p-10 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2">Step 2</div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4">
            Simply scan the handwritten prescription using the GudMed Smart Camera.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white  sm:p-8 p-10  rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 ">Step 3</div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 ">
            Press the spacebar, then enter—your digital prescription is ready to go!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
