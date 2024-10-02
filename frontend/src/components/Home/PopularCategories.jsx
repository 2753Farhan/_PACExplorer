const PopularCategories = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Elementary</h3>
            <p>Interactive, engaging materials for younger learners.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">View Resources</button>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Middle School</h3>
            <p>Hands-on lesson plans and activities for developing scientific curiosity.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">View Resources</button>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">High School</h3>
            <p>Advanced materials and real-world data analysis for future scientists.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">View Resources</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
