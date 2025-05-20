import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20">
      <motion.div 
        className="lg:w-1/2 space-y-6 py-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">I am Pavankumar </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
          Embedded Hardware<br />Engineer
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          I design and develop innovative embedded systems and IoT solutions that bridge the gap between hardware and software, creating intelligent devices that shape the future.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-5">
          <motion.a 
            href="https://drive.google.com/file/d/1dNlIEzH3fW35BIPbpO0CrlmBVsJpyTPG/view" 
            className="flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-purple-500 rounded-full text-white hover:bg-purple-900 hover:bg-opacity-20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.a>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://www.linkedin.com/in/pavankumar-kolakonda/" 
              className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
              whileHover={{ y: -5 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="https://twitter.com/pavan3325/" 
              className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
              whileHover={{ y: -5 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a 
              href="https://github.com/Pavan3325/" 
              className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
              whileHover={{ y: -5 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="pavankumar3325@gmail.com" 
              className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
              whileHover={{ y: -5 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-xl"></div>
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-purple-700 relative z-10">
            <img 
              src="https://drive.google.com/file/d/1AoBxxZ-iI3dUQlTyh380tf1FdRgJR50L/view" 
              alt="Gerold portrait" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;