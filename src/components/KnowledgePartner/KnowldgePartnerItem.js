import React from 'react';

const KnowledgePartnerItem = ({ image, title }) => {
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden transition-transform duration-300 transform  hover:shadow-2xl">
      {/* Card with hover effect */}
      <img
        className="w-full h-40 sm:h-32 object-contain rounded-t-lg transition-all duration-300 transform "
        src={image}
        alt={`${title} logo`}
      />
      <div className="flex flex-col items-center p-6 bg-gradient-to-t from-[#f0f4f8] to-[#ffffff]">
        <span className="text-[#2E4168] font-semibold text-2xl mb-2">{title}</span>
      </div>
    </div>
  );
};

export default KnowledgePartnerItem;
