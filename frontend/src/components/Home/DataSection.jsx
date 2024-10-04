import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

// 3D Scene Components remain the same as before
const ElementaryScene = () => {
  return (
    <Canvas style={{ height: '300px' }}>
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
  );
};

const MiddleSchoolScene = () => {
  return (
    <Canvas style={{ height: '300px' }}>
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
  );
};

const HighSchoolScene = () => {
  return (
    <Canvas style={{ height: '300px' }}>
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

  const handleGradeLevelClick = (level) => {
    setGradeLevel(level);
    // Navigate with a slight delay to allow animation to complete
    setTimeout(() => {
      navigate(`/learn/${level}`);
    }, 300);
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
              onClick={() => handleGradeLevelClick(level)}
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
