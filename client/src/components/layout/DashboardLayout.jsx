import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Search as SearchIcon, PlusCircle, User, Settings, HelpCircle, Bell, CircleUser, Menu, X } from 'lucide-react';
import profilePic from '../../assets/profile.png';

const Sidebar = ({ onClose, userName }) => {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (linkPath) => {
    return path === linkPath
      ? "flex items-center gap-3 px-6 py-3 text-[#0F2D52] bg-blue-50/50 border-r-4 border-[#0F2D52] font-semibold"
      : "flex items-center gap-3 px-6 py-3 text-gray-500 hover:text-[#0F2D52] hover:bg-gray-50 font-medium transition-colors border-r-4 border-transparent";
  };

  return (
    <div className="w-64 bg-white border-r border-gray-100 flex flex-col h-full overflow-y-auto">
      {/* Logo Area */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <div>
          <Link to="/" onClick={onClose} className="text-2xl font-bold text-[#0F2D52] block mb-1">FindIt</Link>
          <p className="text-xs text-gray-500 font-medium tracking-wide">Community Portal</p>
        </div>
        {/* Mobile Close Button */}
        <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
      </div>

      {/* Main Navigation */}
      <div className="py-6 flex grow flex-col gap-2">
        <Link to="/dashboard" onClick={onClose} className={getLinkClass('/dashboard')}>
          <LayoutGrid size={20} />
          <span>Overview</span>
        </Link>
        <Link to="/dashboard/report-lost" onClick={onClose} className={getLinkClass('/dashboard/report-lost')}>
          <SearchIcon size={20} />
          <span>Report Lost</span>
        </Link>
        <Link to="/dashboard/report-found" onClick={onClose} className={getLinkClass('/dashboard/report-found')}>
          <PlusCircle size={20} />
          <span>Report Found</span>
        </Link>
        <Link to="/dashboard/profile" onClick={onClose} className={getLinkClass('/dashboard/profile')}>
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>

      {/* Footer Navigation */}
      <div className="py-6 border-t border-gray-100 flex flex-col gap-2">
        <Link to="/dashboard/settings" onClick={onClose} className={getLinkClass('/dashboard/settings')}>
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <Link to="/dashboard/help" onClick={onClose} className={getLinkClass('/dashboard/help')}>
          <HelpCircle size={20} />
          <span>Help Center</span>
        </Link>

        {/* Profile Area at Bottom */}
        <div className="mt-4 px-6 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src={profilePic} alt={userName} className="w-10 h-10 rounded-full object-cover shadow-sm" />
          <div>
            <span className="font-bold text-[#0F2D52] text-sm block leading-tight">{userName}</span>
            <span className="text-xs text-gray-500 font-medium">Pro Member</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Topbar = ({ onMenuClick }) => {
  return (
    <div className="h-20 bg-[#F8FAFC] flex items-center justify-between px-4 sm:px-8 border-b border-gray-100 sticky top-0 z-10">
      {/* Left Topbar */}
      <div className="flex items-center gap-4 sm:gap-8">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-[#0F2D52] focus:outline-none"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-[#0F2D52] font-bold text-lg hidden sm:block">FindIt Dashboard</h2>

        {/* Search Bar */}
        {/* <div className="relative w-64 md:w-96 hidden md:block">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search for items..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
          />
        </div> */}
      </div>

      {/* Right User Area */}
      <div className="flex items-center gap-4 sm:gap-6 ml-auto">
        <button className="text-[#0F2D52] hover:opacity-80 transition-opacity relative">
          <Bell size={22} />
        </button>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity text-[#0F2D52]">
          <CircleUser size={26} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const userObj = JSON.parse(userStr);
        if (userObj && userObj.fullName) {
          setUserName(userObj.fullName);
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
