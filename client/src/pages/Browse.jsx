import React from 'react';
import SmartFilters from '../components/browse/SmartFilters';
import CreatePost from '../components/browse/CreatePost';
import FeedItem from '../components/browse/FeedItem';
import MessagesSidebar from '../components/browse/MessagesSidebar';

import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import goldenRetriever from '../assets/golden_retriever.png';

const feedPosts = [
  {
    id: 1,
    author: 'Sarah Jenkins',
    authorAvatar: avatar1,
    timeLocation: '2 hours ago • Central Park',
    status: 'LOST',
    description: 'I lost my golden retriever near the Bethesda Terrace this morning. He\'s very friendly and answers to the name "Cooper". He was wearing a blue collar with a FindIt QR code.',
    image: goldenRetriever
  },
  {
    id: 2,
    author: 'Marcus Rivera',
    authorAvatar: avatar2,
    timeLocation: '5 hours ago • Grand Central Terminal',
    status: 'FOUND',
    description: 'Found a set of Apple AirPods Pro in a black leather case near Platform 14. If these belong to you, please message me with the name engraved on the back to verify.'
  }
];

const Browse = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Smart Filters (Hidden on small mobile, visible on lg) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <SmartFilters />
            </div>
          </div>

          {/* Center Column: Feed (Spans 12 on mobile, 8 on tablet, 6 on desktop) */}
          <div className="col-span-1 lg:col-span-6">
            <CreatePost />
            
            <div className="space-y-6">
              {feedPosts.map(post => (
                <FeedItem key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Column: Messages Sidebar (Hidden on md/tablet, visible on lg) */}
          <div className="hidden lg:block lg:col-span-3">
            <MessagesSidebar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Browse;
