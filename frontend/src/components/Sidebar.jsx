import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isTopicsOpen, setIsTopicsOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTopicsToggle = () => setIsTopicsOpen(!isTopicsOpen);
  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const navItems = [
    { to: "/chlorophyll-map", label: "Global Chlorophyll-a Map" },
    { to: "/oceans-true-color", label: "Oceans in Quasi True Color" },
    { to: "/false-color-ice-clouds", label: "False Color Ice Clouds" },
    { to: "/phytoplankton-false-color", label: "Phytoplankton in False Color" },
    { to: "/full-spectra-oceans", label: "Full Spectra from Oceans" },
    { to: "/animation-multiple-angles", label: "Multi-Angle Animation" },
    { to: "/understanding-multi-angle-data", label: "Multi-Angle Data Explained" },
  ];

  return (
    <>
      <button
        onClick={handleSidebarToggle}
        className="fixed top-4 left-4 z-50 p-2 bg-teal-600 text-white rounded-full shadow-lg md:hidden hover:bg-teal-700 transition-colors duration-200"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`bg-gradient-to-br from-teal-800 to-cyan-900 text-white h-screen p-6 w-64 fixed top-0 left-0 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-cyan-100">Ocean Explorer</h1>
          </div>

          <div className="mb-6">
            <button 
              onClick={handleTopicsToggle} 
              className="w-full text-left font-semibold flex items-center justify-between p-2 bg-teal-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
            >
              <span>Ocean Topics</span>
              {isTopicsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isTopicsOpen && (
              <ul className="mt-2 space-y-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block p-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? 'bg-cyan-600 text-white'
                            : 'hover:bg-teal-700 text-cyan-100 hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-cyan-200 opacity-75">© 2024 Ocean Explorer</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;