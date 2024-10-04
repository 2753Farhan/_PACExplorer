import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#001f3f] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Bring PACE Data to Your Classroom</h2>
        <p className="mb-8">
          Download lesson plans, educational resources, and get started teaching your students about NASA’s PACE mission and the wonders of the ocean.
        </p>
        <a
          href="/resources"
          className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Get the Materials
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
