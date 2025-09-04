import React, { useEffect, useState } from 'react';
import { FaRocket, FaCheckCircle, FaUsers, FaArrowRight } from 'react-icons/fa';

const HeroComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main heading with animation */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block">Organize Your Work</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              And Boost Productivity
            </span>
          </h1>

          {/* Subheading with animation */}
          <p className={`max-w-2xl mx-auto text-xl text-gray-600 mb-10 transition-all duration-1000 ease-out delay-150 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            TaskFlow helps you manage projects, collaborate with teams, and get work done efficiently. From smartwatches to desktops, your tasks are always with you.
          </p>

          {/* CTA Buttons with animation */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              Get Started <FaArrowRight />
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg shadow border border-gray-200 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats section with animation */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaCheckCircle className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Task Completion Rate</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaUsers className="text-indigo-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaRocket className="text-green-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-600">Productivity Increase</p>
            </div>
          </div>

          {/* App preview image with animation */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
              <div className="aspect-video bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-full p-4 mb-6">
                    <FaRocket className="text-white text-4xl sm:text-5xl" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Your Tasks, Everywhere</h2>
                  <p className="text-blue-100 max-w-md mx-auto">Access your tasks from any device, anywhere, anytime.</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-500/10 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-indigo-500/10 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;