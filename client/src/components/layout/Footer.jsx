import React from 'react';
import { Globe, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-[#0F2D52] font-bold text-lg tracking-wider mb-1">FINDIT</h3>
          <p className="text-gray-500 text-sm">© 2026 FindIt Community. All rights reserved.</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
          <Link to="#" className="text-gray-500 hover:text-gray-900 text-xs font-semibold tracking-wider">PRIVACY POLICY</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 text-xs font-semibold tracking-wider">TERMS OF SERVICE</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 text-xs font-semibold tracking-wider">HELP CENTER</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 text-xs font-semibold tracking-wider">CONTACT US</Link>
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 text-[#0F2D52]">
          <button className="hover:text-blue-600 transition-colors">
            <Globe size={20} />
          </button>
          <button className="hover:text-blue-600 transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
