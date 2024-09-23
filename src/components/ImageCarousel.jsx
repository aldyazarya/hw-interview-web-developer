import { useState } from "react";

import Rating from "./Rating";
import Tooltip from "./Tooltip";

function ImageCarousel({ images }) {
  const featuredImages = images.filter((image) => image.is_featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Previous Slide
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? featuredImages.length - 1 : currentIndex - 1
    );
  };

  // Handle Next Slide
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === featuredImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto py-8">
      <div className="relative h-96 rounded-lg  overflow-hidden  shadow-lg">
        <img
          src={featuredImages[currentIndex].image_url}
          alt={featuredImages[currentIndex].title}
          className="w-full h-full  object-cover transition-transform duration-500 ease-in-out transform scale-105 cursor-pointer"
        />

        {/* Title and Rating */}
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-between items-center bg-gradient-to-t from-black to-transparent px-2 py-6">
            <h3 className="text-lg font-semibold text-white">
              {featuredImages[currentIndex].title}
            </h3>
            <Rating rating={featuredImages[currentIndex].rating} />
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white h-10 w-10 p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={prevSlide}
      >
        <Tooltip text={"Previous Image"}>&#10094;</Tooltip>
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white h-10 w-10 p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={nextSlide}
      >
        <Tooltip text={"Next Image"}>&#10095;</Tooltip>
      </button>
    </div>
  );
}

export default ImageCarousel;
