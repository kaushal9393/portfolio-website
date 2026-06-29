"use client";

import { Canvas } from "@react-three/fiber";
import { Float, TorusKnot } from "@react-three/drei";

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

export default function HeroShape() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingShape />
    </Canvas>
  );
}
