import React from 'react'

export default function OPdStepBystep() {
  return (
    <div>
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
  )
}
