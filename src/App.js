// Dans votre App.js ou index.js
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './auth/Login';
import Signup from './auth/Signup';
import CityDetailPage from './components/CityDetailPage';
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<><Header navcolor="text-white" navcolorhover="text-gray-100"/><DestinationsPage/><Footer /></>} />
        <Route path="/city/:id" element={<><CityDetailPage /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutPage /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Signup />} />
        <Route path="/reset-password" element={<Signup />} />
        <Route path="/code-verfication" element={<Signup />} />
      </Routes>
  );
}