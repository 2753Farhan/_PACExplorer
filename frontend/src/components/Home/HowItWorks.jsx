import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About PACE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Ocean Health Monitoring</h3>
            <p>
              PACE data allows us to monitor the health of our oceans, tracking
              algal blooms and other vital ocean metrics.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Atmospheric Research</h3>
            <p>
              PACE observes aerosols and clouds to help us understand climate
              change and how it affects air quality.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Weather Prediction</h3>
            <p>
              By analyzing PACE data, scientists can improve weather prediction
              models, helping communities stay safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
