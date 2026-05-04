import React from 'react';

const WelcomeHeader = () => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-[#0F2D52] mb-3">Welcome back, Alex</h1>
      <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
        Your community dashboard provides a real-time overview of lost and found items. 
        Thank you for helping reunite people with their belongings.
      </p>
    </div>
  );
};

export default WelcomeHeader;
