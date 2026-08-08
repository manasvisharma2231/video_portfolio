import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/hero.mp4';

const Hero = ({ isAppLoading }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Starts unmuted (preloader button click fulfills browser policy)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Listen to App loading state. Once the user clicks "Enter Portfolio" in the preloader,
  // isAppLoading turns false. This user interaction allows unmuted audio playback.
  useEffect(() => {
    if (!isAppLoading && videoRef.current) {
      // 500ms delay to align with the preloader slide-up transition
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.muted = false;
          setIsMuted(false);
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn("Unmuted playback failed, playing muted as fallback:", err);
              // Fallback: if browser still blocks it, play muted
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                videoRef.current.play()
                  .then(() => setIsPlaying(true))
                  .catch(e => console.error("Video play error:", e));
              }
            });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isAppLoading]);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      // If it is paused OR currently muted, unmute it, restart from beginning and play
      if (videoRef.current.paused || isMuted) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        setIsMuted(false);
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Error playing video:", err));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-[100dvh] min-h-[100svh] overflow-hidden bg-black">
      <video
        ref={videoRef}
        muted={isMuted}
        playsInline
        onEnded={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover object-[81%_30%] md:object-[71%_center]"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none"
          >
            Hi, I’m <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_white]">Manasvi Sharma</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-lg font-semibold mb-8 max-w-lg drop-shadow-md leading-relaxed"
          >
            Second-Year Computer Science Undergraduate & Aspiring Software Engineer at IIIT Lucknow. Developing robust full-stack applications and intelligent systems.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects" 
              className="px-6 py-2.5 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md inline-block text-center cursor-pointer"
            >
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href="#contact" 
              className="px-6 py-2.5 text-xs md:text-sm rounded-full bg-black/40 border border-white/20 text-white font-bold hover:bg-black/60 transition-all duration-300 backdrop-blur-md inline-block text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
            {!isPlaying || isMuted ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {!isPlaying || isMuted ? "Play Reel" : "Pause"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
