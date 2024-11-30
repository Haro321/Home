import React from 'react';
import { Github } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'TubeSaver',
    description: 'A simple and user-friendly YouTube downloader.',
    technologies: ['Python', 'yt-dlp', 'FFmpeg', 'CustomTkinter'],
    githubLink: 'https://github.com/Haro321/TubeSaver'
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold mb-3 text-blue-600">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a 
        href={project.githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-700 hover:text-blue-600 transition"
      >
        <Github className="mr-2" /> View on GitHub
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;