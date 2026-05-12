import React, { useState } from 'react';
import { Image as ImageIcon, UploadCloud, BadgeCheck, Loader2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const PhotoUploadCard = () => {
  const [uploading, setUploading] = useState(false);
  const { setValue, watch } = useFormContext();
  const imageUrl = watch('imageUrl');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    // REPLACE WITH YOUR CLOUDINARY DETAILS
    data.append("upload_preset", "findit_preset"); 
    data.append("cloud_name", "djtvxlmdu");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/djtvxlmdu/image/upload", {
        method: "POST",
        body: data,
      });
      const uploadedImage = await res.json();
      if (uploadedImage.secure_url) {
        setValue('imageUrl', uploadedImage.secure_url);
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Failed to upload image. Make sure Cloudinary details are correct.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <ImageIcon className="text-[#0F2D52]" size={20} />
        <h2 className="text-lg font-bold text-[#0F2D52]">Photo Reference</h2>
      </div>

      <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors mb-4 relative overflow-hidden">
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleImageUpload}
          disabled={uploading}
        />
        {uploading ? (
          <div className="flex flex-col items-center text-gray-500">
            <Loader2 className="animate-spin mb-2" size={32} />
            <span className="text-sm font-semibold">Uploading...</span>
          </div>
        ) : imageUrl ? (
          <div className="w-full h-32 relative">
             <img src={imageUrl} alt="Uploaded preview" className="w-full h-full object-contain rounded-lg" />
          </div>
        ) : (
          <>
            <UploadCloud className="text-gray-400 mb-4" size={32} />
            <p className="text-sm font-semibold text-gray-700 mb-1">Click to upload or<br/>drag and drop</p>
            <p className="text-[10px] text-gray-400 font-medium">PNG, JPG up to 10MB</p>
          </>
        )}
      </label>

      <div className="bg-blue-50/80 rounded-xl p-3 flex items-start gap-3">
        <BadgeCheck className="text-[#0F2D52] mt-0.5 flex-shrink-0" size={16} />
        <p className="text-[11px] font-bold text-[#0F2D52] leading-relaxed">
          Clear photos improve recovery chances by 65%.
        </p>
      </div>
    </div>
  );
};

export default PhotoUploadCard;
