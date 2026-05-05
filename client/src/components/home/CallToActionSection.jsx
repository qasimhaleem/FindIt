import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <div className="bg-[#F8FAFC] pb-24 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#0F2D52] rounded-3xl py-16 px-6 md:px-12 text-center relative overflow-hidden shadow-2xl">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to bring something home?
          </h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Join thousands of people who use FindIt every day to restore lost items to their 
            rightful owners. It's free, secure, and community-powered.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="px-8 py-4 bg-white text-[#0F2D52] font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Join the Community
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-[rgba(255,255,255,0.3)] text-white font-bold rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors inline-block text-center">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
