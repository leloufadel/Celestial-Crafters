import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <motion.div
          key={currentSlide}
          initial={{ x: 0 }}
          animate={{ x: -currentSlide * 100 + '%' }}
          transition={{ type: 'tween' }}
          className="flex transition-all"
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full">
              {slide}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-md"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
