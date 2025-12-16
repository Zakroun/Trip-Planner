import {Routes, Route } from 'react-router-dom';
// components
import Header from './components/Header';
import Footer from './components/Footer';
// main pages
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import CityDetailPage from './components/CityDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// Auth
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import CodeVerification from './auth/CodeVerification';
import ResetPassword from './auth/ResetPassword';
import Signup from './auth/Signup';
import Dashboard from './dashboard/dashboard';
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<><Header navcolor="text-white" navcolorhover="text-gray-100"/><DestinationsPage/><Footer /></>} />
        <Route path="/city/:id" element={<><CityDetailPage /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<CodeVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Signup />} />
        <Route path="/reset-password" element={<Signup />} />
        <Route path="/code-verfication" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}