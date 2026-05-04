import React from 'react';
import { FileText, ArrowLeftRight, ShieldCheck, HeartHandshake } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <FileText className="text-[#0F2D52]" size={28} />,
    title: 'Post',
    description: 'Create a detailed listing for your lost or found item with photos and location data.'
  },
  {
    id: 2,
    icon: <ArrowLeftRight className="text-[#0F2D52]" size={28} />,
    title: 'Match',
    description: 'Our smart filtering system instantly checks for potential matches in your specific area.'
  },
  {
    id: 3,
    icon: <ShieldCheck className="text-[#0F2D52]" size={28} />,
    title: 'Verify',
    description: 'Communicate securely to verify ownership through community trust indicators and private messaging.'
  },
  {
    id: 4,
    icon: <HeartHandshake className="text-[#0F2D52]" size={28} />,
    title: 'Return',
    description: 'Coordinate a safe meetup to return the item and celebrate another community success.'
  }
];

const HowItWorksSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52]">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#EBF1FF] flex items-center justify-center mb-6 group-hover:bg-[#d6e2ff] transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F2D52] mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
