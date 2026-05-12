import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AccountDeletionCard = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to permanently delete your account and all your items? This action cannot be undone."
    );

    if (isConfirmed) {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem('token');
        
        await axios.delete(`${API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.dispatchEvent(new Event('storage'));
        
        alert("Your account has been deleted.");
        navigate('/login');
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete account.');
      }
    }
  };

  return (
    <div className="bg-[#FEF2F2] border border-red-100 rounded-2xl p-6 md:p-8 mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h3 className="text-red-700 font-bold mb-2">Account Deletion</h3>
        <p className="text-sm text-gray-600">
          Permanently remove your account and all reported history. This action cannot be undone.
        </p>
      </div>
      <button 
        onClick={handleDelete}
        className="shrink-0 bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm text-sm"
      >
        Delete My Account
      </button>
    </div>
  );
};

export default AccountDeletionCard;
