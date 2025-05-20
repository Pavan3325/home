import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg text-purple-400 font-medium mb-2"
      >
        {subtitle}
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold relative inline-block"
      >
        {title}
        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></span>
      </motion.h2>
    </div>
  );
};

export default SectionHeading;