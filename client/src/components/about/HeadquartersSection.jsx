import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import mapImg from '../../assets/map_graphic.png';

const HeadquartersSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F2D52] mb-6">
              Our Headquarters
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Located in the heart of Karachi's tech hub, our office serves as the 
              central node for coordinating asset recovery efforts nationwide. 
              We are proud to be a Pakistani-founded startup serving our people.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Karachi, Pakistan</h4>
                  <p className="text-gray-500 text-sm">DHA Phase 6, Main Khayaban-e-Ittehad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Office Hours</h4>
                  <p className="text-gray-500 text-sm">Mon-Fri: 9:00 AM–6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Map Image */}
          <div>
            <img 
              src={mapImg} 
              alt="City map graphic" 
              className="w-full h-auto rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadquartersSection;
