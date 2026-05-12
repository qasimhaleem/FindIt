import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ItemInformationCard from '../components/dashboard/report/ItemInformationCard';
import OccurrenceDetailsCard from '../components/dashboard/report/OccurrenceDetailsCard';
import PrivacyCard from '../components/dashboard/report/PrivacyCard';
import PhotoUploadCard from '../components/dashboard/report/PhotoUploadCard';
import ReportingRulesCard from '../components/dashboard/report/ReportingRulesCard';
import SubmitSection from '../components/dashboard/report/SubmitSection';
import RecentRecoveriesCard from '../components/dashboard/report/RecentRecoveriesCard';

const ReportLost = () => {
  const methods = useForm({
    defaultValues: {
      type: 'lost',
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
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-[#0F2D52] mb-4">Report a Lost Item</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Providing detailed information increases the chances of a community member 
            identifying and returning your item. Your report will be visible to our verified network.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column (Main Form) */}
          <div className="xl:col-span-8 flex flex-col">
            <ItemInformationCard />
            <OccurrenceDetailsCard />
            <div className="mt-auto">
              <PrivacyCard />
            </div>
          </div>
          
          {/* Right Column (Side Panels) */}
          <div className="xl:col-span-4 flex flex-col">
            <PhotoUploadCard />
            <ReportingRulesCard />
            <SubmitSection isSubmitting={isSubmitting} />
            <div className="mt-auto">
              <RecentRecoveriesCard />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ReportLost;
