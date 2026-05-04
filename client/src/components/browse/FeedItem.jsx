import React from 'react';
import { ThumbsUp, MessageSquare, Share2, ShieldCheck } from 'lucide-react';

const FeedItem = ({ post }) => {
  const isLost = post.status === 'LOST';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-6 flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <img 
            src={post.authorAvatar} 
            alt={post.author} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-[#0F2D52]">{post.author}</h3>
            <p className="text-xs text-gray-500">{post.timeLocation}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${isLost ? 'bg-red-100 text-red-600' : 'bg-blue-600 text-white'}`}>
          {post.status}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 pb-4">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {post.description}
        </p>
      </div>

      {/* Optional Image */}
      {post.image && (
        <div className="w-full">
          <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-96" />
        </div>
      )}

      {/* Footer Actions */}
      <div className="p-4 sm:p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
        {isLost ? (
          <div className="flex gap-6 w-full">
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] font-medium transition-colors">
              <ThumbsUp size={18} />
              <span>Helpful</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] font-medium transition-colors">
              <MessageSquare size={18} />
              <span>Comment</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] font-medium transition-colors ml-auto">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 text-[#0F2D52] font-bold text-sm">
              <ShieldCheck size={18} className="text-blue-600" />
              <span>VERIFIED LISTING</span>
            </div>
            <button className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md">
              Message Finder
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedItem;
