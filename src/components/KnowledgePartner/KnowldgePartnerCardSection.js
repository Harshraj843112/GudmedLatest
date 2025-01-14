import React from "react";

import OfferContentSection from "../Common/OfferContentSection";

// Import local images
import Image1 from "../../img/Google.png";
import Image2 from "../../img/IIT BOMBAY.png";
import Image3 from "../../img/IITIndore.png";
import TwoFactors from "../../img/2 factors.png";
import NBHA from "../../img/Nbha150x150.png";
import Gold from "../../img/gold-150x150.png";
import Bharat from "../../img/BHart150x150.png";

const KnowledgePartnerCardSection = () => {
  const cards = [
    { title: "GOOGLE", image: Image1 },
    { title: "IIT BOMBAY", image: Image2 },
    { title: "IIT INDORE", image: Image3 },
  ];

  return (
    <div className="container mx-auto px-8 md:py-8 md:w-11/12">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left section for AI Smart Clinics */}
        <div className="w-full lg:w-1/2 space-y-16">
          <div className="text-center lg:text-left  text-[#2E4168]">
            <OfferContentSection
              titleDesktop="AI Smart Clinics For Doctors"
              titleMobile="AI Smart Clinics For Doctors"
            />
          </div>
          <div className="flex justify-center ml-0">
            <img
              src={TwoFactors}
              alt="Two Factors"
              className="w-full max-w-2xl object-contain transition-all duration-300 transform"
            />
          </div>

          {/* Image Section with improved layout */}
          <div className="grid grid-cols-3 gap-8 justify-center lg:justify-start md:ml-4">
            <div className="text-center">
              <img
                src={NBHA}
                alt="NBHA"
                className="w-40 h-40 object-contain transition-transform duration-300 transform rounded-lg hover:scale-110"
              />
            </div>
            <div className="text-center">
              <img
                src={Gold}
                alt="Gold"
                className="w-40 h-40 object-contain transition-transform duration-300 transform rounded-lg hover:scale-110"
              />
            </div>
            <div className="text-center">
              <img
                src={Bharat}
                alt="Bharat"
                className="w-40 h-40 object-contain transition-transform duration-300 transform rounded-lg hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Right section for Knowledge Partners */}
        <div className="w-full lg:w-1/2 space-y-3 -mt-12 md:mt-0 ">
          <div className="text-center lg:text-left text-[#2E4168] -mb-10  md:mb-0 ">
            <OfferContentSection
              titleDesktop="Our Knowledge Partners"
              titleMobile="Our Knowledge Partners"
            />
          </div>

          <div className="grid grid-cols-3 text-2xl md:text-6xl  gap-6 justify-center lg:justify-end md:m-0 ml-0 md:ml-0 lg:ml-20 ">
            {cards.map((card, index) => (
              <div
                key={index}
               
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-40 h-40 object-contain transition-transform duration-300 transform rounded-lg hover:scale-110"
                />
                <p className="mt-6 ml-2 text-sm font-semibold text-center text-">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePartnerCardSection;
