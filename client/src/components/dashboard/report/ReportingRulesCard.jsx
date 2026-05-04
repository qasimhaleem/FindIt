import React from 'react';
import { Gavel, CheckCircle2 } from 'lucide-react';

const rules = [
  "Ensure details are accurate and truthful.",
  "Do not include sensitive PII in public descriptions.",
  "Be responsive to community comments."
];

const ReportingRulesCard = () => {
  return (
    <div className="bg-[#123E6C] rounded-2xl p-6 shadow-md text-white mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Gavel size={20} />
        <h3 className="text-lg font-bold">Reporting Rules</h3>
      </div>
      
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="text-blue-300 flex-shrink-0 mt-0.5" size={16} />
            <p className="text-xs text-blue-100 leading-relaxed font-medium">
              {rule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportingRulesCard;
