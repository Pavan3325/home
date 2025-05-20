import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Microwave as Microchip, Wifi, Settings, Terminal, Shield } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Hardware Design",
    icon: <Microchip className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: "PCB Design", level: 95, category: "hardware" },
      { name: "Circuit Analysis", level: 90, category: "hardware" },
      { name: "Signal Integrity", level: 85, category: "hardware" },
      { name: "Power Management", level: 90, category: "hardware" },
      { name: "FPGA Design", level: 80, category: "hardware" },
    ]
  },
  {
    name: "Embedded Systems",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: "ARM Architecture", level: 90, category: "embedded" },
      { name: "RTOS", level: 85, category: "embedded" },
      { name: "Embedded C/C++", level: 95, category: "embedded" },
      { name: "Microcontrollers", level: 90, category: "embedded" },
      { name: "Device Drivers", level: 85, category: "embedded" },
    ]
  },
  {
    name: "IoT & Connectivity",
    icon: <Wifi className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: "Bluetooth/BLE", level: 85, category: "iot" },
      { name: "WiFi", level: 90, category: "iot" },
      { name: "LoRaWAN", level: 75, category: "iot" },
      { name: "MQTT", level: 85, category: "iot" },
      { name: "ZigBee", level: 80, category: "iot" },
    ]
  },
  {
    name: "Development Tools",
    icon: <Terminal className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: "Altium Designer", level: 90, category: "tools" },
      { name: "KiCad", level: 85, category: "tools" },
      { name: "MATLAB", level: 80, category: "tools" },
      { name: "Git", level: 85, category: "tools" },
      { name: "Debug Tools", level: 90, category: "tools" },
    ]
  },
  {
    name: "System Integration",
    icon: <Settings className="w-8 h-8 text-purple-400" />,
    skills: [
      { name: "Hardware-Software Integration", level: 90, category: "integration" },
      { name: "Testing & Validation", level: 85, category: "integration" },
      { name: "Requirements Analysis", level: 90, category: "integration" },
      { name: "System Architecture", level: 85, category: "integration" },
      { name: "Documentation", level: 80, category: "integration" },
    ]
  },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
        <span className="text-xs font-medium text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading title="Skills" subtitle="Technical Expertise" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-purple-900/10 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-purple-900/30 p-3 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            
            <div>
              {category.skills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;