import React from 'react';

const workshops = [
  {
    id: 1,
    title: 'Understanding Ocean Currents',
    description: 'Join us for an interactive workshop where we explore the dynamics of ocean currents and their impact on climate change.',
    date: 'October 15, 2024',
    time: '10:00 AM - 2:00 PM',
    image: '/images/ocean_currents.jpg', // Replace with your image path
  },
  {
    id: 2,
    title: 'Marine Ecosystems Exploration',
    description: 'Dive into the fascinating world of marine ecosystems and learn how to protect them for future generations.',
    date: 'October 22, 2024',
    time: '1:00 PM - 5:00 PM',
    image: '/images/marine_ecosystems.jpg', // Replace with your image path
  },
  {
    id: 3,
    title: 'Climate Change and its Impact',
    description: 'A comprehensive workshop focusing on the effects of climate change on our oceans and what we can do to mitigate it.',
    date: 'October 29, 2024',
    time: '11:00 AM - 3:00 PM',
    image: '/images/climate_change.jpg', // Replace with your image path
  },
];

const WorkshopPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#001f3f] mb-10">Upcoming Workshops</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#001f3f]">{workshop.title}</h2>
                <p className="text-gray-600 mt-2">{workshop.description}</p>
                <p className="text-gray-500 mt-4"><strong>Date:</strong> {workshop.date}</p>
                <p className="text-gray-500"><strong>Time:</strong> {workshop.time}</p>
                <button className="mt-4 bg-[#00df9a] hover:bg-[#00bf7a] text-white py-2 px-4 rounded-lg transition duration-300">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;
