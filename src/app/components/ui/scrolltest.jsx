'use client'

import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Slide = ({ src, top, direction, scrollYProgress }) => {
    const dir = direction === 'left' ? -1 : 1;
    const translateX = useTransform(scrollYProgress, [0, 1], [250 * dir, -250 * dir]);

    return (
        <motion.div 
            style={{ x: translateX, top }} 
            className="absolute w-full flex whitespace-nowrap"
        >
            <Phrase src={src} />
            <Phrase src={src} />
            <Phrase src={src} />
        </motion.div>
    );
};

const Phrase = ({ src }) => {
    return (
        <div className="px-3 flex gap-3 items-center">
            <p className="text-[8vw] sm:text-[6vw] md:text-[5vw] font-bold text-white">HERTZ</p>
            <span className="relative h-[8vw] sm:h-[6vw] md:h-[5vw] aspect-[4/2] rounded-full overflow-hidden">
                <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
            </span>
        </div>
    );
};

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            duration: 1.5,
            syncTouch: true,
            smoothTouch: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <main 
            ref={container}
            className="overflow-hidden relative h-[100vh] md:h-[80vh] sm:h-[60vh] snap-y snap-mandatory"
            style={{
                background: "linear-gradient(to bottom, #280d40 75%, #360155 100%)"
            }}
        >
            <section className="relative h-[50vh] md:h-[40vh] sm:h-[30vh] w-full snap-center">
                <Slide src="/logo.svg" top="10%" direction="right" scrollYProgress={scrollYProgress} />
                <section className="h-[50vh] md:h-[40vh] sm:h-[30vh] flex items-center justify-center snap-center" />
                <Slide src="/logo.svg" top="50%" direction="left" scrollYProgress={scrollYProgress} />
                <section className="h-[50vh] md:h-[40vh] sm:h-[30vh] flex items-center justify-center snap-center" />
                <Slide src="/logo.svg" top="90%" direction="right" scrollYProgress={scrollYProgress} />
                <section className="h-[50vh] md:h-[40vh] sm:h-[30vh] flex items-center justify-center snap-center" />
                <Slide src="/logo.svg" top="130%" direction="left" scrollYProgress={scrollYProgress} />
            </section>
        </main>
    );
}
