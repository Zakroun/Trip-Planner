// pages/CityDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { 
  ArrowLeft,
  Heart,
  MapPin,
  Calendar,
  Users,
  Thermometer,
  Sun,
  Cloud,
  Star,
  Hotel,
  Utensils,
  Compass,
  Clock,
  DollarSign,
  Shield,
  Globe,
  Phone,
  Mail,
  Navigation,
  ChevronRight,
  Plane,
  Share2,
  Download,
  Printer,
  Menu,
  X
} from 'lucide-react';
import { 
  getCityById, 
  getCountryById, 
  getAttractionsByCityId, 
  getHotelsByCityId,
  getRestaurantsByCityId,
  getActivitiesByCityId 
} from '../data/data';

export default function CityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const city = getCityById(parseInt(id));
  const country = city ? getCountryById(city.countryId) : null;
  const attractions = city ? getAttractionsByCityId(city.id) : [];
  const hotels = city ? getHotelsByCityId(city.id) : [];
  const restaurants = city ? getRestaurantsByCityId(city.id) : [];
  const activities = city ? getActivitiesByCityId(city.id) : [];
  
  if (!city || !country) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <img src='/assets/images/worldicon.png' className="w-14"/>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">City Not Found</h2>
          <p className="text-gray-600 mb-8">
            The city you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate('/destinations')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Destinations
          </button>
        </div>
      </div>
    );
  }
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    console.log(`${city.name} ${isSaved ? 'removed from' : 'added to'} saved destinations`);
  };
  
  const handlePlanTrip = () => {
    console.log(`Planning trip to ${city.name}`);
    // Navigate to trip planner
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Discover ${city.name}`,
        text: `Check out ${city.name} - ${city.description}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const getTemperatureIcon = (temp) => {
    const avg = parseInt(temp.split('-')[0]);
    if (avg > 25) return <Sun className="w-5 h-5 text-amber-500" />;
    if (avg > 15) return <Cloud className="w-5 h-5 text-blue-500" />;
    return <Thermometer className="w-5 h-5 text-blue-400" />;
  };
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Globe className="w-5 h-5" /> },
    { id: 'attractions', label: 'Attractions', icon: <Compass className="w-5 h-5" />, count: attractions.length },
    { id: 'hotels', label: 'Hotels', icon: <Hotel className="w-5 h-5" />, count: hotels.length },
    { id: 'restaurants', label: 'Restaurants', icon: <Utensils className="w-5 h-5" />, count: restaurants.length },
    { id: 'activities', label: 'Activities', icon: <Navigation className="w-5 h-5" />, count: activities.length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/20">
      {/* Fixed Header with Title and Actions */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/destinations')}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                <span className="text-gray-700 font-medium hidden sm:block">Destinations</span>
              </button>
              
              <div className="hidden md:flex items-center gap-2">
                <img src={country.flag} className="w-6"/>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-gray-500">•</span>
                <div className="text-sm text-gray-500">{country.name}</div>
              </div>
            </div>
            
            {/* Center: Page Title */}
            <div className="flex-1 px-4 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
                {city.name}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block truncate">
                {city.description.split('.').shift()}.
              </p>
            </div>
            
            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
              </button>
              
              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                  title="Share"
                >
                  <Share2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </button>
                
                <button
                  onClick={() => console.log('Download guide')}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                  title="Download Guide"
                >
                  <Download className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </button>
                
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                  title="Print"
                >
                  <Printer className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                </button>
                
                <div className="h-6 w-px bg-gray-300 mx-1"></div>
                
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isSaved 
                      ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  <span className="hidden lg:inline font-medium">
                    {isSaved ? 'Saved' : 'Save'}
                  </span>
                </button>
                
                <button
                  onClick={handlePlanTrip}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm"
                >
                  <Plane className="w-5 h-5" />
                  <span className="font-medium">Plan Trip</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span>Share</span>
                </button>
                
                <button
                  onClick={() => console.log('Download guide')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 text-gray-600" />
                  <span>Download</span>
                </button>
                
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Printer className="w-5 h-5 text-gray-600" />
                  <span>Print</span>
                </button>
                
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isSaved ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Remove' : 'Save'}</span>
                </button>
                
                <button
                  onClick={handlePlanTrip}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg"
                >
                  <Plane className="w-5 h-5" />
                  <span>Plan Trip</span>
                </button>
              </div>
            </div>
          )}
          
          {/* Tabs Navigation */}
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className={`p-1 rounded ${
                    activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {tab.icon}
                  </div>
                  <span className="font-medium">{tab.label}</span>
                  {tab.count > 0 && (
                    <span className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                      activeTab === tab.id 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (with padding for fixed header) */}
      <div className="pt-32">
        {/* Hero Banner */}
        <div className="relative overflow-hidden">
          <div className={`relative h-[400px] bg-gradient-to-br ${city.color}`}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
              style={{ backgroundImage: `url('${city.image || '/assets/images/cities/default.jpg'}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            {/* Hero Content */}
            <div className="container mx-auto px-4 relative h-full flex items-end">
              <div className="mb-12 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <img src={country.flag} className="w-8"/>
                    <span className="font-medium">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="text-sm">Top Destination</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
                  {city.name}
                </h1>
                
                <p className="text-xl text-white/90 mb-6 max-w-3xl drop-shadow-lg">
                  {city.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-white/80" />
                    <div>
                      <div className="text-white/70 text-sm">Population</div>
                      <div className="text-white text-lg font-bold">{city.population.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-white/80" />
                    <div>
                      <div className="text-white/70 text-sm">Best Time</div>
                      <div className="text-white text-lg font-bold">{city.bestTimeToVisit}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {getTemperatureIcon(city.avgTemp.summer)}
                    <div>
                      <div className="text-white/70 text-sm">Temperature</div>
                      <div className="text-white text-lg font-bold">{city.avgTemp.summer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* About Section */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About {city.name}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {city.description}
                    </p>
                    
                    {/* Temperature Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-amber-100 rounded-lg">
                            <Sun className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Summer Temperature</div>
                            <div className="text-2xl font-bold text-gray-900">{city.avgTemp.summer}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Perfect for outdoor activities and sightseeing</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Thermometer className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Winter Temperature</div>
                            <div className="text-2xl font-bold text-gray-900">{city.avgTemp.winter}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Great for indoor cultural experiences</p>
                      </div>
                    </div>
                    
                    {/* Popular For */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">What {city.name} is Famous For</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {city.popularFor.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 group cursor-pointer hover:shadow-md"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Star className="w-4 h-4 text-blue-600 fill-current" />
                            </div>
                            <span className="font-medium text-blue-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Top Attractions Preview */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Top Attractions</h3>
                      <button
                        onClick={() => setActiveTab('attractions')}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View All
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {attractions.slice(0, 4).map((attraction) => (
                        <div 
                          key={attraction.id}
                          onClick={() => setActiveTab('attractions')}
                          className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-cyan-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{attraction.name}</h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-amber-500 fill-current" />
                              <span className="font-bold text-gray-700">{attraction.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{attraction.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {attraction.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {attraction.priceRange}
                              </div>
                            </div>
                            <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                              {attraction.type}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Facts */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h4>
                    
                    <div className="space-y-5">
                      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Country</div>
                            <div className="font-medium">{country.name}</div>
                          </div>
                        </div>
                        <img src={country.flag} className="w-10"/>
                      </div>
                      
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Language</div>
                          <div className="font-medium">{country.language}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-amber-50 rounded-lg">
                          <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Currency</div>
                          <div className="font-medium">{country.currency}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Clock className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Timezone</div>
                          <div className="font-medium">{country.timezone}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Shield className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Visa Requirements</div>
                          <div className="font-medium">{country.visaRequirements}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h5 className="font-bold text-gray-900 mb-3">Best Time to Visit</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">{city.bestTimeToVisit}</span>
                      </div>
                      <p className="text-sm text-gray-600">Recommended months: {country.bestTimeToVisit.join(', ')}</p>
                    </div>
                    
                    <button
                      onClick={handlePlanTrip}
                      className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    >
                      Plan Trip to {city.name}
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Attractions in {city.name}
                  </h2>
                  <p className="text-gray-600">
                    Discover {attractions.length} amazing places to visit in {city.name}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {attractions.map((attraction) => (
                    <div 
                      key={attraction.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {attraction.type}
                              </div>
                              <div className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                                {attraction.category}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900">{attraction.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {attraction.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{attraction.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                              <DollarSign className="w-4 h-4" />
                              <span className="text-sm">{attraction.priceRange}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Best time: {attraction.bestTimeToVisit}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {attraction.highlights.slice(0, 3).map((highlight, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Hotels Tab */}
            {activeTab === 'hotels' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Hotels in {city.name}
                  </h2>
                  <p className="text-gray-600">
                    Find the perfect accommodation for your stay in {city.name}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hotels.map((hotel) => (
                    <div 
                      key={hotel.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                                {hotel.type}
                              </span>
                              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {hotel.priceRange}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {hotel.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">{hotel.location}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-sm text-gray-500 mb-2">Amenities</p>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.slice(0, 4).map((amenity, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Hotel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Restaurants Tab */}
            {activeTab === 'restaurants' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Restaurants in {city.name}
                  </h2>
                  <p className="text-gray-600">
                    Discover amazing dining experiences in {city.name}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restaurants.map((restaurant) => (
                    <div 
                      key={restaurant.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                                {restaurant.cuisine}
                              </span>
                              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {restaurant.priceRange}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900">{restaurant.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {restaurant.description}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">{restaurant.location}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-sm text-gray-500 mb-2">Highlights</p>
                          <div className="flex flex-wrap gap-2">
                            {restaurant.highlights.slice(0, 3).map((highlight, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Restaurant
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Activities Tab */}
            {activeTab === 'activities' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Activities in {city.name}
                  </h2>
                  <p className="text-gray-600">
                    Exciting things to do and experience in {city.name}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activities.map((activity) => (
                    <div 
                      key={activity.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                                {activity.type}
                              </span>
                              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {activity.priceRange}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">
                          {activity.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">Best time: {activity.bestTime}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-sm text-gray-500 mb-2">Highlights</p>
                          <div className="flex flex-wrap gap-2">
                            {activity.highlights.slice(0, 3).map((highlight, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Activity
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};