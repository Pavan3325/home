import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Industrial Controller",
    description: "Developed a robust industrial controller with real-time monitoring and advanced safety features for manufacturing automation.",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    category: "hardware",
    technologies: ["ARM Cortex-M4", "FreeRTOS", "CAN Bus", "Custom PCB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Wireless Sensor Network",
    description: "Designed a scalable IoT sensor network for environmental monitoring using low-power wireless protocols.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    category: "iot",
    technologies: ["LoRaWAN", "ESP32", "Power Management", "Custom Sensors"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'iot', name: 'IoT' },
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="Projects" subtitle="Featured Work" />
      
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all"
          >
            <div className="relative overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white text-purple-900 p-3 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
                >
                  <span>Details</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#1e1133] rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="text-sm bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  <span>View Details</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-all flex items-center gap-2"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const X = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default Projects;