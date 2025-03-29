'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function FluidFunnel({ data }: { data: number[] }) {
  const meshRef = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      meshRef.current.scale.y = 1 + Math.sin(clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={0.5} />
      <mesh ref={meshRef} position={[0, -2, 0]}>
        <coneGeometry args={[3, 6, 32]} />
        <meshPhysicalMaterial 
          color="#3b82f6"
          transmission={0.8}
          thickness={0.5}
          roughness={0.2}
        />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}