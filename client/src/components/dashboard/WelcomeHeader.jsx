import React, { useEffect, useState } from 'react';

const WelcomeHeader = () => {
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userObj = JSON.parse(userStr);
        if (userObj && userObj.fullName) {
          setUserName(userObj.fullName);
        }
      } catch (e) {
        console.error('Failed to parse user', e);
      }
    }
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-[#0F2D52] mb-3">Welcome back, {userName}</h1>
      <p className="text-gray-600 text-sm max-w-2xl leading-relaxed">
        Your community dashboard provides a real-time overview of lost and found items. 
        Thank you for helping reunite people with their belongings.
      </p>
    </div>
  );
};

export default WelcomeHeader;
