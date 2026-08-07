import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Wait for the water fill animation (1.6s) to finish before showing the button
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center"
    >
      {/* Logo Container */}
      <motion.div 
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative text-5xl md:text-7xl font-black tracking-tighter"
      >
        {/* Background text (empty state) */}
        <div className="text-red-900/30">
          Manasvi<span className="text-red-900/30">.</span>
        </div>

        {/* Foreground text (water fill state) */}
        <motion.div 
          className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
        >
          Manasvi<span className="text-black">.</span>
        </motion.div>
      </motion.div>

      {/* Premium Enter Button */}
      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={onComplete}
          className="absolute bottom-20 md:bottom-28 px-10 py-4 rounded-full border border-white/20 hover:border-white bg-white/5 hover:bg-white hover:text-[#ff2a2a] text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 backdrop-blur-md cursor-pointer hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
        >
          Enter Portfolio
        </motion.button>
      )}
    </motion.div>
  );
};

export default Preloader;
