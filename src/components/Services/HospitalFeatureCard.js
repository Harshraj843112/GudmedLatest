// HospitalFeatureCard.js
import React from 'react';

const HospitalFeatureCard = ({ imageSrc, title, description, features }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform  hover:shadow-xl my-0">
            <div className="flex flex-col lg:flex-row">
                {/* Image Frame */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full max-h-[700px] md:max-h-[750px] rounded-lg shadow-lg object-cover transition-transform duration-300 "
                    />
                </div>

                {/* Text Content Frame */}
                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-start bg-gray-50">
                    <h3 className="text-2xl font-bold text-[#2E4168] mb-4 mt-0">{title}</h3>
                    <p className="text-gray-700 mb-6">{description}</p>
                    <h4 className="text-lg font-semibold text-[#2E4168] mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-[#2E4168] mr-2">•</span>
                                <p className="text-gray-700">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HospitalFeatureCard;