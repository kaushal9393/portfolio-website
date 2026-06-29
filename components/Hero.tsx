"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, TorusKnot } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

function StarBackground(props: any) {
  const ref = useRef<any>();
  // 5001 is a multiple of 3 (1667 points * 3 coordinates) to prevent NaN errors in THREE.js
  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00ff88"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <TorusKnot args={[1, 0.3, 128, 16]} scale={0.7}>
        <meshStandardMaterial 
          color="#00ff88" 
          wireframe 
          transparent
          opacity={0.3}
          emissive="#00ff88"
          emissiveIntensity={0.5}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <StarBackground />
          </Canvas>
        </div>
      )}

      {/* Social Sidebar */}
      <div className="hidden md:flex flex-col gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <a href="https://github.com/kaushal9393" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kaushal-giri-24a47b346" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiLinkedin size={24} />
        </a>
        <a href="mailto:kaushalgiri8080@gmail.com" className="text-muted hover:text-accent transition-colors hover:-translate-y-1 duration-300">
          <FiMail size={24} />
        </a>
        <div className="w-[1px] h-24 bg-white/10 mx-auto mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:ml-16 lg:ml-24">
          
          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted mb-4 font-mono flex items-center gap-2">
                Welcome to my portfolio
                <span className="w-2 h-5 bg-accent animate-pulse inline-block"></span>
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              I craft beautiful, performant web experiences using modern technologies. 
              Specializing in React, Next.js, and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 rounded-full text-primary font-medium overflow-hidden transition-all hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]"
              >
                <div className="absolute inset-0 bg-accent/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">View Projects</span>
                <FiArrowDown className="relative z-10 group-hover:rotate-[-90deg] transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

          {/* Right Floating Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block h-[500px] w-full"
          >
            {mounted && (
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingShape />
              </Canvas>
            )}
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs tracking-widest text-muted uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[ping_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
