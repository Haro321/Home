import React from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      year: '2023',
      title: 'Python Developer',
      description: 'Specialized in automation and data analysis solutions',
      icon: <Code className="w-6 h-6" />
    },
    {
      year: '2022',
      title: 'Backend Development',
      description: 'Focused on server-side applications and APIs',
      icon: <Server className="w-6 h-6" />
    },
    {
      year: '2021',
      title: 'Data Engineering',
      description: 'Working with large-scale data processing systems',
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Description */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Python developer with expertise in building robust 
              applications and automated solutions. My journey in programming started 
              with a fascination for problem-solving and has evolved into a 
              professional career creating impactful software solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Specializing in Python development, I focus on creating efficient, 
              scalable, and maintainable code. My experience spans across web 
              development, data analysis, and automation, always staying current 
              with the latest technologies and best practices.
            </p>
            <div className="flex items-center space-x-4">
              <Globe className="text-blue-500 w-6 h-6" />
              <span className="text-gray-300">Based in Al-Anbar, Iraq</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className="flex items-start mb-8 relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-blue-500/20" />
                )}
                
                {/* Icon container */}
                <div className="bg-blue-500 rounded-full p-2 mr-4 z-10">
                  {experience.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-700 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-600">
                    <span className="text-blue-400 font-semibold">
                      {experience.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">
                      {experience.title}
                    </h3>
                    <p className="text-gray-300 mt-2">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 