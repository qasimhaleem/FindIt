import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Lock, Mail, KeyRound, AlertCircle } from 'lucide-react';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [serverError, setServerError] = React.useState('');
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_BASE;

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const response = await axios.post(`${API_BASE}/api/auth/login`, {
        email: data.email,
        password: data.password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (error) {
      setServerError(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Header */}
        <div className="text-center relative">
          <div className="mx-auto w-16 h-16 bg-[#0F2D52] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <Lock className="text-white w-8 h-8 transform -rotate-12 hover:rotate-0 transition-transform duration-300" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F2D52] mb-2 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Please sign in to your FindIt account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-5">
            
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

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-[#0F2D52]">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Forgot Password?
                </Link>
              </div>
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
          </div>

          {serverError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium mb-6 text-center">
              {serverError}
            </div>
          )}

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 font-medium cursor-pointer select-none">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#0F2D52] hover:bg-[#1a437a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2D52] transition-all active:scale-[0.98] shadow-md shadow-blue-900/20 disabled:opacity-70"
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600 font-medium">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all">
              Create an account
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
