import { useState } from "react";

import Rating from "./Rating";
import Tooltip from "./Tooltip";

function PhotoGallery({ images }) {
  const [visibleImages, setVisibleImages] = useState(8);

  // Handle Show More
  const showMoreImages = () => {
    setVisibleImages((prevVisible) => Math.min(prevVisible + 8, images.length));
  };

  // Handle Show Less
  const showLessImages = () => {
    setVisibleImages(8);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.slice(0, visibleImages).map((image) => (
          <div
            key={image.title}
            className="photo-card group relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={image.image_url}
              alt={image.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {image.title}
              </h3>
              <Rating rating={image.rating} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {/* Show More Button */}
        {visibleImages < images.length && (
          <button
            onClick={showMoreImages}
            className="px-6 py-2  dark:text-white text-black rounded-lg   transition"
          >
            <Tooltip text={"show next 8 images"}>Show More ▼</Tooltip>
          </button>
        )}

        {/* Show Less Button */}
        {visibleImages >= images.length && (
          <button
            onClick={showLessImages}
            className="px-6 py-2 ml-4  dark:text-white text-black rounded-lg   transition"
          >
            <Tooltip text={"collapse all images"}>
            Show Less ▲
            </Tooltip>
          </button>
        )}
      </div>
    </div>
  );
}

export default PhotoGallery;
