import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { navigationItems, personalInfo } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section based on scroll position
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Zaid_Hafeez_Resume.pdf';
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden lg:block ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md border-b border-accent/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </button>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navigationItems.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-accent bg-accent/10'
                      : 'text-primary hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              );
            })}

            {/* Resume Download Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={downloadResume}
              className="flex items-center space-x-2 px-6 py-2 bg-accent text-secondary rounded-lg font-medium hover:bg-accent/90 hover:scale-105 transition-all duration-300 group"
            >
              <Icons.download size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
