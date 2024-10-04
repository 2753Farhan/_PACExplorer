import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Globe from './Globe';
import HowItWorks from './HowItWorks';
import DataSection from './DataSection';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Globe */}
      <section className="bg-[#001f3f] text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Explore the PACE Mission</h1>
          <p className="mt-4">
            Discover how NASA’s PACE mission helps us understand our oceans and
            atmosphere
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Canvas className="globe-container" style={{ height: '400px', width: '100%' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} />
            <Globe />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Data Section */}
      <DataSection />

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default Home;
