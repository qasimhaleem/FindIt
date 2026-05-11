import React from 'react';
import { Info } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const ItemInformationCard = () => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-8">
        <Info className="text-[#0F2D52]" size={22} />
        <h2 className="text-xl font-bold text-[#0F2D52]">Item Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Item Name</label>
          <input 
            type="text" 
            {...register('itemName')}
            placeholder="e.g. Blue Leather Wallet" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Category</label>
          <div className="relative">
            <select {...register('category')} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white appearance-none cursor-pointer">
              <option value="Electronics">Electronics</option>
              <option value="Personal Items">Personal Items</option>
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Detailed Description</label>
        <textarea 
          {...register('description')}
          rows="4" 
          placeholder="Describe unique markings, brand, model, or contents..." 
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y bg-white"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ItemInformationCard;
