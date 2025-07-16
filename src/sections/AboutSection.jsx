import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { Images } from '../assets/Images';
import { personalInfo, techStack } from '../constants';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
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
              Get to know me
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary/70 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image and Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="relative mb-8">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background Shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl transform rotate-6"></div>
                
                {/* Main Image */}
                <img
                  src={Images.about || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop"}
                  alt="About me"
                  className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-accent/20"
                />
                
                {/* Floating Tech Icons */}
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
                  className="absolute -top-6 -right-6 w-16 h-16 bg-accent/10 rounded-2xl border border-accent/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Icons.palette size={24} className="text-accent" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 -left-6 w-14 h-14 bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center backdrop-blur-sm"
                >
                  <Icons.globe size={20} className="text-accent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Personal Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <Icons.mapPin size={20} className="text-accent mb-2" />
                <p className="text-sm text-primary/60">Location</p>
                <p className="font-medium text-primary">{personalInfo.location}</p>
              </div>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <Icons.mail size={20} className="text-accent mb-2" />
                <p className="text-sm text-primary/60">Email</p>
                <p className="font-medium text-primary break-words">{personalInfo.email}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Bio */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">My Story</h3>
              <p className="text-primary/80 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-primary/80 leading-relaxed">
                I specialize in building exceptional digital experiences and have a strong foundation in both front-end and back-end technologies. My goal is to bridge the gap between design and development, creating applications that are not only functional but also beautiful and user-friendly.
              </p>
            </motion.div>

            {/* Expertise */}
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">What I Do</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors duration-300"
                  >
                    <Icons.checkCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-primary font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.warn('Contact section not found');
                  }
                }}
                className="flex items-center space-x-3 px-6 py-3 bg-accent text-secondary rounded-lg font-medium hover:bg-accent/90 hover:scale-105 transition-all duration-300 group"
              >
                <span>Let's Work Together</span>
                <Icons.arrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Technologies I <span className="text-gradient">Love</span>
            </h3>
            <p className="text-primary/70">Tools and technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors duration-300"
              >
                <h4 className="text-xl font-semibold text-primary mb-4 capitalize">
                  {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : 'Tools'}
                </h4>
                <div className="space-y-3">
                  {technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Icons.code size={16} className="text-accent" />
                        </div>
                        <span className="text-primary font-medium">{tech.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-accent/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-accent rounded-full"
                            role="progressbar"
                            aria-valuenow={tech.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${tech.name} proficiency level: ${tech.level}%`}
                          />
                        </div>
                        <span className="text-xs text-primary/60 font-medium w-8">
                          {tech.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
