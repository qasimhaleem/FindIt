import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileHeader from '../components/dashboard/profile/ProfileHeader';
import IdentityCard from '../components/dashboard/profile/IdentityCard';
import PersonalInfoCard from '../components/dashboard/profile/PersonalInfoCard';
import SecurityCard from '../components/dashboard/profile/SecurityCard';
import TrustVerifiedCard from '../components/dashboard/profile/TrustVerifiedCard';
import AccountDeletionCard from '../components/dashboard/profile/AccountDeletionCard';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfileData(res.data);
      } catch (err) {
        setErrorMsg('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [API_URL, token]);

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveAll = async () => {
    try {
      await axios.put(`${API_URL}/api/auth/profile`, {
        fullName: profileData.fullName,
        email: profileData.email,
        phone: profileData.phone,
        department: profileData.department,
        directMessage: profileData.directMessage,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated successfully!');
      
      // Update local storage user just in case
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const userObj = JSON.parse(userStr);
        userObj.fullName = profileData.fullName;
        localStorage.setItem('user', JSON.stringify(userObj));
        // Force header update
        window.dispatchEvent(new Event('storage'));
      }
    } catch (err) {
      alert('Failed to save profile');
    }
  };

  const handleExport = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/auth/export`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(res.data, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "findit_data_export.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (err) {
      alert('Failed to export data');
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500 font-medium">Loading profile...</div>;
  if (errorMsg) return <div className="p-8 text-center text-red-500 font-medium">{errorMsg}</div>;
  if (!profileData) return null;

  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-full pb-8">
      <ProfileHeader onSave={handleSaveAll} onExport={handleExport} />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-8 flex flex-col">
          <IdentityCard profileData={profileData} />
          <PersonalInfoCard profileData={profileData} onChange={handleProfileChange} />
        </div>
        
        {/* Right Column */}
        <div className="xl:col-span-4 flex flex-col">
          <SecurityCard profileData={profileData} onChange={handleProfileChange} />
          <TrustVerifiedCard />
        </div>
      </div>

      <AccountDeletionCard />
    </div>
  );
};

export default Profile;
