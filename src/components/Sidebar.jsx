import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { navigationItems, personalInfo } from '../constants';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      setIsOpen(false); // Close sidebar after navigation
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Zaid_Hafeez_Resume.pdf';
    link.click();
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      x: -20,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Mobile Header with Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-accent/20">
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gradient"
          >
            {personalInfo.name.split(' ').map(name => name[0]).join('')}
          </button>

          {/* Menu Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300"
          >
            <Icons.menu size={24} />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-secondary/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="sidebar-container lg:hidden fixed top-0 left-0 z-50 h-full w-80 bg-secondary border-r border-accent/20"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-accent/20">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <Icons.close size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-6">
            <motion.div
              variants={{
                open: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="space-y-2 px-4"
            >
              {navigationItems.map((item) => {
                const IconComponent = Icons[item.icon];
                return (
                  <motion.button
                    key={item.id}
                    variants={menuItemVariants}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-accent bg-accent/10 border-l-4 border-accent'
                        : 'text-primary hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    <IconComponent 
                      size={22} 
                      className="group-hover:scale-110 transition-transform duration-300" 
                    />
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Footer with Resume Button and Social Links */}
          <div className="p-6 border-t border-accent/20">
            <motion.button
              variants={menuItemVariants}
              onClick={downloadResume}
              className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-accent text-secondary rounded-xl font-medium hover:bg-accent/90 transition-all duration-300 group mb-6"
            >
              <Icons.download size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Download Resume</span>
            </motion.button>

            {/* Social Links */}
            <motion.div
              variants={menuItemVariants}
              className="flex justify-center space-x-4"
            >
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const IconComponent = Icons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
