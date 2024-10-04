import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

// 3D Scene Components with encouraging text and attractive background
const ElementaryScene = () => {
    return (
      <>
        <Canvas style={{ height: '300px', background: 'linear-gradient(135deg, #f0f9ff 0%, #cbebff 100%)' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[1.5, 32, 32]} />
              <meshPhongMaterial color="#4CAF50" wireframe />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <p className="text-center text-lg font-semibold text-green-600 mt-4 fade-in">
          "🌊 Dive into the magic of the ocean! Have you ever wondered why the sea is blue, green, or even red sometimes? 
          With NASA's PACE mission, you're about to find out! Become a young explorer and help us discover the secrets of the deep blue. 
          What amazing things will YOU uncover today?"
        </p>
      </>
    );
  };
  
  const MiddleSchoolScene = () => {
    return (
      <>
        <Canvas style={{ height: '300px', background: 'linear-gradient(135deg, #fff0f0 0%, #ffc6c6 100%)' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={2}>
            <group>
              <mesh position={[-2, 0, 0]}>
                <torusGeometry args={[1, 0.3, 16, 100]} />
                <meshPhongMaterial color="#FFC107" />
              </mesh>
              <mesh position={[2, 0, 0]}>
                <octahedronGeometry args={[1]} />
                <meshPhongMaterial color="#2196F3" />
              </mesh>
            </group>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <p className="text-center text-lg font-semibold text-yellow-600 mt-4 fade-in">
          "🌊 Get ready to level up your science game! Have you ever thought about how scientists know so much about our oceans? 
          With NASA's PACE mission, YOU get to investigate how we track the health of our planet by studying the color of the water. 
          Whether you're into science, technology, or just love the ocean, there's something here for you to dive into!"
        </p>
      </>
    );
  };
  
  const HighSchoolScene = () => {
    return (
      <>
        <Canvas style={{ height: '300px', background: 'linear-gradient(135deg, #e0f0ff 0%, #a1d8ff 100%)' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={1} rotationIntensity={1.5}>
            <group>
              <mesh position={[-2, 0, 0]}>
                <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                <meshPhongMaterial color="#9C27B0" />
              </mesh>
              <mesh position={[2, 0, 0]}>
                <icosahedronGeometry args={[1]} />
                <meshPhongMaterial color="#F44336" />
              </mesh>
            </group>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <p className="text-center text-lg font-semibold text-blue-600 mt-4 fade-in">
          "🌊 You're on the brink of discovery. The PACE mission isn't just about studying the oceans—it's about solving global 
          challenges like climate change. NASA’s cutting-edge data is waiting for you to explore. Whether you’re thinking of a career 
          in science or just love solving real-world problems, this is your chance to make an impact!"
        </p>
      </>
    );
  };
  const DataSection = () => {
  const [gradeLevel, setGradeLevel] = useState('elementary');
  const navigate = useNavigate();

  const renderDataContent = () => {
    switch (gradeLevel) {
      case 'elementary':
        return <ElementaryScene />;
      case 'middle':
        return <MiddleSchoolScene />;
      case 'high':
        return <HighSchoolScene />;
      default:
        return <ElementaryScene />; // Default case to handle any undefined level
    }
  };

  const handleGradeLevelHover = (level) => {
    setGradeLevel(level);
  };

  const handleGradeLevelClick = (level) => {
    navigate(`/learn/${level}`); // Navigate to the grade level page
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Interactive Learning
        </h2>
        <div className="text-center mb-8 space-x-4">
          {['elementary', 'middle', 'high'].map((level) => (
            <button
              key={level}
              className={`px-6 py-3 rounded-lg transition-all duration-300 
                transform hover:-translate-y-1
                ${gradeLevel === level 
                  ? 'bg-blue-500 text-white shadow-lg scale-105' 
                  : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50'
                }
              `}
              onMouseEnter={() => handleGradeLevelHover(level)} // Change scene on hover
              onClick={() => handleGradeLevelClick(level)} // Navigate on click
            >
              {level.charAt(0).toUpperCase() + level.slice(1)} 
              {level === 'middle' ? ' School' : level === 'high' ? ' School' : ''}
            </button>
          ))}
        </div>
        <div className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300">
          {renderDataContent()}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
