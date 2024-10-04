import React from 'react';
import { Download, Book, Video, FileText, Globe, Users, BarChart } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, description, link }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center"
    >
      <Download className="w-4 h-4 mr-2" />
      Access Resource
    </a>
  </div>
);

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">PACE Mission Resources</h1>
        <p className="text-xl text-center mb-12">
          Explore a wealth of materials to enhance your understanding of NASA's PACE mission, ocean science, and its impact on our planet.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceCard
            icon={Book}
            title="Educational Materials"
            description="Lesson plans, activities, and worksheets for educators and students of all levels."
            link="#educational-materials"
          />
          <ResourceCard
            icon={Video}
            title="Multimedia Gallery"
            description="Videos, animations, and images showcasing the PACE mission and ocean phenomena."
            link="#multimedia"
          />
          <ResourceCard
            icon={Globe}
            title="Interactive Tools"
            description="Explore satellite data and ocean health indicators through our interactive web tools."
            link="#interactive-tools"
          />
          <ResourceCard
            icon={FileText}
            title="Publications"
            description="Scientific papers, fact sheets, and reports related to the PACE mission and its findings."
            link="#publications"
          />
          <ResourceCard
            icon={Users}
            title="Community Outreach"
            description="Resources for public engagement, citizen science projects, and community events."
            link="#community"
          />
          <ResourceCard
            icon={BarChart}
            title="Data Access"
            description="Direct access to PACE mission data sets and tools for researchers and data scientists."
            link="#data-access"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
          <p className="mb-6">Our team is here to help you make the most of these resources. Whether you're an educator, researcher, or curious learner, we're happy to assist.</p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Support Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;