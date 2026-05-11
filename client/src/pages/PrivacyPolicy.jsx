import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#0F2D52] mb-8">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>Effective Date: {new Date().getFullYear()}</p>
          <p>At FindIt, we prioritize your privacy and security. This Privacy Policy outlines how we collect, use, and protect your information when you use our Lost & Found platform.</p>
          
          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email, phone number, and details regarding items you report as lost or found.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>Your information is used to facilitate communication between finders and owners, maintain platform security, and verify identities to prevent fraud.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">3. Data Sharing</h2>
          <p>We do not sell your personal data. Contact details are only shared securely between verified parties involved in a matched item report.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">4. Contact Us</h2>
          <p>If you have any questions about this policy, please contact us via our Help Center.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
