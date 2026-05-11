import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';
import PrivateRoute from './components/routing/PrivateRoute';

import Home from './pages/Home';
import Browse from './pages/Browse';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ReportLost from './pages/ReportLost';
import ReportFound from './pages/ReportFound';
import Profile from './pages/Profile';
import ComingSoon from './pages/ComingSoon';
import Login from './pages/Login';
import Register from './pages/Register';
import ItemDetail from './pages/ItemDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<About />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes with Dashboard Layout */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard/report-lost" element={<DashboardLayout><ReportLost /></DashboardLayout>} />
          <Route path="/dashboard/report-found" element={<DashboardLayout><ReportFound /></DashboardLayout>} />
          <Route path="/dashboard/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><ComingSoon /></DashboardLayout>} />
          <Route path="/dashboard/help" element={<DashboardLayout><ComingSoon /></DashboardLayout>} />
          
          {/* Fallback route for dashboard */}
          <Route path="/dashboard/*" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
