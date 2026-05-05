import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import profilePic from '../../assets/profile.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const getLinkClass = (linkPath) => {
    return path === linkPath
      ? "text-[#0F2D52] font-semibold border-b-2 border-[#0F2D52] px-1 py-5 text-sm"
      : "text-gray-500 hover:text-gray-900 px-1 py-5 text-sm font-medium transition-colors";
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#0F2D52] flex-shrink-0">
              FindIt
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden sm:flex space-x-4 md:space-x-8">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/browse" className={getLinkClass('/browse')}>
              Browse
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              About Us
            </Link>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
                  <img src={profilePic} alt="User profile" className="h-full w-full object-cover" />
                </Link>
                <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-[#0F2D52] font-medium text-sm transition-colors">
                  Log in
                </Link>
                <Link to="/register" className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
