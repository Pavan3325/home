import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  image: string;
  credentialURL: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Introduction to MATLAB & Simulink",
    description: "Mastered fundamental MATLAB syntax, proficiently utilizing functions and Data visualization -Acquired expertise in procedural programming with Simulink by circuit designing with blocks.",
    issuer: " NIELIT Calicut",
    date: "January 2025",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    credentialURL: "https://example.com/credential"
  },
  {
    id: 2,
    name: "Embedded Systems for Beginners",
     issuer: " NIELIT Calicut",
    date: "January 2025",
    image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    credentialURL: "https://example.com/credential"
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="Certifications" subtitle="Professional Qualifications" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <motion.a
            key={certification.id}
            href={certification.credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block group"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1133]/90 via-[#1e1133]/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-purple-400 mr-2" />
                    <p className="text-sm text-purple-400">{certification.date}</p>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {certification.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-purple-400 mr-2" />
                  <p className="text-gray-300">{certification.issuer}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                    View Credential →
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;