import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useParams } from 'react-router-dom';
import PhytoEnemy from '../Games/PhytoEnemy'

// Activity Tab Component
const ActivityTab = ({ isActive, activity, content }) => {
  if (!isActive) return null; // Only render the active tab

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 min-h-[500px]">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">{activity}</h3>
      {content}
    </div>
  );
};

// Educational Content Component
const EducationalContent = ({ gradeLevel }) => {
  const [activeTab, setActiveTab] = useState('lessons');

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
          </div>
        )
      },
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
          </div>
        )
      },
      // ... (middle and high school lesson content)
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
      // ... (middle and high school quiz content)
    },
    games: {
      elementary: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <PhytoEnemy />
          </div>
        )
      },
      middle: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <PhytoEnemy />
          </div>
        )
      },
      high: {
        title: "Ocean Explorer Game",
        content: (
          <div className="space-y-4">
            <PhytoEnemy />
          </div>
        )
      },
      // ... (middle and high school game content)
    }
  };

  return (
    <div className="mt-12 min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          {['lessons', 'quizzes', 'games'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-3 rounded-lg transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="transition-all duration-300 ease-in-out">
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
const EducationalInterface = () => {
  const { gradeLevel } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gradeLevel]);

  return (
    <div className="min-h-screen mt-24">

      <span className="text-gray-600">
            {gradeLevel ? gradeLevel.charAt(0).toUpperCase() + gradeLevel.slice(1) : 'Elementary Level'}
      </span>
      <EducationalContent gradeLevel={gradeLevel} />
    </div>
  );
};

export default EducationalInterface;