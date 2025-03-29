'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export function LiveGlobe({ data }: { data: Array<{ lat: number; lng: number }> }) {
  const points = data.map(point => {
    const phi = (90 - point.lat) * (Math.PI / 180);
    const theta = (180 - point.lng) * (Math.PI / 180);
    return new THREE.Vector3().setFromSphericalCoords(5, phi, theta);
  });

  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshPhongMaterial color="#2d3748" opacity={0.8} transparent />
        {points.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.1]} />
            <meshBasicMaterial color="#48bb78" />
          </mesh>
        ))}
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}