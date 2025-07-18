import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { Images } from '../assets/Images';
import { personalInfo } from '../constants';

const HeroSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 lg:pt-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                Available for work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Hi, I'm </span>
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            {/* Title and Subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-primary/70">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-secondary rounded-xl font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300 group"
              >
                <span>Get In Touch</span>
                <Icons.arrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={downloadResume}
                className="flex items-center justify-center space-x-3 px-8 py-4 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-secondary hover:scale-105 transition-all duration-300 group"
              >
                <Icons.download size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8"
            >
              {Object.entries(personalInfo.summary).map(([key, value]) => (
                <div key={key} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-primary/60 capitalize">
                    {key === 'experience' ? 'Years Exp' : key}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-full blur-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <img
                  src={Images.profile || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"}
                  alt={personalInfo.name}
                  className="w-full h-auto rounded-3xl border-4 border-accent/20 shadow-2xl"
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-2xl border border-accent/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Icons.code size={32} className="text-accent" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Icons.zap size={24} className="text-accent" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-primary/60 hover:text-accent transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <Icons.chevronDown size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
