import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types for a single slide
interface SlideType {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

// Define props for the Carousel component
interface CarouselProps {
  slides: SlideType[];
  autoPlayInterval?: number;
  className?: string;
}

const Carousel = ({
  slides,
  autoPlayInterval = 3000,
  className = "",
}: CarouselProps) => {
  // State for tracking current slide and auto-play status
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation functions wrapped in useCallback for performance
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Auto-play functionality
  useEffect(() => {
    let intervalId: number | undefined;

    if (isAutoPlaying && slides.length > 1) {
      intervalId = window.setInterval(goToNext, autoPlayInterval);
    }

    return () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, autoPlayInterval, goToNext, slides.length]);

  // Handle empty or invalid slides prop
  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">No slides available</p>
      </div>
    );
  }

  // Handle single slide
  if (slides.length === 1) {
    const slide = slides[0];
    return (
      <div
        className={`relative w-full max-w-6xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] ${className}`}
      >
        <div className="relative h-full overflow-hidden rounded-lg">
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
            <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
              {slide.title}
            </h3>
            <p className="text-white/90 text-sm md:text-base mt-2">
              {slide.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main carousel render for multiple slides
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] ${className}`}
    >
      {/* Main carousel container */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Slides container with smooth transitions */}
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="absolute top-0 w-full h-full"
              style={{ left: `${slide.id * 100}%` }}
            >
              {/* Image */}
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
              {/* Content overlay with gradient background */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                  {slide.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mt-2">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              currentIndex === index
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Auto-play toggle button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 px-3 py-1 text-sm bg-white/30 hover:bg-white/50 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

// Example usage component
export default function CarouselExample() {
  const slides = [
    {
      id: 0,
      imageUrl: "/logo.png",
      title: "Beautiful Landscape",
      description: "A stunning view of nature's beauty",
    },
    {
      id: 1,
      imageUrl: "/priceLogo.svg",
      title: "City Lights",
      description: "Urban architecture at night",
    },
    {
      id: 2,
      imageUrl: "/vite.svg",
      title: "Ocean Waves",
      description: "Peaceful seaside scenery",
    },
  ];

  return (
    <div className="p-4">
      <Carousel slides={slides} autoPlayInterval={5000} className="shadow-xl" />
    </div>
  );
}
