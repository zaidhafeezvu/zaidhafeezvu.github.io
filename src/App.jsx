import React from 'react';
import { Navbar, Sidebar, ScrollToTop } from './components';
import { HeroSection, AboutSection, ServicesSection, ContactSection } from './sections';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      {/* Navigation */}
      <Navbar />
      <Sidebar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
