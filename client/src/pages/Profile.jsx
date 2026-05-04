import React from 'react';
import ProfileHeader from '../components/dashboard/profile/ProfileHeader';
import IdentityCard from '../components/dashboard/profile/IdentityCard';
import PersonalInfoCard from '../components/dashboard/profile/PersonalInfoCard';
import SecurityCard from '../components/dashboard/profile/SecurityCard';
import PreferencesCard from '../components/dashboard/profile/PreferencesCard';
import TrustVerifiedCard from '../components/dashboard/profile/TrustVerifiedCard';
import AccountDeletionCard from '../components/dashboard/profile/AccountDeletionCard';

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-full pb-8">
      <ProfileHeader />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-8 flex flex-col">
          <IdentityCard />
          <PersonalInfoCard />
        </div>
        
        {/* Right Column */}
        <div className="xl:col-span-4 flex flex-col">
          <SecurityCard />
          <PreferencesCard />
          <TrustVerifiedCard />
        </div>
      </div>

      <AccountDeletionCard />
    </div>
  );
};

export default Profile;
