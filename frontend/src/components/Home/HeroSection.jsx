const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Bring NASA PACE Data to Your Classroom</h1>
        <p className="text-lg mb-6 text-center max-w-2xl">
          Discover the wonders of the ocean and atmosphere through real NASA PACE mission data. Inspire curiosity in your students with engaging lessons and materials tailored to different grade levels.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
