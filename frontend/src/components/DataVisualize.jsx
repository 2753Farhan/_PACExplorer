import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChlorophyllMap from './topics/ChlorophyllMap';
import OceansTrueColor from './topics/OceansTrueColor';
import FalseColorIceClouds from './topics/FalseColorIceClouds';
import PhytoplanktonFalseColor from './topics/PhytoplanktonFalseColor';
import FullSpectraOceans from './topics/FullSpectraOceans';
import AnimationMultipleAngles from './topics/AnimationMultipleAngles';
import UnderstandingMultiAngleData from './topics/UnderstandingMultiAngleData';
// import './index.css';
import HomePage from './HomePage';
import ChlorophyllDetailPage from './topics/ChlorophyllDetailPage';
import FullSpectraOceansDetails from './topics/FullSpectraOceansDetails';
import PhytoplanktonDetails from './topics/PhytoplanktonDetails';


const DataVisualize = () => {
    return (
        <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chlorophyll-map" element={<ChlorophyllMap />} />
              <Route path="/chlorophyll-details" element={<ChlorophyllDetailPage />} />
              <Route path="/oceans-true-color" element={<OceansTrueColor />} />
              <Route path="/false-color-ice-clouds" element={<FalseColorIceClouds />} />
              <Route path="/phytoplankton-false-color" element={<PhytoplanktonFalseColor />} /> 
              <Route path="/phytoplankton-details" element={<PhytoplanktonDetails />} /> 
              <Route path="/full-spectra-oceans" element={<FullSpectraOceans />} />
              <Route path="/spectraOceans-details" element={<FullSpectraOceansDetails />} />
              <Route path="/animation-multiple-angles" element={<AnimationMultipleAngles />} />
              <Route path="/understanding-multi-angle-data" element={<UnderstandingMultiAngleData />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
};

export default DataVisualize;