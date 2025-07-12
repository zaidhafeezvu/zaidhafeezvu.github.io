import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../assets/Icons';
import { personalInfo } from '../constants';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'mail',
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: 'mapPin',
      label: 'Location',
      value: personalInfo.location,
      link: '#'
    }
  ];

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

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl"></div>
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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-primary/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = Icons[info.icon];
                return (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="group"
                  >
                    <a
                      href={info.link}
                      className={`flex items-center space-x-4 p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all duration-300 ${
                        info.link !== '#' ? 'hover:scale-105 cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-secondary transition-all duration-300">
                        <IconComponent size={24} className="text-accent group-hover:text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                          {info.label}
                        </h3>
                        <p className="text-primary/70 break-words">{info.value}</p>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {Object.entries(personalInfo.social).map(([platform, url]) => {
                  const IconComponent = Icons[platform];
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-secondary transition-all duration-300"
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <Icons.heart className="text-accent mb-4" size={24} />
              <p className="text-primary/80 italic mb-4">
                "Great things in business are never done by one person. They're done by a team of people."
              </p>
              <p className="text-accent font-medium">- Steve Jobs</p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-accent/5 border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <Icons.checkCircle size={48} className="text-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-primary mb-2">Message Sent!</h4>
                  <p className="text-primary/70">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-accent/20 text-primary placeholder-primary/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-accent/20 text-primary placeholder-primary/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-accent/20 text-primary placeholder-primary/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300"
                      placeholder="Project discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-accent/20 text-primary placeholder-primary/50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-secondary rounded-xl font-semibold hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Icons.send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
