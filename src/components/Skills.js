import React from 'react';
import { Code, Database, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: 'TeleBot', level: 90 },
        { name: 'Django', level: 80 },
        { name: 'React', level: 70 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-8 h-8" />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Data Visualization', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-6 transform transition-all duration-300 
                hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000 
                          ease-out transform origin-left"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'growWidth 1.5s ease-out forwards'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Code Optimization',
              'API Development',
              'Database Design',
              'System Architecture',
              'Technical Documentation'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full
                  hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the animation to your global CSS
const styles = `
@keyframes growWidth {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
`;

// Add style tag to document head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Skills; 