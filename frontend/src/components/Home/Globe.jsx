import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Globe = () => {
  const globeRef = useRef();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('/earth-texture.jpg', (texture) => {
      globeRef.current.material.map = texture;
      globeRef.current.material.needsUpdate = true;
    });
  }, []);

  // Add rotation animation
  useFrame(() => {
    if (globeRef.current) {
      // Rotate around the Y-axis
      globeRef.current.rotation.y += 0.002; // Adjust speed by changing this value
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[3, 34, 42]} />
      <meshStandardMaterial color="white" />
      
    </mesh>
  );
};

export default Globe;