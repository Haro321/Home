import React from 'react';
import { 
  Code, 
  Server 
} from 'lucide-react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Expert', icon: <Code /> },
      { name: 'JavaScript', level: 'Intermediate', icon: <Code /> },
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'TeleBot', level: 'Expert', icon: <Server /> },
    ]
  }
];

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4 text-blue-600">{category}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between border-b pb-2 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <span className="text-blue-500">{skill.icon}</span>
              <span className="text-gray-700">{skill.name}</span>
            </div>
            <span className="text-sm text-gray-500">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard 
            key={index}
            category={category.category} 
            skills={category.skills} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;