// import React from "react";
// import { FaRobot, FaHeartbeat, FaRegPaperPlane, FaMedkit, FaHandshake, FaUsers } from "react-icons/fa"; // Using clear icons for each feature
// import { motion } from "framer-motion";

// const FeaturesSection = () => {
//   return (
//     <section className="py-16  bg-white">
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-semibold text-[#2E4168] mb-4">
//             🔧 HOW WE WORK  ?
//           </h2>
//           <h3 className="text-2xl lg:text-3xl text-[#2E4168] font-medium max-w-3xl mx-auto">
//             Simplifying Healthcare with GudMed : 🔧
//           </h3>
//           <p className="text-lg text-[#2E4168] mt-4 max-w-3xl mx-auto">
//             At GudMed, we believe that technology should enhance the work you already do, not complicate it. Our solution is designed to keep the process familiar and straightforward while bringing the benefits of digitalization right to your fingertips. 
//           </p>
//         </div>

//         {/* Content Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
//           {/* Revolutionizing Healthcare */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#FF6F61]">
//               <FaRegPaperPlane className="text-white text-5xl" />
//             </div>
//             <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
//               Revolutionizing Healthcare
//             </h4>
//             <p className="text-[#2E4168] text-base font-medium">
//               Experience seamless patient care with GudMed's cutting-edge technology. From digital prescriptions to real-time updates, revolutionize your healthcare journey.
//             </p>
//           </motion.div>

//           {/* AI-Powered Solutions for Smarter Hospitals */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#00A9E0]">
//               <FaRobot className="text-white text-5xl" />
//             </div>
//             <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
//               AI-Powered Solutions for Smarter Hospitals
//             </h4>
//             <p className="text-[#2E4168] text-base font-medium">
//               Enhance operational efficiency with GudMed's AI integration. Quick discharge summaries, proactive patient engagement, and streamlined workflows—all in one place.
//             </p>
//           </motion.div>

//           {/* Seamless Care Beyond the Hospital */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#F4A300]">
//               <FaHeartbeat className="text-white text-5xl" />
//             </div>
//             <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
//               Seamless Care Beyond the Hospital
//             </h4>
//             <p className="text-[#2E4168] text-base font-medium">
//               GudMed bridges the gap between hospitals and patients. From timely reminders to centralized medical records, care continues wherever you go.
//             </p>
//           </motion.div>

//           {/* Faster Discharges, Higher Satisfaction */}
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#F17C67]">
//               <FaMedkit className="text-white text-5xl" />
//             </div>
//             <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
//               Faster Discharges, Higher Satisfaction
//             </h4>
//             <p className="text-[#2E4168] text-base font-medium">
//               Cut down waiting times with GudMed. Speed up discharges and elevate patient satisfaction while maximizing hospital ROI.
//             </p>
//           </motion.div>
//         </div>

//         {/* Process Steps Section */}
//         <div className="mt-16 text-center">
//           <h3 className="text-3xl font-semibold text-[#2E4168] mb-6">
//            Here's   How GudMed Makes It Easy :
//           </h3>
          
//           <div className="space-y-6 max-w-1xl mx-auto">
//             <div className="text-xl text-[#2E4168] font-medium">
//               <span className="font-bold text-[#FF6F61]">Step 1:</span> Doctors continue to do what they do best—writing prescriptions with pen and paper.
//             </div>
//             <div className="text-xl text-[#2E4168] font-medium">
//               <span className="font-bold text-[#00A9E0]">Step 2:</span> Simply scan the handwritten prescription using the GudMed Smart Camera.
//             </div>
//             <div className="text-xl text-[#2E4168] font-medium">
//               <span className="font-bold text-[#F4A300]">Step 3:</span> Press the spacebar, then enter—your digital prescription is ready to go!
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from "react";
import { FaRobot, FaHeartbeat, FaRegPaperPlane, FaMedkit, FaHandshake, FaUsers } from "react-icons/fa"; // Using clear icons for each feature
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#2E4168] mb-4">
            🔧 HOW WE WORK  ?
          </h2>
          <h3 className="text-2xl lg:text-3xl text-[#2E4168] font-medium max-w-3xl mx-auto">
            Simplifying Healthcare with GudMed : 🔧
          </h3>
          <p className="text-lg text-[#2E4168] mt-4 max-w-3xl mx-auto">
            At GudMed, we believe that technology should enhance the work you already do, not complicate it. Our solution is designed to keep the process familiar and straightforward while bringing the benefits of digitalization right to your fingertips. 
          </p>
        </div>

        {/* Content Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Revolutionizing Healthcare */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#FF6F61]">
              <FaRegPaperPlane className="text-white text-5xl" />
            </div>
            <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
              Revolutionizing Healthcare
            </h4>
            <p className="text-[#2E4168] text-base font-medium">
              Experience seamless patient care with GudMed's cutting-edge technology. From digital prescriptions to real-time updates, revolutionize your healthcare journey.
            </p>
          </motion.div>

          {/* AI-Powered Solutions for Smarter Hospitals */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#00A9E0]">
              <FaRobot className="text-white text-5xl" />
            </div>
            <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
              AI-Powered Solutions for Smarter Hospitals
            </h4>
            <p className="text-[#2E4168] text-base font-medium">
              Enhance operational efficiency with GudMed's AI integration. Quick discharge summaries, proactive patient engagement, and streamlined workflows—all in one place.
            </p>
          </motion.div>

          {/* Seamless Care Beyond the Hospital */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#F4A300]">
              <FaHeartbeat className="text-white text-5xl" />
            </div>
            <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
              Seamless Care Beyond the Hospital
            </h4>
            <p className="text-[#2E4168] text-base font-medium">
              GudMed bridges the gap between hospitals and patients. From timely reminders to centralized medical records, care continues wherever you go.
            </p>
          </motion.div>

          {/* Faster Discharges, Higher Satisfaction */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6 p-4 rounded-full bg-[#F17C67]">
              <FaMedkit className="text-white text-5xl" />
            </div>
            <h4 className="text-2xl font-semibold text-[#2E4168] mb-4">
              Faster Discharges, Higher Satisfaction
            </h4>
            <p className="text-[#2E4168] text-base font-medium">
              Cut down waiting times with GudMed. Speed up discharges and elevate patient satisfaction while maximizing hospital ROI.
            </p>
          </motion.div>
        </div>

      {/* Process Steps Section */}
      <div className="mt-16 text-center">
 

  <div className="mt-20 text-center">
  <h3 className="text-3xl font-semibold text-[#2E4168] mb-20">
    Here's How GudMed Makes It Easy
  </h3>

  {/* Process Steps Section */}
  <div className="w-full  mx-auto flex flex-wrap justify-center gap-10">
    {/* Step 1 */}
    <div className="flex flex-col gap-4 items-center w-full sm:w-1/4 p-4">
      <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white p-10 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-110">
        <div className="font-bold text-2xl mb-2">Step 1</div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed text-center w-[390px]">
        Doctors continue to do what they do best- writing prescriptions with pen and paper.
      </p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col gap-4 items-center w-full sm:w-1/3 p-4">
      <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white p-10 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-110">
        <div className="font-bold text-2xl mb-2">Step 2</div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed text-center w-[400px]">
        Simply scan the handwritten prescription using the GudMed Smart Camera.
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col gap-4 items-center w-full sm:w-1/3 p-4">
      <div className="bg-gradient-to-r from-[#2E4168] to-[#4A5C84] text-white p-10 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-110">
        <div className="font-bold text-2xl mb-2">Step 3</div>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed text-center w-[400px]">
        Press the spacebar, then enter—your digital prescription is ready to go!
      </p>
    </div>
  </div>
</div>

</div>


      </div>
    </section>
  );
};

export default FeaturesSection;
