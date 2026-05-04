import React from 'react';

const AccountDeletionCard = () => {
  return (
    <div className="bg-[#FEF2F2] border border-red-100 rounded-2xl p-6 md:p-8 mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h3 className="text-red-700 font-bold mb-2">Account Deletion</h3>
        <p className="text-sm text-gray-600">
          Permanently remove your account and all reported history. This action cannot be undone.
        </p>
      </div>
      <button className="shrink-0 bg-white border border-red-200 hover:bg-red-50 text-red-600 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm text-sm">
        Delete My Account
      </button>
    </div>
  );
};

export default AccountDeletionCard;
