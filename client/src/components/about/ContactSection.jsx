import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-[#E6EAF5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F2D52] mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you today?" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium py-3 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-3">Connect With Support</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D52] mb-6">
              We're here to assist you 24/7
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-sm">
              Whether you're looking for a lost pet or a misplaced wallet, our support 
              team is dedicated to providing empathetic guidance through every step of 
              the recovery process.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F2D52] shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email Support</p>
                  <p className="text-sm font-semibold text-[#0F2D52]">support@findit.pk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F2D52] shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone Assistance</p>
                  <p className="text-sm font-semibold text-[#0F2D52]">+92 21 3456 7890</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-4">Follow our impact</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#0F2D52] text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition-colors">
                  FB
                </a>
                <a href="#" className="w-10 h-10 bg-[#0F2D52] text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition-colors">
                  X
                </a>
                <a href="#" className="w-10 h-10 bg-[#0F2D52] text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition-colors">
                  IG
                </a>
                <a href="#" className="w-10 h-10 bg-[#0F2D52] text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-blue-700 transition-colors">
                  IN
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
