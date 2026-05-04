import React from 'react';
import { ArrowRight } from 'lucide-react';

const CommitmentsSection = () => {
  return (
    <div className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Privacy Commitment */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[#0F2D52] mb-4">Privacy Commitment</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We protect your personal data with institutional-grade encryption. Your contact 
              details are only shared with verified finders after your explicit consent.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
              Read Privacy Policy <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          {/* Terms of Reliability */}
          <div className="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[#0F2D52] mb-4">Terms of Reliability</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              By using FindIt, you agree to our community guidelines of honesty and integrity. 
              We maintain a zero-tolerance policy for fraudulent reporting.
            </p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
              View Terms of Service <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentsSection;
