import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import RecentlyFoundSection from '../components/home/RecentlyFoundSection';
import SearchBannerSection from '../components/home/SearchBannerSection';
import CallToActionSection from '../components/home/CallToActionSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <RecentlyFoundSection />
      <SearchBannerSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
