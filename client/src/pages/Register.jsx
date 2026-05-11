import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { User, Mail, KeyRound, AlertCircle, Phone, Building2 } from 'lucide-react';

const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  department: yup.string().required('Department is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Register = () => {
  const [serverError, setServerError] = React.useState('');
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const response = await axios.post(`${API_BASE}/api/auth/register`, {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        department: data.department,
        password: data.password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      setServerError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Header */}
        <div className="text-center relative">
          <div className="mx-auto w-16 h-16 bg-[#0F2D52] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <User className="text-white w-8 h-8 transform -rotate-12 hover:rotate-0 transition-transform duration-300" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F2D52] mb-2 tracking-tight">
            Create an Account
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Join the FindIt community today
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <input
                  {...register('fullName')}
                  type="text"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.fullName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="name@company.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Phone Number
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <Phone size={18} />
                </div>
                <input
                  {...register('phone')}
                  type="tel"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.phone ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.phone.message}
                </p>
              )}
            </div>

             {/* Department Field */}
             <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Department
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <Building2 size={18} />
                </div>
                <input
                  {...register('department')}
                  type="text"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.department ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="Computer Science"
                />
              </div>
              {errors.department && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.department.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <KeyRound size={18} />
                </div>
                <input
                  {...register('password')}
                  type="password"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-[#0F2D52] mb-2">
                Confirm Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                  <KeyRound size={18} />
                </div>
                <input
                  {...register('confirmPassword')}
                  type="password"
                  className={`block w-full pl-11 pr-4 py-3.5 bg-[#F8FAFC] border ${errors.confirmPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-blue-500 focus:border-blue-500'} rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-medium">
                  <AlertCircle size={12} /> {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {serverError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium mb-6 text-center">
              {serverError}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0F2D52] hover:bg-[#1a437a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2D52] transition-all active:scale-[0.98] shadow-md shadow-blue-900/20 mt-8 disabled:opacity-70"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all">
              Sign in
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Register;
