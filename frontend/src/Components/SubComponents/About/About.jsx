import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/iampd-10/todoNew',
      icon: 'github',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iampd10official/',
      icon: 'linkedin',
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/919436563207?text=${encodeURIComponent('Hi Priyajit, I loved your project!')}`,
      icon: 'whatsapp',
      color: 'hover:text-green-400'
    },
    {
      name: 'Email',
      url: 'mailto:iampd10official@gmail.com',
      icon: 'mail',
      color: 'hover:text-red-400'
    }
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
          </svg>
        );
      case 'mail':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">About This Project</h1>
          <p className="text-lg sm:text-xl text-gray-600">A modern task management application</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src="https://i.pinimg.com/736x/d7/5f/13/d75f1372f9fde8713bb6b902504cc1d4.jpg"
                alt="Priyajit Debnath"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-100"
              />
              <img
                src="https://i.pinimg.com/736x/e9/b2/67/e9b2670484d31f700283b522c8237e56.jpg"
                alt="Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white absolute bottom-0 right-0"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Priyajit Debnath</h2>
            <p className="text-gray-600 mb-4">Full Stack Developer</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-100 p-3 rounded-full transition-all duration-300 ${social.color} transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {renderIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            This Task Manager application is a full-stack web solution designed to help users organize 
            their tasks efficiently. It provides a seamless experience for creating, updating, and tracking 
            tasks with a clean, intuitive interface.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Purpose & Benefits</h3>
          <p className="text-gray-700 mb-4">
            The application helps users stay organized by providing a centralized platform to manage 
            their daily tasks. Users can create tasks with titles and descriptions, mark them as complete, 
            and easily track their progress. The system ensures data security through authentication and 
            offers email notifications for important updates.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Express.js - Web framework for Node.js</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Mongoose - MongoDB object modeling</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">JWT - Secure user authentication</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Nodemailer - Email notifications</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">CRUD Operations - Full data management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">CORS - Cross-origin resource sharing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">dotenv - Environment variables management</span>
                </li>
              </ul>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">React - Component-based UI library</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Tailwind CSS - Utility-first CSS framework</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Axios - HTTP client for API requests</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">React Router DOM - Navigation and routing</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">React Toastify - Notification system</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Local Storage - Client-side data persistence</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">React Icons - Comprehensive icon library</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">User Authentication</h4>
              <p className="text-sm text-blue-700">Secure login and registration with JWT tokens</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Task Management</h4>
              <p className="text-sm text-green-700">Create, read, update, and delete tasks easily</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Email Notifications</h4>
              <p className="text-sm text-purple-700">Get notified about important account activities</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Responsive Design</h4>
              <p className="text-sm text-yellow-700">Works on all devices from smartwatches to desktops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}