import React from 'react';
import { Camera, MapPin, Smile } from 'lucide-react';
import profilePic from '../../assets/profile.png';

const CreatePost = () => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex gap-4 mb-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
          <img src={profilePic} alt="Your profile" className="h-full w-full object-cover" />
        </div>
        <div className="flex-grow">
          <input 
            type="text" 
            placeholder="What did you find or lose?" 
            className="w-full h-full px-4 sm:px-6 bg-[#F8FAFC] border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm sm:text-base transition-all"
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-2 px-2 sm:px-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
          <Camera size={20} className="text-red-500" />
          <span className="hidden sm:inline">Photo/Video</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
          <MapPin size={20} className="text-blue-500" />
          <span className="hidden sm:inline">Location</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
          <Smile size={20} className="text-green-500" />
          <span className="hidden sm:inline">Feeling</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
