import React, { useState, useRef, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "animate.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Video Import
import NewVideo from "../img/rome.mp4";

// Slide Data
const slides = [
  {
    titleDesktop:
      "Revolutionize patient care with <br> cutting-edge Artificial Intelligence <br> tailored for hospitals and<br> healthcare providers.",
    titleMobile:
      "Revolutionize patient care with cutting-edge Artificial Intelligence tailored for hospitals and healthcare providers.",
    gradientWords: ["Artificial Intelligence", "hospitals"],
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  },
  {
    titleDesktop: "Harness the <br> Power of <br> GudMed AI",
    titleMobile: "Harness the <br/> Power of <br> GudMed AI",
    gradientWords: ["GudMed AI", "Power"],
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  },
  {
    titleDesktop: "Unlock these Benefits",
    titleMobile: "Unlock these Benefits",
    gradientWords: ["Benefits"],
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    benefits: [
      {
        heading: "Improved Decision-Making:",
        description: "Make real-time, data-driven decisions for better patient outcomes.",
      },
      {
        heading: "Predictive Analytics:",
        description: "Anticipate patient needs with precision for proactive care.",
      },
      {
        heading: "Automation:",
        description: "Streamline processes from discharge summaries to prescription digitization.",
      },
    ],
  },
  {
    titleDesktop:
      "Explore how GudMed is <br> transforming healthcare <br> one innovation at a time.",
    titleMobile: "Explore how GudMed <br>is transforming healthcare one innovation at a time.",
    gradientWords: ["GudMed", "transforming", "innovation"],
    gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => setIsMobile(window.innerWidth < 768);
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const carouselSettings = {
    autoPlay: false,
    infinite: true,
    disableButtonsControls: true,
    disableDotsControls: true,
    onSlideChanged: (e) => setCurrentSlideIndex(e.item),
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 1 },
    },
  };

  const handleNext = () => carouselRef.current?.slideNext();
  const handlePrev = () => carouselRef.current?.slidePrev();

  const currentSlide = slides[currentSlideIndex];

  const renderTitle = (title, gradientWords, gradientClass) => {
    const words = title.split(" ");
    return words.map((word, index) => {
      const isGradientWord = gradientWords.some((gradientWord) =>
        gradientWord.includes(word)
      );
      return (
        <span
          key={index}
          className={isGradientWord ? `text-transparent bg-clip-text ${gradientClass}` : ""}
        >
          {word}{" "}
        </span>
      );
    });
  };

  const renderFormattedTitle = (title, gradientWords, gradientClass) => {
    if (isMobile) {
      // Preserve <br> tags in mobile view
      return title.split(/<br\s*\/?>/).map((chunk, index) => (
        <React.Fragment key={index}>
          {renderTitle(chunk, gradientWords, gradientClass)}
          {index < title.split(/<br\s*\/?>/).length - 1 && <br />}
        </React.Fragment>
      ));
    }

    return title
      .split(/<br\s*\/?>/)
      .map((chunk, index) => (
        <React.Fragment key={index}>
          {renderTitle(chunk, gradientWords, gradientClass)}
          {index < title.split(/<br\s*\/?>/).length - 1 && <br />}
        </React.Fragment>
      ));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* Text Carousel Section */}
      <div className="relative w-full h-auto px-4 py-6 sm:py-16 flex flex-col items-center sm:mt-10">
        <div className="relative w-full">
          <AliceCarousel
            ref={carouselRef}
            {...carouselSettings}
            activeIndex={currentSlideIndex}
            items={slides.map((slide, index) => (
              <div
                key={index}
                className="text-container animate__animated animate__slideInRight animate__faster"
              >
                {/* Title Rendering */}
                <h1
                  className={`text-gray-800 text-center font-semibold leading-tight ${
                    slide.titleDesktop.length > 100
                      ? "text-2xl sm:text-3xl lg:text-7xl"
                      : slide.titleDesktop.length > 60
                      ? "text-2xl sm:text-4xl lg:text-7xl"
                      : "text-4xl sm:text-5xl lg:text-8xl"
                  }`}
                >
                  {renderFormattedTitle(
                    isMobile ? slide.titleMobile : slide.titleDesktop,
                    slide.gradientWords,
                    slide.gradient
                  )}
                </h1>
                {/* Benefits Section */}
                {slide.benefits && (
                  <ul className="mt-8 space-y-4 px-4 ">
                    {slide.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center "
                      >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text font-semibold text-[#2E4168] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                          {benefit.heading}
                        </span>{" "}
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                          {benefit.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          />
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 sm:top-1/2 top-[13rem] transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 sm:top-1/2 top-[13rem] transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
      {/* Static Video Section */}
      <div className="w-full flex justify-center mt-0   px-4 sm:mb-80 md:mb-12 lg:mb-16">
        <div className="w-full h-80 sm:h-64 md:h-80 lg:h-[800px] rounded-lg shadow-md overflow-hidden">
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
