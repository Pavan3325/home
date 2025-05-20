import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Trainee",
    company: "TSNPDCL",
    location: "Kamareddy Telangana",
    period: "MAY 2017 ",
    description: " Monitoring Hourly base Power factor(PF) and Voltage and  Tap changes based on demand at load",
    responsibilities: [
      " Monitoring Hourly base Power factor(PF) and Voltage",
      "Tap changes based on demand at load",
    ],
    technologies: ["Pannels Monitor","Battery Health"]
  },
];

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="Experience" subtitle="Professional Journey" />
      
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-800/50"></div>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-purple-900 transform -translate-x-1/2 z-10"></div>
              
              <div className="md:w-1/2 pl-10 md:pl-0 md:pr-16 md:text-right mb-8 md:mb-0">
                <div className="flex items-center md:justify-end mb-2">
                  <Calendar className="h-5 w-5 text-purple-400 mr-2 md:order-2 md:ml-2 md:mr-0" />
                  <p className="text-purple-400 font-medium">{job.period}</p>
                </div>
                <h3 className="text-xl font-bold">{job.company}</h3>
                <p className="text-gray-400">{job.location}</p>
              </div>
              
              <div className="md:w-1/2 pl-10 md:pl-16">
                <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full bg-purple-900/30 p-2 mr-3">
                      <Briefcase className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-base font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-sm text-gray-300">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;