import React from 'react';
import WelcomeHeader from '../components/dashboard/WelcomeHeader';
import StatsCards from '../components/dashboard/StatsCards';
import RecentActivity from '../components/dashboard/RecentActivity';
import QuickActionsCard from '../components/dashboard/QuickActionsCard';
import TrustScoreCard from '../components/dashboard/TrustScoreCard';
import MapWidgetCard from '../components/dashboard/MapWidgetCard';

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <WelcomeHeader />
      <StatsCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column (Main Content) */}
        <div className="xl:col-span-8">
          <RecentActivity />
        </div>
        
        {/* Right Column (Widgets) */}
        <div className="xl:col-span-4">
          <QuickActionsCard />
          <TrustScoreCard />
          <MapWidgetCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
