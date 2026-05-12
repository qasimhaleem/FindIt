import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MapPin, Calendar, Tag, User, Phone, Mail, ArrowLeft, ShieldCheck, MessageSquare } from 'lucide-react';

import watchImg from '../assets/watch.png'; // Fallback

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchItem = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${API_URL}/api/items/${id}`);
        if (isMounted) setItem(res.data);
      } catch (err) {
        if (isMounted) setErrorMsg('Item not found or failed to load.');
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchItem();
    return () => { isMounted = false; };
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center font-medium text-gray-500">Loading details...</div>;
  if (errorMsg || !item) return <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center text-red-500 font-medium">{errorMsg}</div>;

  const isLost = item.type === 'lost';
  const itemDate = item.date ? new Date(item.date).toLocaleDateString() : 'Unknown';
  const authorName = item.user?.fullName || 'Community Member';
  const department = item.user?.department || 'Not specified';
  
  const phoneDigits = (item.user?.phone || '').replace(/\D/g, '');
  const whatsappText = encodeURIComponent(`Hi! I saw your ${item.itemName} post on FindIt.`);
  const whatsappLink = phoneDigits ? `https://wa.me/${phoneDigits}?text=${whatsappText}` : '';

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-[#0F2D52] font-medium mb-6 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Image Area */}
          <div className="relative h-64 sm:h-80 bg-gray-100 w-full flex items-center justify-center overflow-hidden">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.itemName} className="w-full h-full object-cover" />
            ) : (
              <img src={watchImg} alt={item.itemName} className="w-full h-full object-cover opacity-80" />
            )}
            <div className={`absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm shadow-sm ${item.status === 'resolved' ? 'bg-green-100 text-green-700' : (isLost ? 'bg-red-100 text-red-700' : 'bg-blue-600 text-white')}`}>
              {item.status === 'resolved' ? 'RESOLVED' : item.type.toUpperCase()}
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {/* Title & Category */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
                <span className="text-gray-400 text-sm font-medium">{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0F2D52] mb-4">{item.itemName}</h1>
              <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Location</p>
                  <p className="font-medium text-[#0F2D52]">{item.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-500 mt-1" size={20} />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Date</p>
                  <p className="font-medium text-[#0F2D52]">{itemDate}</p>
                </div>
              </div>
            </div>

            {/* Reporter Info */}
            <div className="border-t border-gray-100 pt-8">
              <h3 className="font-bold text-lg text-[#0F2D52] mb-6 flex items-center gap-2">
                <User size={20} className="text-blue-500" /> Reporter Information
              </h3>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <p className="font-bold text-gray-900 text-lg mb-1">{authorName}</p>
                  <p className="text-sm text-gray-500 font-medium">{department}</p>
                  {phoneDigits ? (
                    <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                      <Phone size={14} className="text-gray-400"/> {item.user?.phone}
                    </p>
                  ) : null}
                </div>

                {/* Contact Button */}
                {phoneDigits ? (
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold rounded-xl shadow-md transition-colors"
                  >
                    <MessageSquare size={18} />
                    Message {isLost ? 'Owner' : 'Finder'}
                  </a>
                ) : (
                  <div className="px-6 py-3 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium">
                    No contact provided
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
