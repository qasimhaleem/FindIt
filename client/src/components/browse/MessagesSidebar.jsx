import React from 'react';
import { Edit, Search } from 'lucide-react';
import avatar1 from '../../assets/avatar_1.png';
import avatar2 from '../../assets/avatar_2.png';
import avatar3 from '../../assets/avatar_3.png';

const messages = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    time: '12:45 PM',
    preview: 'Yes, that looks exactly lik...',
    avatar: avatar1,
    active: true,
    online: true
  },
  {
    id: 2,
    name: 'David Chen',
    time: 'Yesterday',
    preview: 'Where exactly in the termin...',
    avatar: avatar2,
    active: false,
    online: false
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    time: 'Tue',
    preview: "I'll keep an eye out for the ...",
    avatar: avatar3,
    active: false,
    online: false
  }
];

const MessagesSidebar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-[calc(100vh-120px)] sticky top-24">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-[#0F2D52] text-xl font-bold">Messages</h2>
        <button className="text-gray-500 hover:text-[#0F2D52] transition-colors">
          <Edit size={20} />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-grow overflow-y-auto">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-4 p-4 cursor-pointer transition-colors ${
              msg.active ? 'bg-[#F1F5F9] border-l-4 border-[#0F2D52]' : 'hover:bg-gray-50 border-l-4 border-transparent'
            }`}
          >
            <div className="relative flex-shrink-0">
              <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full object-cover" />
              {msg.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-[#0F2D52] truncate">{msg.name}</h4>
                <span className="text-[10px] text-gray-500 whitespace-nowrap ml-2">{msg.time}</span>
              </div>
              <p className={`text-sm truncate ${msg.active ? 'font-medium text-blue-800' : 'text-gray-500'}`}>
                {msg.preview}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Search Contacts Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search contacts..." 
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesSidebar;
