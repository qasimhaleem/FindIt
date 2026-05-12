import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FoundItemFormCard from '../components/dashboard/report-found/FoundItemFormCard';
import NextStepsCard from '../components/dashboard/report-found/NextStepsCard';
import PrivacyGuaranteedCard from '../components/dashboard/report-found/PrivacyGuaranteedCard';
import NearbyMapWidget from '../components/dashboard/report-found/NearbyMapWidget';

const ReportFound = () => {
  const methods = useForm({
    defaultValues: {
      type: 'found',
      itemName: '',
      category: 'Other',
      description: '',
      date: '',
      location: '',
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      const token = localStorage.getItem('token');
      const API_BASE = import.meta.env.VITE_API_BASE;
      
      await axios.post(`${API_BASE}/api/items`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      navigate('/dashboard'); // redirect on success
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Failed to submit report');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-6xl mx-auto flex flex-col min-h-full">
        {/* Header section */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-[#0F2D52] mb-4">Report a Found Item</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Thank you for being an active community member. Your honesty helps reunite 
            people with their valued possessions.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-grow">
          {/* Left Column (Main Form - Single Card) */}
          <div className="xl:col-span-8 flex flex-col">
            <FoundItemFormCard isSubmitting={isSubmitting} />
          </div>
          
          {/* Right Column (Side Panels) */}
          <div className="xl:col-span-4 flex flex-col">
            <NextStepsCard />
            <PrivacyGuaranteedCard />
            <div className="mt-auto pt-6">
              <NearbyMapWidget />
            </div>
          </div>
        </div>

        {/* Dashboard Footer */}
        <div className="mt-16 text-center text-[10px] text-gray-400 font-medium">
          © 2024 FindIt Community. Empathetic Professionalism in Lost & Found.
        </div>
      </form>
    </FormProvider>
  );
};

export default ReportFound;
