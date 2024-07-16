'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Empowering Scholars", subtitle: "Shape Your Future with Our Scholarships" },
    { title: "Unlock Your Potential", subtitle: "Prestigious Scholarship Opportunities Await" },
    { title: "Academic Excellence", subtitle: "Join Our Community of High Achievers" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-red-50 to-red-100 min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-grid-red/[0.05] bg-[size:20px_20px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 400 - 200],
              x: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <AnimatePresence initial={false} custom={currentSlide} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-red-600">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-800">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.a
            href="/exam-registration"
            className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-red-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Exam Registration
          </motion.a>
          <motion.a
            href="/hall-ticket"
            className="w-full sm:w-auto px-8 py-3 border-2 border-red-600 text-red-600 font-semibold text-lg hover:bg-red-600 hover:text-white transition duration-300 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Hall Ticket
          </motion.a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-red-600' : 'bg-red-300 hover:bg-red-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
