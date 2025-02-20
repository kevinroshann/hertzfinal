"use client";

import { motion } from "framer-motion";

export default function FloatingImage() {
  return (
    <div
  style={{ 
    backgroundImage: "url('/forest.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"
  }}
  className="w-screen h-screen"
>
<div className="flex justify-center items-center h-screen">
      <motion.img
        src="/book.png" // Replace with your image path
        alt="Floating Image"
        className="w-1/2 max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]" // Responsive sizing
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }} // Moves up and down more noticeably
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </div>
    </div>
  );
}
