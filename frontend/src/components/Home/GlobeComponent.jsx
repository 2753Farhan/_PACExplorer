import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3';

const GlobeComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mock data with chlorophyll levels (values)
    const mockData = [
      { lat: 37.7749, lng: -122.4194, value: 0.5 },  // San Francisco
      { lat: -33.8688, lng: 151.2093, value: 0.8 },  // Sydney
      { lat: 51.5074, lng: -0.1278, value: 0.3 },   // London
      { lat: 35.6895, lng: 139.6917, value: 0.9 },   // Tokyo
      { lat: -34.6037, lng: -58.3816, value: 0.6 },  // Buenos Aires
    ];

    setData(mockData);
  }, []);

  // Define color scale based on chlorophyll levels
  const colorScale = d3.scaleSequential(d3.interpolateViridis)
    .domain([0, 1]); // Assuming chlorophyll levels range from 0 to 1

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={data}
        pointAltitude="value" // Altitude based on chlorophyll value
        pointColor={d => colorScale(d.value)} // Color based on chlorophyll value
        pointRadius={0.5} // Size of the point
      />
    </div>
  );
};

export default GlobeComponent;
