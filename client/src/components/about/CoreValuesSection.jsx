import React from 'react';
import { Shield, Users, Zap } from 'lucide-react';

const values = [
  {
    id: 1,
    icon: <Shield className="text-blue-600" size={24} />,
    title: 'Trust',
    description: 'We prioritize safety and verification, ensuring that every claim and report is handled with the utmost security and integrity.'
  },
  {
    id: 2,
    icon: <Users className="text-blue-600" size={24} />,
    title: 'Community',
    description: 'The heart of FindIt is our users. We empower citizens to help one another, building a stronger social fabric across Pakistan.'
  },
  {
    id: 3,
    icon: <Zap className="text-blue-600" size={24} />,
    title: 'Efficiency',
    description: 'Time is of the essence when an item is lost. Our streamlined process ensures rapid reporting and quick matching results.'
  }
];

const CoreValuesSection = () => {
  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3">Our Foundation</p>
          <h2 className="text-3xl font-bold text-[#0F2D52]">Core Values that Drive Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0F2D52] mb-4">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValuesSection;
