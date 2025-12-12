import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/destinations', label: 'Destinations', icon: 'map-pin' },
    { path: '/itineraries', label: 'Itineraries', icon: 'route' },
    { path: '/about', label: 'About', icon: 'info' },
    { path: '/contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-md backdrop-blur-sm bg-white/95' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
             <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
              <Plane className={`w-5 h-5 ${
                isScrolled ? 'text-white' : 'text-blue-600'
              } transform -rotate-45 group-hover:rotate-0 transition-transform duration-300`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-900' 
                  : 'text-gray-600 drop-shadow-md'
              }`}>
                TripPlanner
              </h1>
              {/* <p className={`text-xs transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-500' 
                  : 'text-blue-300'
              }`}>
                Your Perfect Journey
              </p> */}
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-gray-600 hover:text-blue-500 drop-shadow-sm'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  isScrolled ? 'bg-blue-500' : 'bg-white'
                }`}></span>
              </Link>
            ))}
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 ml-4">
              <Link 
                to="/login"
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50' 
                    : 'text-blue-500 hover:text-blue-700 hover:bg-white/10'
                }`}
              >
                Log In
              </Link>
              <Link 
                to="/signup"
                className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md ${
                  isScrolled 
                    ? 'bg-gradient-to-r shadow-sm from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden h-10 w-10 flex items-center justify-center rounded-lg text-2xl focus:outline-none transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute left-0 right-0 mt-2 shadow-xl rounded-xl mx-4 overflow-hidden transition-all duration-300 ${
            isScrolled 
              ? 'bg-white border border-gray-200' 
              : 'bg-gradient-to-br from-blue-600/95 to-blue-700/95 backdrop-blur-md border border-white/20'
          }`}>
            <div className="flex flex-col p-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 font-medium flex items-center gap-3 ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isScrolled 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'bg-white/10 text-white'
                  }`}>
                    {item.label === 'Home' && <Plane className="w-4 h-4" />}
                    {item.label === 'Destinations' && <Plane className="w-4 h-4" />}
                    {item.label === 'Itineraries' && <Plane className="w-4 h-4" />}
                    {item.label === 'About' && <Plane className="w-4 h-4" />}
                    {item.label === 'Contact' && <Plane className="w-4 h-4" />}
                  </div>
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-3 mt-4 p-2 border-t border-white/10">
                <Link 
                  to="/login"
                  className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 text-center ${
                    isScrolled 
                      ? 'text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  to="/signup"
                  className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' 
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}