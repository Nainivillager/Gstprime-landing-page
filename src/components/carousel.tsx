import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const items = [
    {
      title: "Preet Raj  ⭐⭐⭐⭐⭐",
      content:
        "GST Prime has completely transformed our billing and inventory processes. The ease of invoicing and product management is unmatched. Highly recommend it for any modern business!",
    },
    {
      title: "Raman Somh  ⭐⭐⭐⭐",
      content:
        "GST Prime is a comprehensive solution that covers all our needs. The billing features are particularly impressive. It's a game-changer for our business.",
    },
    {
      title: "Anamika Singh  ⭐⭐⭐⭐",
      content:
        "Using GST Prime has made our business operations so much smoother. From invoicing to inventory management, everything is now streamlined. Couldn't be happier!",
    },
    {
      title: "Rajeev kaul  ⭐⭐⭐⭐⭐",
      content:
        "GST Prime has completely transformed our billing and inventory processes. The ease of invoicing and product management is unmatched. Highly recommend it for any modern business!",
    },
    {
      title: "Sonu Rajput  ⭐⭐⭐⭐",
      content:
        "GST Prime is a comprehensive solution that covers all our needs. The billing features are particularly impressive. It's a game-changer for our business.",
    },
    {
      title: "Prajwal Negi  ⭐⭐⭐⭐⭐",
      content:
        "Using GST Prime has made our business operations so much smoother. From invoicing to inventory management, everything is now streamlined. Couldn't be happier!",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardTransition = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const next = () => {
    handleCardTransition((currentIndex + 1) % items.length);
  };

  const prev = () => {
    handleCardTransition((currentIndex - 1 + items.length) % items.length);
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = items.length;

    if (windowWidth > 960) {
      // Desktop - show 3 cards
      [-1, 0, 1].forEach((position) => {
        const index = (currentIndex + position + totalCards) % totalCards;
        visibleCards.push({ item: items[index], position, index });
      });
    } else if (windowWidth > 580) {
      // Tablet - show 2 cards
      [-1, 0].forEach((position) => {
        const index = (currentIndex + position + totalCards) % totalCards;
        visibleCards.push({ item: items[index], position, index });
      });
    } else {
      // Mobile - show 1 card
      const index = currentIndex;
      visibleCards.push({ item: items[index], position: 0, index });
    }

    return visibleCards;
  };

  const handleCardClick = (clickedIndex: number) => {
    if (clickedIndex === currentIndex) return;

    const diff = clickedIndex - currentIndex;
    if (Math.abs(diff) <= 1) {
      handleCardTransition(clickedIndex);
    } else {
      const totalCards = items.length;
      const wrappedDiff = (diff + totalCards) % totalCards;
      if (wrappedDiff > totalCards / 2) {
        prev();
      } else {
        next();
      }
    }
  };

  const getCardWidth = () => {
    if (windowWidth > 960) return "w-[calc(33%-2rem)]";
    if (windowWidth > 580) return "w-[calc(45%-1rem)]";
    return "w-[calc(85%-2rem)]";
  };

  const getCardStyle = (position: number) => {
    const baseClasses =
      "transition-all duration-300 ease-in-out absolute top-0 cursor-pointer";

    if (windowWidth > 960) {
      // Desktop view with 3 cards
      switch (position) {
        case -1:
          return `${baseClasses} left-[5%] opacity-50 scale-90 hover:opacity-75 hover:scale-95`;
        case 0:
          return `${baseClasses} left-1/2 -translate-x-1/2 z-20 scale-100 hover:scale-105`;
        case 1:
          return `${baseClasses} right-[5%] opacity-50 scale-90 hover:opacity-75 hover:scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    } else if (windowWidth > 580) {
      // Tablet view with 2 cards
      switch (position) {
        case -1:
          return `${baseClasses} left-[5%] scale-100 hover:scale-105`;
        case 0:
          return `${baseClasses} right-[5%] scale-100 hover:scale-105`;
        default:
          return `${baseClasses} opacity-0`;
      }
    } else {
      // Mobile view with 1 card
      return position === 0
        ? `${baseClasses} left-1/2 -translate-x-1/2 scale-100 hover:scale-105`
        : `${baseClasses} opacity-0`;
    }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative min-h-[300px] sm:min-h-[450px] lg:min-h-[380px]">
        <div className="text-3xl font-bold text-center mb-8 sm:mb-12">
          See What Our Customers Say About Us!
        </div>

        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {getVisibleCards().map(({ item, position, index }) => (
              <div
                key={`${currentIndex}-${index}`}
                className={`${getCardStyle(position)} ${getCardWidth()}`}
                onClick={() => handleCardClick(index)}
              >
                <Card className="h-full transform transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-center">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {item.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          disabled={isAnimating}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-30 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
        </button>
        <button
          onClick={next}
          disabled={isAnimating}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-30 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
