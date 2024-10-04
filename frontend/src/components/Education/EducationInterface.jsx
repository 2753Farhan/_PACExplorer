import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useParams, Link } from 'react-router-dom';
import PhytoEnemy from '../Games/PhytoEnemy'; // Assume this is your ocean-related game

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
        title: "Exploring Phytoplankton",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: Meet Phytoplankton</h4>
              {/* Add an image representing the phytoplankton lesson */}
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
              <p className="mt-2">
                Learn about how these tiny organisms are essential for the Earth's ecosystem, producing oxygen and supporting marine life!
              </p>
              <Link to={`https://nasa-space-app-challenge-ruby.vercel.app/`} className="text-blue-600 underline">View All Lessons</Link>
            </div>
          </div>
        )
      },
      middle: {
        title: "Oceans and Climate",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: How Oceans Influence Climate</h4>
              {/* Add an image related to oceans and climate */}
            
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
              <p className="mt-2">
                Discover how the ocean regulates global temperatures and influences climate patterns across the planet.
              </p>
              <Link to={`https://nasa-space-app-challenge-ruby.vercel.app/`} className="text-blue-600 underline">View All Lessons</Link>
            </div>
          </div>
        )
      },
      high: {
        title: "Climate Change and Ocean Ecosystems",
        content: (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Lesson 1: The PACE Mission's Role</h4>
              {/* Add an image related to NASA’s PACE mission */}
             
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
              <p className="mt-2">
                Delve into NASA's PACE mission and how it monitors Earth's oceans and atmosphere to understand climate changes.
              </p>
              <Link to={`https://nasa-space-app-challenge-ruby.vercel.app/`} className="text-blue-600 underline">View All Lessons</Link>
            </div>
          </div>
        )
      },
    },
    quizzes: {
      elementary: {
        title: "Phytoplankton Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: What Do You Know About Phytoplankton?</h4>
              <Link to={`/quizzes/${gradeLevel}`} className="text-blue-600 underline">Take the Quiz</Link>
            </div>
          </div>
        )
      },
      middle: {
        title: "Oceans and Climate Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: How Does the Ocean Affect Weather?</h4>
              <Link to={`https://efty1309.github.io/quizzapp/`} className="text-blue-600 underline">Take the Quiz</Link>
            </div>
          </div>
        )
      },
      high: {
        title: "PACE Mission Quiz",
        content: (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Quiz 1: Understanding PACE and Climate Research</h4>
              <Link to={`https://efty1309.github.io/quizzapp/`} className="text-blue-600 underline">Take the Quiz</Link>
            </div>
          </div>
        )
      },
    },
    games: {
      elementary: {
        title: "Phytoplankton Defense",
        content: (
          <div className="space-y-4">
            <PhytoEnemy />
            <p className="mt-2">
              Protect the oceans by keeping the phytoplankton safe from harmful pollutants!
            </p>
          </div>
        )
      },
      middle : {
        title: "Phytoplankton Defense",
        content: (
          <div className="space-y-4">
            <p className="mt-2">
              Test your knowledge of ocean ecosystems and save phytoplankton from environmental threats.
            </p>
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <Link to="http://localhost:5174/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Play Phytoplankton Defense
              </Link>
              <Link to="/" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition">
                Back to Home
              </Link>
            </div>
          </div>
        )
      },
      high: {
        title: "Phytoplankton Defense",
        content: (
          <div className="space-y-4">
            <PhytoEnemy />
            <p className="mt-2">
              Use strategy and ocean science to defend Earth’s most important tiny organisms.
            </p>
          </div>
        )
      },
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

// Educational Interface Component
const EducationalInterface = () => {
  const { gradeLevel } = useParams();
  const [currentGradeLevel, setCurrentGradeLevel] = useState(gradeLevel || 'elementary');
  
  const gradeLevelQueries = {
    elementary: {
      title: "Elementary Level",
      learningGoal: "Explore basic ocean life and ecosystem understanding.",
      currentTopic: "Phytoplankton and their role in the food chain.",
      prompt: "Learn how tiny ocean plants keep the planet healthy!"
    },
    middle: {
      title: "Middle School Level",
      learningGoal: "Understand how oceans influence climate and weather patterns.",
      currentTopic: "Ocean currents and their effects on global climate.",
      prompt: "Discover how the oceans shape our planet's climate!"
    },
    high: {
      title: "High School Level",
      learningGoal: "Learn about advanced ecosystem dynamics and climate change.",
      currentTopic: "The PACE Mission and its role in climate research.",
      prompt: "Deep dive into climate science with the PACE mission!"
    }
  };

  // Get data based on grade level
  const gradeData = gradeLevelQueries[currentGradeLevel] || gradeLevelQueries['elementary'];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentGradeLevel]);

  return (
    <div className="min-h-screen mt-24 flex flex-col items-center justify-center">
    <div className="text-gray-600 space-y-4 text-center">
      <h2 className="text-3xl font-bold">{gradeData.title}</h2>
      <p className="text-lg font-medium">
        <span className="font-semibold text-blue-600">Learning Goal: </span>
        {gradeData.learningGoal}
      </p>
      <p className="text-lg font-medium">
        <span className="font-semibold text-green-600">Current Topic: </span>
        {gradeData.currentTopic}
      </p>
      <p className="text-lg font-medium italic text-gray-700">{gradeData.prompt}</p>
    </div>
  
    {/* Pass the current grade level to the educational content */}
    <div className="mt-4">
      <EducationalContent gradeLevel={currentGradeLevel} />
    </div>
  </div>
  
  );
};

export default EducationalInterface;
