import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold">CORE DOMAINS</p>
          <p>Software Engineering & Algorithms</p>
          <p>Full-Stack Web Architectures</p>
          <p>Machine Learning Pipelines</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-white font-bold">EDUCATION</p>
          <p>B.Tech CS Undergrad Scholar</p>
          <p>IIIT Lucknow</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-2 underline-offset-4 decoration-1 font-bold">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-end">
          <p className="text-white font-bold">AVAILABILITY</p>
          <p>Based in India</p>
          <p>Open to Global Internships</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[15vw] md:text-[12vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          manasvi
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/40 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Manasvi Sharma | Engineered with React & Tailwind CSS
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:manasvisharma2231@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">manasvisharma2231@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-3 md:items-end">
          <p className="text-white font-bold uppercase tracking-widest text-[8px] md:text-[10px]">Ecosystem Links</p>
          <div className="flex flex-wrap gap-4 text-[9px] md:text-[10px] md:justify-end">
            <a href="https://github.com/manasvisharma2231" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors decoration-1">GitHub</a>
            <a href="https://linkedin.com/in/manasvi-sharma-iiitl" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors decoration-1">LinkedIn</a>
            <a href="https://instagram.com/manasvi_sharma" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors decoration-1">Instagram</a>
            <a href="https://x.com/manasvi_sharma" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors decoration-1">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
