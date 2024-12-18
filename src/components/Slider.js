import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel"; 
import "react-alice-carousel/lib/alice-carousel.css"; 
import "animate.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your Image Import
import FramerMotion2 from "../img/Presentation1_page-0001.jpg";
import NewVideo from "../img/rome.mp4";

// Slide Data
const slides = [
  {
    title: "Harness the <br> Power  of <br> GudMed AI",
    gradientWords: ["GudMed", "AI", "Power"],
    gradient: "bg-gradient-to-r from-blue-400 via-green-500 to-teal-500",
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef();

  const carouselSettings = {
    autoPlay: false,
    autoPlayInterval: 3000, 
    infinite: true,
    disableButtonsControls: true,
    disableDotsControls: true,
    onSlideChanged: (e) => {
      setCurrentSlideIndex(e.item);
    },
    responsive: {
      0: {
        items: 1, // 1 slide on mobile
      },
      768: {
        items: 1, // 1 slide on tablet
      },
      1024: {
        items: 1, // 1 slide on laptop and desktop
      },
    },
  };

  // Handle Next Slide
  const handleNext = () => {
    carouselRef.current?.slideNext();
  };

  // Handle Previous Slide
  const handlePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* Text Carousel Section */}
      <div className="relative w-full h-auto px-4 py-6 sm:py-16 flex flex-col items-center sm:mt-10 ">
        <div className="relative w-full">
          {/* AliceCarousel for Text Transition */}
          <AliceCarousel
            ref={carouselRef}
            {...carouselSettings}
            activeIndex={currentSlideIndex}
            items={slides.map((slide, index) => (
              <div
                className="text-container animate__animated animate__slideInRight animate__faster"
                key={index}
              >
                <h1 className="text-gray-800 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-semibold leading-tight">
                  {/* Title with animation */}
                  {slide.title.split(/<br\s*\/?>/).map((chunk, i) => (
                    <React.Fragment key={i}>
                      {chunk.split(" ").map((word, j) =>
                        slide.gradientWords?.includes(word) ? (
                          <span
                            key={`${i}-${j}`}
                            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate__animated animate__slideInRight"
                            style={{
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            {`${word} `}
                          </span>
                        ) : (
                          `${word} `
                        )
                      )}
                      {i < slide.title.split(/<br\s*\/?>/).length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            ))}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Static Image Section */}
      <div className="w-full flex justify-center mt-8 sm:mt-12 px-4 sm:mb-80 md:mb-12 lg:mb-16">
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-[600px] rounded-lg shadow-md overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={NewVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Slider;
