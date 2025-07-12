import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { services } from '../constants';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              What I Offer
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary/70 max-w-3xl mx-auto">
            I provide a comprehensive range of development services to bring your ideas to life with cutting-edge technologies and best practices.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className={`relative group cursor-pointer ${
                  isActive ? 'z-10' : ''
                }`}
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className={`p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-accent/10 border-accent/40 shadow-xl shadow-accent/20' 
                    : 'bg-accent/5 border-accent/20 hover:bg-accent/10 hover:border-accent/30'
                }`}>
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isActive 
                        ? 'bg-accent text-secondary' 
                        : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-secondary'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent size={28} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary/60 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, isActive ? service.technologies.length : 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {!isActive && service.technologies.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features - Show on Active */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 'auto' : 0,
                      opacity: isActive ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <h4 className="text-sm font-semibold text-primary/60 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-center space-x-2 text-primary/80"
                        >
                          <Icons.checkCircle size={14} className="text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Expand/Collapse Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">
                      {isActive ? 'Show Less' : 'Learn More'}
                    </span>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icons.chevronDown size={18} className="text-accent" />
                    </motion.div>
                  </div>
                </div>

                {/* Background Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h3>
            <p className="text-primary/70 mb-8">
              Let's discuss your ideas and turn them into amazing digital experiences.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-accent text-secondary rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 group"
            >
              <span>Start a Project</span>
              <Icons.arrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
