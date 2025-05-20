import React, { useState, useEffect } from 'react';
import { CircuitBoard, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1e1133]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="flex items-center space-x-2 text-xl font-bold">
            <CircuitBoard className="h-8 w-8 text-purple-400" />
            <span className="gradient-text">Pavankumar</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-purple-400 transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-purple-400' : 'text-gray-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
            >
              Hire me!
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#1e1133]/95 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`py-2 px-4 text-sm font-medium ${
                activeSection === link.href.substring(1) ? 'text-purple-400' : 'text-gray-200'
              }`}
              onClick={handleClick}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full font-medium text-center mt-4"
            onClick={handleClick}
          >
            Hire me!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;