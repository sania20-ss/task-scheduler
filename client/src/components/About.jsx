import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-8 h-full p-5 space-y-8 md:space-y-0">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-10 px-5">
        <h1 className="text-5xl md:text-6xl font-semibold italic text-red-800">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          As students ourselves, we often faced challenges with time management and forgetting important tasks in our lives. This inspired us to create a website and app that notify users ahead of time about their scheduled tasks. Join us in staying organized and productive!
        </p>
        <img
          src="https://w3layouts.b-cdn.net//wp-content/uploads/2016/01/digital_alarm_clock_widget-fullwidth.jpg"
          alt="Digital Clock Widget"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-yellow-300 to-red-700 rounded-lg min-h-80 flex flex-col justify-center items-center text-center p-8 shadow-lg">
        <h1 className="text-2xl italic font-serif text-white">
          So, let’s start vibing with us!
        </h1>
        <br />
        <button className="bg-white text-red-700 font-semibold py-2 px-6 rounded-md hover:bg-red-800 hover:text-white transition-all duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
