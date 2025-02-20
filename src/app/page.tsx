"use client"
import type { NextPage } from 'next';
import SlidingImage from "@/app/components/slidingimage/index"
import Link from "next/link";
import Image from 'next/image';
import React from "react";
import Home from "@/app/components/ui/scrolltest"
import Contact from "@/app/components/contact/index"
import { FlipWords } from './components/ui/flipword';
import { MaskContainer } from './components/ui/svgmask';
import FloatingImage from './components/bookfloat';
// import styles from '@/app/components/contact/style.module.scss';
// import Image from 'next/image';
// import { useRef } from 'react';
// import { useScroll, motion, useTransform } from 'framer-motion';
// import Magnetic from '@/app/components/magnetic/index';
import Rotate from '@/app/components/3dtext/index'
import Hero from '@/app/components/Hero'
// const customFont = localFont({
//     src: '/home/kevin/Desktop/hertstest/public/fonts/kenyan-coffee.bold.otf',
//     display: 'swap',
// });
// import AnimatedCards from './components/animatedcard';
// import SlidingImages from './components/ui/sliding';

// import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid"
// import {
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";
// import Contact from '../components/Contact';
// import { TracingBeam } from "@/app/components/TracingBeam";
// import Contact from './components/ui/contact';
// import styles from '../styles/Home.module.scss';
import { TextGenerateEffect } from './components/ui/textgenerate';
import { useState, useEffect } from "react";
import { AnimatePresence, color} from 'framer-motion';
import Preloader from '@/app/components/Preloader/index'


const IndexPage: NextPage = () => {
  
  const words = ["learn", "innovate", "grow"];

  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {

    (

      async () => {


          setTimeout( () => {

            setIsLoading(false);

            document.body.style.cursor = 'default'

            window.scrollTo(0,0);

          }, 2000)

      }

    )()

  }, [])
  return (
    <div className='bg-black'>
    <AnimatePresence mode='wait'>

    {isLoading && <Preloader />}

  </AnimatePresence>
      
         
       
      {/* <section className={styles.home}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video}>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </section>
     */}
     {/* <section className="section  flex justify-center items-center text-white text-4xl "style={{ 
    backgroundImage: "url('/lab.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"
  }}> */}
  <section style={{background:"black"}}>
     <Hero/></section>
      <section className="section  flex justify-center items-center text-white text-4xl">
        
        <FloatingImage/>
      {/* <div
  style={{ 
    backgroundImage: "url('/forest.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh"
  }}
  className="w-screen h-screen"
> */}

        {/* <Spline scene="https://prod.spline.design/S0vd4VZPGIeQQU8m/scene.splinecode" /> */}
      

{/* </div> */}
                        {/* <Spline
                            scene="https://prod.spline.design/TsiaANy9YczKoz91/scene.splinecode"
                            style={{ width: '100%', height: '100%' }}
                        /> */}
                
</section>
<section>
<Home/>
{/* <section
  className="section flex justify-center p-6 md:p-12 items-center text-white text-4xl text-center"
  style={{
    background: "linear-gradient(to bottom, #340253 75%, #360155 100%)",
  }}
> */}
</section>
{/* <section className="p-8 md:p-16 text-black flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(to bottom, #340253 75%, #370257 100%)" }}> */}
 <section>
<Rotate/></section>
{/* </section> */}
<section className="p-8 md:p-16 text-black flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(to bottom, #340253 75%, #370257 100%)" }}>
 

  <div className="bg-[#ECECEC] border-black border rounded-2xl p-8 md:p-10 max-w-5xl w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <h2 className="font-['Bold'] text-3xl md:text-4xl mb-4 text-black">About</h2>
    {/* <p className="font-['Regular'] text-lg md:text-xl leading-relaxed text-black"> */}
      <TextGenerateEffect words={`ECSA is a dynamic platform where students experiment, explore, and innovate in electronics, 
      communication, embedded systems, and emerging technologies. Whether you are passionate about 
      hardware design, automation, AI, IoT, or VLSI, ECSA provides hands-on experience, thrilling competitions, 
      and exposure to industry leaders.`}/>
    {/* </p> */}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl w-full">
    <div className="bg-[#ECECEC] border-black border rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="font-['Bold'] text-2xl md:text-3xl text-black mb-4">Our Mission</h2>
      {/* <p className="font-['Regular'] text-lg md:text-xl leading-relaxed text-black"> */}
        <TextGenerateEffect words={`Our mission is to bridge the gap between academia and industry, providing students with 
        the skills and exposure needed to excel in the fast-paced world of technology.`}/>
      {/* </p> */}
    </div>

    <div className="bg-[#ECECEC] border-black border rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <h2 className="font-['Bold'] text-2xl md:text-3xl text-black mb-4">We Encourage</h2>
      {/* <p className="font-['Regular'] text-lg md:text-xl leading-relaxed text-black"> */}
        <TextGenerateEffect words={`Collaboration, creativity, and problem-solving through interactive thinking.`}/>
      {/* </p> */}
    </div>
  </div>
</section>
<section className="h-screen flex items-center justify-center snap-start" style={{ background: "linear-gradient(to bottom, #370257 75%, #370257 100%)" }}>
<div className="h-screen snap-center flex flex-col justify-center items-center px-4 text-center">
  <div className="font-['Bold'] text-4xl sm:text-5xl md:text-6xl font-normal text-white">
    ECSA is a perfect place to 
    <br />
    <FlipWords words={words} />
  </div>
</div></section>
<section
  style={{
    backgroundImage: "url('/transfull.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="section flex justify-center items-center text-white text-4xl"
>
  <div className="p-0 w-full max-w-4xl">
    <div className="w-full grid grid-cols-1 gap-0"> {/* Using grid to remove gaps */}
      <Link href="/page1">
        <div className="relative w-full h-auto">
          <Image src="/bann1.webp" alt="Banner 1" width={1000} height={500} className="w-full h-auto object-contain" />
        </div>
      </Link>
      <Link href="/page1">
        <div className="relative w-full h-auto">
          <Image src="/bann2.webp" alt="Banner 2" width={1000} height={500} className="w-full h-auto object-contain" />
        </div>
      </Link>
      <Link href="/page1">
        <div className="relative w-full h-auto">
          <Image src="/bann3.webp" alt="Banner 3" width={1000} height={500} className="w-full h-auto object-contain" />
        </div>
      </Link>
      <Link href="/page1">
        <div className="relative w-full h-auto">
          <Image src="/bann4.webp" alt="Banner 4" width={1000} height={500} className="w-full h-auto object-contain" />
        </div>
      </Link>
    </div>
  </div>
</section>


      <section className="w-full h-screen ">
      <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-7xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            ABOUT HERTZ
          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        Hertz 2025 <span className="text-red-500">TECH FEST</span> is a beautiul thing <span className="text-red-500">WRITE CONENTS</span>.
      </MaskContainer>
    </div>
      </section>

      <section style={{
    backgroundColor: "#280d40",}}>
<Home/>
{/* <section
  className="section flex justify-center p-6 md:p-12 items-center text-white text-4xl text-center"
  style={{
    background: "linear-gradient(to bottom, #340253 75%, #360155 100%)",
  }}
> */}
</section>

      <section
      className="p-6 md:p-12 text-white"
      style={{
        backgroundColor: "#340452",
      }}
    >
      <SlidingImage/></section>
      

{/* 
<section className="w-full h-screen bg-black">
  <SlidingImage/>
</section> */}
<section className="section  flex justify-center items-center text-white text-4xl">
  <Contact />
</section>
    </div>
      
      
      
      
       
    
  );
};

export default IndexPage;