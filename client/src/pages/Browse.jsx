import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, PlusCircle, Loader2 } from 'lucide-react';
import axios from 'axios';
import SmartFilters from '../components/browse/SmartFilters';
// import CreatePost from '../components/browse/CreatePost';
import FeedItem from '../components/browse/FeedItem';

import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import avatar3 from '../assets/avatar_3.png';

const Browse = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') || '';

  const [filters, setFilters] = useState({
    city: '',
    category: '',
    status: '',
    startDate: '',
    endDate: '',
  });

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
  const avatars = useMemo(() => [avatar1, avatar2, avatar3], []);

  // Reset page when query changes
  useEffect(() => {
    setPage(1);
  }, [q]);

  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      try {
        if (page === 1) setLoading(true);
        else setLoadingMore(true);
        
        setErrorMsg('');
        const response = await axios.get(`${API_BASE}/api/items?q=${encodeURIComponent(q)}&page=${page}&limit=10`);
        
        if (isMounted) {
          let newItems = [];
          let total = 1;
          
          if (Array.isArray(response.data)) {
            newItems = response.data;
          } else if (response.data && Array.isArray(response.data.items)) {
            newItems = response.data.items;
            total = response.data.totalPages || 1;
          }

          setTotalPages(total);
          
          if (page === 1) {
            setItems(newItems);
          } else {
            setItems(prev => [...prev, ...newItems]);
          }
        }
      } catch (error) {
        if (isMounted) {
          setErrorMsg(error.response?.data?.message || 'Failed to load feed');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setLoadingMore(false);
        }
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
    };
  }, [API_BASE, q, page]);

  const feedPosts = useMemo(() => {
    return items.map((item, index) => {
      const createdAt = item.createdAt ? new Date(item.createdAt) : null;
      const timeLabel = createdAt ? createdAt.toLocaleString() : 'Just now';
      const locationLabel = item.location ? `• ${item.location}` : '';

      return {
        id: item._id || `${item.itemName}-${index}`,
        author: item.user?.fullName || 'Community Member',
        authorAvatar: avatars[index % avatars.length],
        timeLocation: `${timeLabel} ${locationLabel}`.trim(),
        status: item.status === 'resolved' ? 'RESOLVED' : (item.type || 'lost').toUpperCase(),
        description: item.description || 'No description provided',
        category: item.category || 'Other',
        date: item.date || '',
        location: item.location || '',
        phone: item.user?.phone || '',
        itemName: item.itemName || '',
        image: item.imageUrl || null, // Map imageUrl to image prop
      };
    });
  }, [items, avatars]);

  const filteredPosts = useMemo(() => {
    return feedPosts.filter((post) => {
      const cityMatch = filters.city
        ? post.location.toLowerCase().includes(filters.city.toLowerCase())
        : true;
      const categoryMatch = filters.category ? post.category === filters.category : true;
      const statusMatch = filters.status ? post.status === filters.status : true;
      const postDate = post.date ? new Date(post.date) : null;
      const startDate = filters.startDate ? new Date(filters.startDate) : null;
      const endDate = filters.endDate ? new Date(filters.endDate) : null;
      const startMatch = startDate && postDate ? postDate >= startDate : true;
      const endMatch = endDate && postDate ? postDate <= endDate : true;

      return cityMatch && categoryMatch && statusMatch && startMatch && endMatch;
    });
  }, [feedPosts, filters]);

  const handleFiltersChange = (nextValues) => {
    setFilters((prev) => ({ ...prev, ...nextValues }));
  };

  const handleFiltersReset = () => {
    setFilters({
      city: '',
      category: '',
      status: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Smart Filters (Hidden on small mobile, visible on lg) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <SmartFilters filters={filters} onChange={handleFiltersChange} onReset={handleFiltersReset} />
            </div>
          </div>

          {/* Center Column: Feed (Spans 12 on mobile, 8 on tablet, 6 on desktop) */}
          <div className="col-span-1 lg:col-span-6">
            

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                {errorMsg}
              </div>
            )}

            {loading && page === 1 && (
              <div className="mb-6 p-4 bg-white border border-gray-100 rounded-xl text-sm text-gray-500 flex items-center gap-2">
                <Loader2 className="animate-spin" size={16} /> Loading latest reports...
              </div>
            )}
            
            <div className="space-y-6">
              {!loading && filteredPosts.length === 0 && !errorMsg && (
                <div className="p-10 bg-white border border-gray-100 rounded-3xl text-center shadow-sm">
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2D52] mb-2">No items found</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    We couldn't find any items matching your search. If you've lost something, reporting it will notify the community immediately.
                  </p>
                  <Link 
                    to="/dashboard/report-lost" 
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold rounded-xl shadow-md transition-colors"
                  >
                    <PlusCircle size={18} />
                    Report a Lost Item
                  </Link>
                </div>
              )}
              {filteredPosts.map((post) => (
                <FeedItem key={post.id} post={post} />
              ))}
              
              {/* Pagination Next Button */}
              {!loading && page < totalPages && filteredPosts.length > 0 && (
                <div className="pt-4 pb-8 flex justify-center">
                  <button 
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-8 py-3 bg-white border border-gray-200 hover:border-blue-300 text-[#0F2D52] font-bold rounded-xl shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loadingMore && <Loader2 className="animate-spin" size={18} />}
                    {loadingMore ? 'Loading...' : 'Load Next 10 Records'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
