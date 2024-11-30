import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#0ea5e9"
      },
      links: {
        enable: true,
        color: "#0ea5e9",
        opacity: 0.2
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: 2
      },
      opacity: {
        value: 0.3
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    },
    background: {
      color: {
        value: "transparent"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Python Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Building innovative solutions through elegant code and creative problem-solving
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/Haro321"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://www.linkedin.com/in/haro-bashar-06610130a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a 
            href="mailto:lnlord008@gmail.com"
            className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
        
        <button 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce bg-blue-500 text-white px-8 py-3 rounded-full 
            hover:bg-blue-600 transition-colors inline-flex items-center"
        >
          Explore More
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 

