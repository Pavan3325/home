import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const educationList: Education[] = [
  {
    id: 1,
    degree: "Master's Degree",
    field: "Power Electronics ",
    institution: "CMR College of Engineering and technology",
    location: "Hyderabad, India",
    period: "2024 - 2026",
    description: "Specialized in embedded systems design and IoT technologies with focus on power-efficient computing.",
    achievements: [
      "Published research on energy harvesting for IoT devices",
      "Developed a novel approach to wireless sensor networks",
      "Teaching assistant for Digital Systems Design course",
      "Awarded department scholarship for academic excellence"
    ]
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    field: "Electrical Engineering",
    institution: "St.Mary's Group of Institutions",
    location: "Hyderabad, India",
    period: "2018 - 2023",
    description: "Strong foundation in electrical engineering with emphasis on digital and analog circuit design.",
    achievements: [
      "Senior thesis on low-power microcontroller design",
      "Led team in robotics competition, securing first place",
      "Internship at leading semiconductor company",
    ]
  },

];

const Education: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="Education" subtitle="Academic Background" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((education, index) => (
          <motion.div
            key={education.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all"
          >
            <div className="flex items-start">
              <div className="rounded-full bg-purple-900/30 p-3 mr-4">
                <GraduationCap className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-purple-400 mr-2" />
                  <p className="text-sm text-purple-400">{education.period}</p>
                </div>
                <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                <p className="text-lg text-gray-200 mb-2">{education.field}</p>
                <div className="mb-4">
                  <p className="text-gray-300 font-medium">{education.institution}</p>
                  <p className="text-gray-400 text-sm">{education.location}</p>
                </div>
                <p className="text-gray-300 text-sm mb-4">{education.description}</p>
                <div>
                  <h4 className="text-base font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {education.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-300">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;