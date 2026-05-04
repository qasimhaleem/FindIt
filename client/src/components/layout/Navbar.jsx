import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import profilePic from '../../assets/profile.png';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const getLinkClass = (linkPath) => {
    return path === linkPath
      ? "text-[#0F2D52] font-semibold border-b-2 border-[#0F2D52] px-1 py-5 text-sm"
      : "text-gray-500 hover:text-gray-900 px-1 py-5 text-sm font-medium transition-colors";
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Search */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold text-[#0F2D52] flex-shrink-0">
              FindIt
            </Link>
            
            {/* Search Bar - hidden on mobile */}
            <div className="hidden md:flex items-center relative w-64 lg:w-80">
              <Search className="absolute left-3 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search for items..." 
                className="w-full pl-10 pr-4 py-2 bg-[#F1F5F9] border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm transition-all"
              />
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden sm:flex space-x-4 md:space-x-8">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/browse" className={getLinkClass('/browse')}>
              Browse
            </Link>
            <Link to="/messages" className={getLinkClass('/messages')}>
              Messages
            </Link>
            <Link to="/notifications" className={getLinkClass('/notifications')}>
              Notifications
            </Link>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-6">
            <Link to="/report" className="hidden sm:block text-sm font-medium text-[#0F2D52] hover:text-blue-700 transition-colors">
              Report Item
            </Link>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer">
              <img src={profilePic} alt="User profile" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
