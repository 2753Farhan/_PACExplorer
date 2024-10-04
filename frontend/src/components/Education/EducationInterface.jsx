import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { useNavigate, useParams } from 'react-router-dom';

// Activity Tab Component
const ActivityTab = ({ isActive, activity, content }) => {
  return (
    <div 
      className={`
        transform transition-all duration-500 ease-in-out
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
      `}
    >
      <div className="bg-white rounded-xl shadow-xl p-6 min-h-[500px]">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">{activity}</h3>
        {content}
      </div>
    </div>
  );
};

// Educational Content Component
const EducationalContent = ({gradeLevel}) => {
  const [activeTab, setActiveTab] = useState('lessons');
  const [isAnimating, setIsAnimating] = useState(false);
//   useEffect(() => {
//     setCurrentLevel(gradeLevel); // Update state when gradeLevel changes in the URL
//   }, [gradeLevel]);

  const activities = {
    lessons: {
      elementary: {
        title: "Ocean Life Basics",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: Meet the Ocean Friends</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={2} rotationIntensity={1}>
                  <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial color="#2196F3" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Learn about different sea creatures and their homes!</p>
            </div>
            {/* Add more lesson content */}
          </div>
        )
      },
      middle: {
        title: "Ocean Life Basics",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: Meet the Ocean Friends</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={2} rotationIntensity={1}>
                  <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial color="#2196F3" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Learn about different sea creatures and their homes!</p>
            </div>
            {/* Add more lesson content */}
          </div>
        )      },
      high: {
        title: "Ocean Life Basics",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: Meet the Ocean Friends</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={2} rotationIntensity={1}>
                  <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshPhongMaterial color="#2196F3" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Learn about different sea creatures and their homes!</p>
            </div>
            {/* Add more lesson content */}
          </div>
        )      }
    },
    quizzes: {
      elementary: {
        title: "Fun Ocean Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: Ocean Animals</h4>
              {/* Add quiz content */}
            </div>
          </div>
        )
      },
      middle: {
        title: "Fun Ocean Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: Ocean Animals</h4>
              {/* Add quiz content */}
            </div>
          </div>
        )
      },
      high: {
        title: "Fun Ocean Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: Ocean Animals</h4>
              {/* Add quiz content */}
            </div>
          </div>
        )
      },
      // Add middle and high school quizzes
    },
    games: {
      elementary: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Game 1: Save the Ocean</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={3} rotationIntensity={2}>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color="#9C27B0" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Help clean the ocean and save marine life!</p>
            </div>
          </div>
        )
      },
      middle: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Game 1: Save the Ocean</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={3} rotationIntensity={2}>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color="#9C27B0" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Help clean the ocean and save marine life!</p>
            </div>
          </div>
        )
      },
      high: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Game 1: Save the Ocean</h4>
              <Canvas style={{ height: '200px' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float speed={3} rotationIntensity={2}>
                  <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshPhongMaterial color="#9C27B0" />
                  </mesh>
                </Float>
                <OrbitControls enableZoom={false} />
              </Canvas>
              <p className="mt-2">Help clean the ocean and save marine life!</p>
            </div>
          </div>
        )
      },
      // Add middle and high school games
    }
  };

  const handleTabChange = (tab) => {
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          {['lessons', 'quizzes', 'games'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`
                px-6 py-3 rounded-lg transition-all duration-300
                transform hover:-translate-y-1
                ${activeTab === tab 
                  ? 'bg-blue-500 text-white shadow-lg scale-105' 
                  : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative">
          {Object.keys(activities).map((activity) => (
            <ActivityTab
              key={activity}
              isActive={activeTab === activity}
              activity={activities[activity][gradeLevel].title}
              content={activities[activity][gradeLevel].content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
// Main Component
const EducationalInterface = () => { // Default value
    const { gradeLevel } = useParams();
    return (
      <div className="min-h-screen">
        <nav className="bg-white shadow-md p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Ocean Explorer</h1>
            <span className="text-gray-600">
              {gradeLevel ? gradeLevel.charAt(0).toUpperCase() + gradeLevel.slice(1) : 'Elementary Level'}
            </span>
          </div>
        </nav>
        <EducationalContent gradeLevel={gradeLevel} />
      </div>
    );
  };
  

export default EducationalInterface;