import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 px-8 md:px-16 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-neon-green">
          Welcome to Akunna Tracks
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Track your calories, weight, and personal notes in one intuitive and modern app.
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-110 transition duration-300 ease-in-out">
          Login
        </button>
      </section>

      {/* Core Features - Split layout */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl sm:text-4xl text-neon-blue font-extrabold">
          💡 Core Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {/* Calorie Intake Tracker */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-xl text-neon-pink font-semibold">📊 Calorie Intake Tracker</h3>
            <p className="mt-4 text-gray-300">
              Log your food intake, track meal types, calories, and time. Upload
              food images for visual tracking!
            </p>
          </div>

          {/* Weight Tracker */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-xl text-neon-pink font-semibold">⚖️ Weight Tracker</h3>
            <p className="mt-4 text-gray-300">
              Monitor your weight progress over time, with optional notes and
              beautiful line charts.
            </p>
          </div>

          {/* Personal Notes Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <h3 className="text-xl text-neon-pink font-semibold">📝 Personal Notes</h3>
            <p className="mt-4 text-gray-300">
              Track your thoughts, workouts, and meals with free-form notes, and
              use Markdown to format them.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Split Layout */}
      <section className="bg-gray-800 py-16 px-8 mt-16 rounded-lg shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0">
          {/* Left Section */}
          <div className="text-center lg:text-left space-y-6 max-w-md">
            <h2 className="text-3xl font-extrabold text-neon-green">
              Track Your Progress with Ease
            </h2>
            <p className="text-lg text-gray-300">
              Keep an eye on your daily progress with stunning graphs, trends, and
              quick logs. Your journey is visualized for a better experience.
            </p>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-110 transition duration-300 ease-in-out">
              Start Tracking
            </button>
          </div>

          {/* Right Section (Image or Graph Illustration) */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            {/* Placeholder for an image, chart, or illustration */}
            <div className="w-full max-w-sm rounded-lg overflow-hidden bg-gray-700 shadow-lg">
              {/* This could be an image or a chart component */}
              <img
                src="https://via.placeholder.com/300"
                alt="Tracking Illustration"
                className="object-cover w-full h-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-gray-700 via-gray-800 to-black py-12 px-8 text-center mt-16 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neon-pink">
          Ready to Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Log in now to begin tracking your goals and progress with Akunna Tracks!
        </p>
        <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-110 transition duration-300 ease-in-out mt-6">
          Login
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-16 text-center">
        <p className="text-sm text-gray-400">© 2025 Akunna Tracks - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
