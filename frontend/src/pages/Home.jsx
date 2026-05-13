function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white">
      
      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 max-w-4xl leading-tight">
          Build Your Personalized Learning Roadmap
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Learn smarter with AI-powered study plans tailored to your goals,
          skill level, and available time.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            AI Roadmaps
          </h2>

          <p className="text-gray-600">
            Generate customized learning paths based on your goals and skill level.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Progress Tracking
          </h2>

          <p className="text-gray-600">
            Track completed topics and stay consistent throughout your journey.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Smart Scheduling
          </h2>

          <p className="text-gray-600">
            Organize your study time effectively with intelligent daily plans.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;