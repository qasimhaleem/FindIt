import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#0F2D52] mb-8">Terms of Service</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>Effective Date: {new Date().getFullYear()}</p>
          <p>Welcome to FindIt. By accessing or using our platform, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">1. Acceptable Use</h2>
          <p>You agree to use FindIt solely for the purpose of reporting, finding, or returning lost and found items in good faith. Fraudulent claims are strictly prohibited.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">2. User Responsibilities</h2>
          <p>You are responsible for the accuracy of the information you post. FindIt is not liable for items that are misrepresented or claims that result in disputes.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">3. Safety and Meetings</h2>
          <p>We strongly advise meeting in public, safe locations (like a campus security office) when exchanging items. FindIt is not responsible for your physical safety during exchanges.</p>

          <h2 className="text-xl font-bold text-[#0F2D52] mt-8 mb-4">4. Account Termination</h2>
          <p>We reserve the right to suspend or terminate accounts that violate these terms or engage in abusive behavior.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
