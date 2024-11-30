import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center">
      <div className="text-center">
        <img 
          src="public\haro.png" 
          alt="Profile"
          className="mx-auto mb-6 rounded-full w-48 h-48 object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">"Hello World!"</h1>
        <p className="text-xl text-gray-600 mb-8">
          Passionate Python programmer specializing in data analysis, 
          web development, and machine learning solutions
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <Link 
            to="/projects" 
            className="bg-blue-500 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-600 transition flex items-center"
          >
            <Code className="mr-2" /> View Projects
          </Link>
          <Link 
            to="/contact" 
            className="bg-green-500 text-white px-6 py-3 rounded-lg 
            hover:bg-green-600 transition flex items-center"
          >
            <Mail className="mr-2" /> Contact Me
          </Link>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/Haro321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://www.linkedin.com/in/haro-bashar-06610130a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;