import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import profilePic from '../../assets/profile.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const getMobileLinkClass = (linkPath) => {
    return path === linkPath
      ? "block text-[#0F2D52] font-semibold bg-blue-50 px-4 py-3 rounded-md"
      : "block text-gray-500 hover:text-[#0F2D52] hover:bg-gray-50 px-4 py-3 font-medium rounded-md transition-colors";
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

          {/* Center Links - Desktop */}
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
                <Link to="/dashboard" className="h-8 w-8 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all hidden sm:block">
                  <img src={profilePic} alt="User profile" className="h-full w-full object-cover" />
                </Link>
                <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors hidden sm:block">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-[#0F2D52] font-medium text-sm transition-colors hidden sm:block">
                  Log in
                </Link>
                <Link to="/register" className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hidden sm:block">
                  Sign up
                </Link>
              </>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="sm:hidden p-2 text-gray-500 hover:text-[#0F2D52] transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/')}>
              Home
            </Link>
            <Link to="/browse" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/browse')}>
              Browse
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/about')}>
              About Us
            </Link>
            
            <div className="border-t border-gray-100 mt-4 pt-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)} className={getMobileLinkClass('/dashboard')}>
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }} 
                    className="w-full text-left text-red-500 hover:bg-red-50 px-4 py-3 font-medium rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 px-4">
                  <Link to="/login" onClick={() => setIsOpen(false)} className="text-center text-[#0F2D52] border border-[#0F2D52] hover:bg-blue-50 font-medium py-2 rounded-lg transition-colors">
                    Log in
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="text-center bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium py-2 rounded-lg transition-colors">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
