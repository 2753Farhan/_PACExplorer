// TopicListPage.jsx
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TopicListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const topics = [
    'Easy Global Chlorophyll-a Map',
    'Global Oceans in Quasi True Color',
    'Complete Scene in True Color',
    'False Color for Ice Clouds',
    'Phytoplankton in False Color',
    'Full Spectra from Global Oceans',
    'Animation from Multiple Angles',
    'Understanding Multi-Angle Data',
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-red-600 p-6 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}>
        <div className="text-white text-xl mb-4 flex justify-between items-center">
          <span className="font-bold">Topics</span>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-white">×</button>
        </div>
        <nav className="space-y-2">
          {topics.map((topic, index) => (
            <NavLink 
              key={index} 
              to={`/topic/${encodeURIComponent(topic)}`} 
              className="block py-3 px-4 text-white rounded-lg hover:bg-red-500 hover:shadow-lg transition duration-200 flex items-center space-x-2"
            >
              <span className="material-icons">menu_book</span>
              <span>{topic}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button 
        className="fixed top-4 left-4 z-10 p-2 bg-red-600 text-white rounded-md md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100 p-8 ml-64">
        <h2 className="text-2xl font-bold mb-4">Select a Topic from the Sidebar</h2>
      </div>
    </div>
  );
};

export default TopicListPage;
