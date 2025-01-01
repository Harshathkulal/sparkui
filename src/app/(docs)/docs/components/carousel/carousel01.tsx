"use client";

import React, { useState } from "react";
import Image from "next/image";

export const Carousel01 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/Cat.jpg", alt: "A cute cat" },
    { src: "/Dog.jpg", alt: "A playful dog" },
    { src: "/elephant.jpg", alt: "A majestic elephant" },
  ];

  // If the images array is empty, return early to avoid errors
  if (images.length === 0) {
    return (
      <div className="w-full max-w-lg mx-auto text-center py-8">
        <p>No images available.</p>
      </div>
    );
  }

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Image */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        {/* Display the image only if available */}
        {images[currentIndex] ? (
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            width={400}
            height={400}
          />
        ) : (
          // Fallback if the image doesn't load or is unavailable
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white">
            No image available
          </div>
        )}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &gt;
      </button>

      {/* Optional: Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-black" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Carousel01Code = `
import React, { useState } from "react";
import Image from "next/image";

export const Carousel01 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/Cat.jpg", alt: "A cute cat" },
    { src: "/Dog.jpg", alt: "A playful dog" },
    { src: "/elephant.jpg", alt: "A majestic elephant" },
  ];

  // If the images array is empty, return early to avoid errors
  if (images.length === 0) {
    return (
      <div className="w-full max-w-lg mx-auto text-center py-8">
        <p>No images available.</p>
      </div>
    );
  }

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Carousel Image */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        {/* Display the image only if available */}
        {images[currentIndex] ? (
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            width={400}
            height={400}
          />
        ) : (
          // Fallback if the image doesn't load or is unavailable
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white">
            No image available
          </div>
        )}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
      >
        &gt;
      </button>

      {/* Optional: Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={\`w-3 h-3 rounded-full cursor-pointer \${
              currentIndex === index ? "bg-black" : "bg-white"
            }\`}
          />
        ))}
      </div>
    </div>
  );
};
`;
