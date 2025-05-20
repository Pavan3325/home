import React from 'react';
import { CircuitBoard, Github, Linkedin, Twitter, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 bg-[#15091f]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 text-xl font-bold mb-6">
              <CircuitBoard className="h-8 w-8 text-purple-400" />
              <span className="gradient-text">Pavankumar</span>
            </div>
            <p className="text-gray-300 mb-6">
              A professional embedded Hardware Engineer focused on creating beautiful and functional pcb,circuit boards and analog circuits.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://github.com" 
                className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Experience', 'Education'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Embedde Developer', 'PCB Design'].map((item) => (
                <li key={item}>
                  <a 
                    href="#contact"
                    className="text-gray-300 hover:text-purple-400 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Hyderabad, India</li>
              <li>
                <a 
                  href="mailto:mail@gerolddesign.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Pavankumar3325@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14151234567" 
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  +91 8096068233
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Pavankumar. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Pavankumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;