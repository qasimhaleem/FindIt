import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit2, CheckCircle, X, Image as ImageIcon } from 'lucide-react';
import watchImg from '../../assets/watch.png';

const getStatusBadge = (item) => {
  if (item.status === 'resolved') {
    return <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Resolved</span>;
  }
  if (item.type === 'found') {
    return <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Found</span>;
  }
  return <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">Lost</span>;
};

const RecentActivity = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
  
  const fetchMyItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE}/api/items/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(res.data);
    } catch (err) {
      console.error('Failed to fetch items', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE}/api/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(items.filter(item => item._id !== id));
    } catch (err) {
      alert('Failed to delete item.');
    }
  };

  const handleResolve = async (id) => {
    if (!window.confirm('Mark this item as resolved/given to owner?')) return;
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(`${API_BASE}/api/items/${id}`, { status: 'resolved' }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(items.map(item => item._id === id ? res.data : item));
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(`${API_BASE}/api/items/${editingItem._id}`, editingItem, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(items.map(item => item._id === editingItem._id ? res.data : item));
      setEditingItem(null);
    } catch (err) {
      alert('Failed to update item.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#0F2D52]">My Recent Posts</h2>
      </div>

      {/* Table Header */}
      <div className="bg-[#F1F5F9] px-6 py-3 grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:grid">
        <div className="col-span-5">ITEM</div>
        <div className="col-span-2">LOCATION</div>
        <div className="col-span-2">DATE</div>
        <div className="col-span-1 text-center">STATUS</div>
        <div className="col-span-2 text-right">ACTIONS</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {loading ? (
          <div className="p-6 text-center text-gray-500 text-sm">Loading your posts...</div>
        ) : items.length === 0 ? (
          <div className="p-6 text-center text-gray-500 text-sm">You haven't posted any items yet.</div>
        ) : (
          items.map((item) => (
            <div key={item._id} className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors">
              <div className="sm:col-span-5 flex items-center gap-4">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.itemName} className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
                ) : (
                  <div className="w-12 h-12 rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400">
                    <ImageIcon size={20} />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-[#0F2D52] text-sm">{item.itemName}</h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <div className="sm:col-span-2 text-sm text-gray-600 truncate">
                <span className="sm:hidden font-bold mr-2">Location:</span>{item.location}
              </div>
              <div className="sm:col-span-2 text-sm text-gray-600 truncate">
                <span className="sm:hidden font-bold mr-2">Date:</span>{new Date(item.createdAt).toLocaleDateString()}
              </div>
              <div className="sm:col-span-1 text-left sm:text-center">
                <span className="sm:hidden font-bold mr-2">Status:</span>{getStatusBadge(item)}
              </div>
              <div className="sm:col-span-2 flex justify-start sm:justify-end gap-2">
                {item.status === 'open' && (
                  <>
                    <button 
                      onClick={() => handleResolve(item._id)}
                      title={item.type === 'found' ? "Given to owner" : "Mark resolved"} 
                      className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <CheckCircle size={18} />
                    </button>
                    <button 
                      onClick={() => setEditingItem(item)}
                      title="Edit" 
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 size={18} />
                    </button>
                  </>
                )}
                <button 
                  onClick={() => handleDelete(item._id)}
                  title="Delete" 
                  className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F8FAFC]">
              <h3 className="font-bold text-[#0F2D52] text-lg">Edit Item</h3>
              <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleEditSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">Item Name</label>
                <input 
                  type="text" 
                  value={editingItem.itemName} 
                  onChange={e => setEditingItem({...editingItem, itemName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">Description</label>
                <textarea 
                  value={editingItem.description} 
                  onChange={e => setEditingItem({...editingItem, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">Location</label>
                <input 
                  type="text" 
                  value={editingItem.location} 
                  onChange={e => setEditingItem({...editingItem, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0F2D52] mb-1">Image URL (Optional)</label>
                <input 
                  type="url" 
                  value={editingItem.imageUrl || ''} 
                  onChange={e => setEditingItem({...editingItem, imageUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="pt-4 flex gap-3">
                <button type="submit" className="flex-1 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
                  Save Changes
                </button>
                <button type="button" onClick={() => setEditingItem(null)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#0F2D52] font-bold py-2.5 rounded-lg text-sm transition-colors">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
