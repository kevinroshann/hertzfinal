"use client"
import styles from './home.module.css'
import Text3d from '../Text3d';
import { useRef, useEffect } from 'react';

export default function Rotate() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    
    <div
  onMouseMove={(e) => manageMouseMove(e)}
  className={styles.container}
  style={{
    background: "linear-gradient(to bottom, #340253 75%, #370257 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Ensures full height
  }}
>
  <div ref={plane} className={styles.body}>
    <Text3d primary={"Electronics and"} secondary={"Electronics and"} />
    <Text3d primary={"Communication"} secondary={"Communication"} />
    <Text3d primary={"Students"} secondary={"Students"} />
    <Text3d primary={"Association"} secondary={"Association"} />
  </div>
</div>

  )
}