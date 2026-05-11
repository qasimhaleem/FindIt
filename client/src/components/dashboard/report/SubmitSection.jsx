import React from 'react';
import { Send } from 'lucide-react';

const SubmitSection = ({ isSubmitting }) => {
  return (
    <div className="mb-6">
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? 'Submitting...' : 'Submit Report'}</span>
        <Send size={18} />
      </button>
      
      <p className="text-center text-[10px] text-gray-500 font-medium px-4">
        By submitting, you agree to our Community Guidelines and Privacy Policy.
      </p>
    </div>
  );
};

export default SubmitSection;
