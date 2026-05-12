import React, { useState } from 'react';
import { Lock, Key, ChevronRight, X, MessageCircle } from 'lucide-react';
import axios from 'axios';

const SecurityCard = ({ profileData, onChange }) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
      const token = localStorage.getItem('token');
      await axios.put(`${API_BASE}/api/auth/password`, { currentPassword, newPassword }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Password updated successfully!');
      setIsPasswordModalOpen(false);
      setCurrentPassword('');
      setNewPassword('');
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update password.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="text-[#0F2D52]" size={20} />
        <h2 className="text-lg font-bold text-[#0F2D52]">Security & Preferences</h2>
      </div>

      <div className="space-y-4">
        {/* Password Item */}
        <div 
          onClick={() => setIsPasswordModalOpen(true)}
          className="border border-gray-100 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
              <Key size={18} className="text-[#0F2D52]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F2D52]">Change Password</p>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">Click to update</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>

        {/* Direct Messages Toggle */}
        <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F2D52]">Direct Messages</p>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">Allow users to message you</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={profileData.directMessage !== false}
              onChange={(e) => onChange('directMessage', e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F8FAFC]">
              <h3 className="font-bold text-[#0F2D52] text-lg">Change Password</h3>
              <button onClick={() => setIsPasswordModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handlePasswordSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">Current Password</label>
                <input 
                  type="password" 
                  value={currentPassword} 
                  onChange={e => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">New Password</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={e => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                  minLength={6}
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button type="submit" className="flex-1 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityCard;
