import React from 'react';
import AboutHeroSection from '../components/about/AboutHeroSection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import HeadquartersSection from '../components/about/HeadquartersSection';
import ContactSection from '../components/about/ContactSection';
import CommitmentsSection from '../components/about/CommitmentsSection';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AboutHeroSection />
      <CoreValuesSection />
      <HeadquartersSection />
      <ContactSection />
      <CommitmentsSection />
    </div>
  );
};

export default About;
