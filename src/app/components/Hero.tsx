"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
// const fonts = [
//     "font-['Bold']",
//     "font-['Regular']",
   
  
//   ];
const texts = ["HERTZ", "ഹെർട്സ്", "ஹெர்ட்ஸ்", "हेटर्स", "హెర్ట్జ్"];
const fonts = ["font-['Bold']", "sans-serif", "monospace", "cursive", "fantasy"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [font, setFont] = useState(fonts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setFont(fonts[Math.floor(Math.random() * fonts.length)]);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          className="absolute text-9xl font-bold"
          style={{ fontFamily: font }}
          initial={{ opacity: 0, filter: "blur(100px)" }}
          animate={{ opacity: 1, filter: "blur(0px)", transition: { duration: 1.5 } }}
          exit={{ opacity: 0, filter: "blur(100px)", transition: { duration: 1.5 } }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
