import  { useState } from 'react';

const HoverForPhyto = () => {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const generateRandomCoordinates = () => {
    const randomLat = (Math.random() * 180 - 90).toFixed(6);
    const randomLon = (Math.random() * 360 - 180).toFixed(6);
    return { lat: randomLat, lon: randomLon };
  };

  const handleMouseMove = (e) => {
    const newCoordinates = generateRandomCoordinates();
    setCoordinates(newCoordinates);
   
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;  
    setMousePosition({ x, y });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">
        Interactive Global Phytoplankton Distribution Map
      </h2>
      <div className="relative inline-block ml-[15%]">
        <img
          src="./images/p2.png"
          alt="Global Chlorophyll-A Distribution"
          className="max-w-full h-auto rounded-lg shadow-lg cursor-crosshair"
          onMouseMove={handleMouseMove}
        />
        {coordinates.lat && coordinates.lon && (
          <div
            className="absolute bg-black bg-opacity-70 text-white p-2 rounded text-sm pointer-events-none"
            style={{
              top: mousePosition.y + 10,
              left: mousePosition.x + 10,
            }}
          >
            <p className="m-0">Latitude: {coordinates.lat}°</p>
            <p className="m-0">Longitude: {coordinates.lon}°</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HoverForPhyto;