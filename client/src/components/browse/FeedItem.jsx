import React from 'react';
import { Share2, ShieldCheck, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeedItem = ({ post }) => {
  const isLost = post.status === 'LOST';
  const isResolved = post.status === 'RESOLVED';
  const authorLabel = post.author || 'Community Member';
  const timeLocationLabel = post.timeLocation || 'Just now';
  const phoneDigits = (post.phone || '').replace(/\D/g, '');
  const whatsappText = encodeURIComponent('Hi! I saw your post on FindIt and wanted to connect about the item.');
  const whatsappLink = phoneDigits ? `https://wa.me/${phoneDigits}?text=${whatsappText}` : '';
  const navigate = useNavigate();

  const handleShare = async (e) => {
    e.stopPropagation();
    const url = window.location.origin + `/items/${post.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.itemName || 'FindIt Post',
          text: post.description,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden transition-all hover:shadow-md">
      {/* Header */}
      <div 
        className="p-4 sm:p-6 flex justify-between items-start cursor-pointer group"
        onClick={() => navigate(`/items/${post.id}`)}
      >
        <div className="flex gap-3 items-center">
          <img 
            src={post.authorAvatar} 
            alt={authorLabel} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-[#0F2D52] group-hover:text-blue-600 transition-colors">{authorLabel}</h3>
            <p className="text-xs text-gray-500">{timeLocationLabel}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${isResolved ? 'bg-green-100 text-green-700' : (isLost ? 'bg-red-100 text-red-600' : 'bg-blue-600 text-white')}`}>
          {post.status}
        </div>
      </div>

      {/* Content */}
      <div 
        className="px-4 sm:px-6 pb-4 cursor-pointer"
        onClick={() => navigate(`/items/${post.id}`)}
      >
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {post.description}
        </p>
      </div>

      {/* Optional Image */}
      {post.image && (
        <div 
          className="w-full cursor-pointer bg-gray-50 flex justify-center"
          onClick={() => navigate(`/items/${post.id}`)}
        >
          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-96" />
        </div>
      )}

      {/* Footer Actions */}
      <div className="p-4 sm:p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
        {isLost ? (
          <div className="flex flex-wrap gap-4 w-full justify-between items-center">
            <div className="flex gap-4">
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] font-medium transition-colors"
              >
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
            <div className="ml-auto">
              {phoneDigits ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Message Owner
                </a>
              ) : (
                <span className="text-xs text-gray-500">No contact provided</span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 text-[#0F2D52] font-bold text-sm">
              <ShieldCheck size={18} className="text-blue-600" />
              <span>VERIFIED LISTING</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] font-medium transition-colors mr-2"
              >
                <Share2 size={18} />
                <span>Share</span>
              </button>
              {phoneDigits ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md"
                >
                  Message Finder
                </a>
              ) : (
                <span className="text-xs text-gray-500">No contact provided</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedItem;
