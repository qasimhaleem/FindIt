// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Camera, MapPin, Smile } from 'lucide-react';
// import profilePic from '../../assets/profile.png';

// const CreatePost = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6">
//       <div className="flex gap-4 mb-4">
//         <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
//           <img src={profilePic} alt="Your profile" className="h-full w-full object-cover" />
//         </div>
//         <div className="flex grow">
//           <input 
//             type="text" 
//             placeholder="What did you find or lose?" 
//             className="w-full h-full px-4 sm:px-6 bg-[#F8FAFC] border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm sm:text-base transition-all"
//           />
//         </div>
//       </div>
      
//       <div className="flex flex-wrap justify-between items-center gap-3 pt-2 px-2 sm:px-4">
//         <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
//           <Camera size={20} className="text-red-500" />
//           <span className="hidden sm:inline">Photo/Video</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
//           <MapPin size={20} className="text-blue-500" />
//           <span className="hidden sm:inline">Location</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-600 hover:text-[#0F2D52] transition-colors text-sm sm:text-base font-medium">
//           <Smile size={20} className="text-green-500" />
//           <span className="hidden sm:inline">Feeling</span>
//         </button>

//         <div className="flex items-center gap-2 ml-auto">
//           <button
//             type="button"
//             onClick={() => navigate('/report-lost')}
//             className="text-xs sm:text-sm font-bold text-white bg-red-500 hover:bg-red-600 px-3 py-2 rounded-full transition-colors"
//           >
//             Report Lost
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate('/report-found')}
//             className="text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-full transition-colors"
//           >
//             Report Found
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;
