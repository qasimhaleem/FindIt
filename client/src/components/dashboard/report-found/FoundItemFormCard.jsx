import React from 'react';
import { MapPin, UploadCloud } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const FoundItemFormCard = ({ isSubmitting }) => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full">
      
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#0F2D52] mb-2">What did you find?</label>
        <input 
          type="text" 
          {...register('itemName')}
          placeholder="e.g. Silver Keychain with Blue Whistle" 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-[#0F2D52] mb-2">Category</label>
          <div className="relative">
            <select {...register('category')} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white appearance-none cursor-pointer" required>
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Personal Items">Personal Items</option>
              <option value="Documents">Documents</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#0F2D52] mb-2">Date found</label>
          <div className="relative">
            <input 
              type="date"
              {...register('date')}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#0F2D52] mb-2">Where was it found?</label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            {...register('location')}
            placeholder="Enter location or landmark" 
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#0F2D52] mb-2">Description</label>
        <textarea 
          {...register('description')}
          rows="4" 
          placeholder="Describe condition, details, etc." 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y bg-white"
          required
        ></textarea>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-semibold text-[#0F2D52] mb-2">Image Upload</label>
        <div className="border-2 border-dashed border-gray-200 bg-[#F8FAFC] rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50/50 transition-colors">
          <UploadCloud className="text-[#0F2D52] mb-4" size={36} />
          <p className="text-sm font-bold text-[#0F2D52] mb-1">Click to upload or drag and drop</p>
          <p className="text-[10px] text-gray-400 font-medium tracking-wide">PNG, JPG or JPEG (max. 5MB)</p>
        </div>
      </div>

      <hr className="border-gray-100 mb-8" />

      <div className="flex gap-4">
        <button className="flex-1 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm text-sm">
          Submit Found Report
        </button>
        <button className="flex-1 bg-[#E1EDF8] hover:bg-[#d0e3f5] text-[#0F2D52] font-bold py-3.5 rounded-xl transition-colors shadow-sm text-sm">
          Save Draft
        </button>
      </div>

    </div>
  );
};

export default FoundItemFormCard;
