const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Step 1: Explore PACE Data</h3>
            <p>Teachers can explore curated NASA PACE datasets, visualized and simplified for classroom use.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Step 2: Integrate Lesson Plans</h3>
            <p>Access ready-made lesson plans that tie PACE data to core scientific concepts, making it easy to integrate into your curriculum.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Step 3: Inspire and Engage</h3>
            <p>Engage students with real-world data and fun, interactive activities that inspire ocean literacy and critical thinking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
