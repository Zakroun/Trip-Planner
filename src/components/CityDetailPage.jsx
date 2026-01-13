// pages/CityDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  Navigation,
  ChevronRight,
  Plane,
  Share2,
  Download,
  Printer,
  Menu,
  X,
  Phone,
  Wifi,
  Car,
  Coffee,
  ShoppingBag,
  Camera,
  Music,
  Mountain,
  Castle,
} from "lucide-react";
import { addFavorite, removeFavorite } from "../data/tripslice";
import { FaLandmark } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { PiParkBold } from "react-icons/pi";

import { useDispatch, useSelector } from "react-redux";
import {
  getCityById,
  getCountryById,
  getAttractionsByCityId,
  getHotelsByCityId,
  getRestaurantsByCityId,
  getActivitiesByCityId,
} from "../data/data";
export default function CityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.tripplanner.favorites || []);
  const [activeTab, setActiveTab] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const contentRef = useRef(null);
  
  const city = getCityById(parseInt(id));
  const country = city ? getCountryById(city.countryId) : null;
  const attractions = city ? getAttractionsByCityId(city.id) : [];
  const hotels = city ? getHotelsByCityId(city.id) : [];
  const restaurants = city ? getRestaurantsByCityId(city.id) : [];
  const activities = city ? getActivitiesByCityId(city.id) : [];

  const isSaved = favorites.some(fav => fav.id === city?.id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

  if (!city || !country) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md p-8">
          <img src="/assets/images/worldicon.png" alt="World Icon" className="w-14 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            City Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The city you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/destinations")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore Destinations
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeFavorite(city.id));
    } else {
      dispatch(addFavorite(city));
    }
  };

  const handlePlanTrip = () => {
    navigate(`/newtrip/${city.id}`);
  };

  const handleShare = async (platform = null) => {
    const shareData = {
      title: `Discover ${city.name}, ${country.name}`,
      text: `Check out ${city.name} - ${city.description.substring(0, 100)}...`,
      url: window.location.href,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
        setShowShareOptions(false);
        return;
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${shareData.title} - ${window.location.href}`)}`, '_blank');
      setShowShareOptions(false);
      return;
    }

    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
      setShowShareOptions(false);
      return;
    }

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareData.title}&url=${window.location.href}`)}`, '_blank');
      setShowShareOptions(false);
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled:', err);
      }
    } else {
      setShowShareOptions(true);
    }
  };
  const getTemperatureIcon = (temp) => {
    const avg = parseInt(temp.split("-")[0]);
    if (avg > 25) return <Sun className="w-6 h-6 text-amber-500" />;
    if (avg > 15) return <Cloud className="w-6 h-6 text-blue-400" />;
    return <Thermometer className="w-6 h-6 text-blue-300" />;
  };

  const getActivityIcon = (type) => {
    const icons = {
      'Cultural': <FaLandmark className="w-5 h-5" />,
      'Adventure': <GiHiking className="w-5 h-5" />,
      'Nature': <Mountain className="w-5 h-5" />,
      'Beach': <FaUmbrellaBeach  className="w-5 h-5" />,
      'Historical': <Castle className="w-5 h-5" />,
      'Shopping': <ShoppingBag className="w-5 h-5" />,
      'Food': <Coffee className="w-5 h-5" />,
      'Nightlife': <Music className="w-5 h-5" />,
      'Sightseeing': <Camera className="w-5 h-5" />,
      'Park': <PiParkBold className="w-5 h-5" />,
    };
    return icons[type] || <Navigation className="w-5 h-5" />;
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <Globe className="w-5 h-5" /> },
    {
      id: "attractions",
      label: "Attractions",
      icon: <Compass className="w-5 h-5" />,
      count: attractions.length,
    },
    {
      id: "hotels",
      label: "Hotels",
      icon: <Hotel className="w-5 h-5" />,
      count: hotels.length,
    },
    {
      id: "restaurants",
      label: "Restaurants",
      icon: <Utensils className="w-5 h-5" />,
      count: restaurants.length,
    },
    {
      id: "activities",
      label: "Activities",
      icon: <Navigation className="w-5 h-5" />,
      count: activities.length,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/20">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Back Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/destinations")}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                <span className="text-gray-700 font-medium hidden sm:block">
                  Destinations
                </span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                <img src={country.flag} alt={`${country.name} flag`} className="w-6 h-4 object-cover rounded" />
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm text-gray-500">{country.name}</span>
              </div>
            </div>

            {/* Center: Page Title */}
            <div className="flex-1 px-4 text-center">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 truncate">
                {city.name}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block truncate">
                {city.description.split(".")[0]}.
              </p>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center gap-2">
                {/* Share Button with Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => handleShare()}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors group"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                  
                  {showShareOptions && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Share2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">Copy Link</span>
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                          <span className="text-green-600 font-bold">WA</span>
                        </div>
                        <span className="text-gray-700 font-medium">Share on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-bold">f</span>
                        </div>
                        <span className="text-gray-700 font-medium">Share on Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-400 font-bold">𝕏</span>
                        </div>
                        <span className="text-gray-700 font-medium">Share on Twitter</span>
                      </button>
                    </div>
                  )}
                </div>
                <div className="h-6 w-px bg-gray-300 mx-1"></div>

                {/* Save Button */}
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isSaved
                      ? "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
                      : "hover:bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isSaved ? "fill-red-500" : ""}`}
                  />
                  <span className="hidden lg:inline font-medium">
                    {isSaved ? "Saved" : "Save"}
                  </span>
                </button>

                {/* Plan Trip Button */}
                <button
                  onClick={handlePlanTrip}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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
              <div className="flex flex-wrap gap-2 justify-center px-4">
                <button
                  onClick={() => handleShare()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex-1 min-w-[120px] justify-center"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                  <span>Share</span>
                </button>

                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg flex-1 min-w-[120px] justify-center ${
                    isSaved ? "bg-red-50 text-red-600" : "hover:bg-gray-100"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isSaved ? "fill-red-500" : ""}`}
                  />
                  <span>{isSaved ? "Remove" : "Save"}</span>
                </button>

                <button
                  onClick={handlePlanTrip}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg flex-1 min-w-[120px] justify-center"
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
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border-b-2 whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600 bg-blue-50/50"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`p-1 rounded ${
                      activeTab === tab.id ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    {tab.label}
                  </span>
                  {tab.count > 0 && (
                    <span
                      className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32" ref={contentRef}>
        {/* Hero Banner */}
        <div className="relative overflow-hidden">
          <div className={`relative h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br ${city.color}`}>
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${
                  city.image || "/assets/images/cities/default.jpg"
                }')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Hero Content */}
            <div className="container mx-auto px-4 relative h-full flex items-end">
              <div className="mb-8 md:mb-12 text-white">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                    <img src={country.flag} alt={`${country.name} flag`} className="w-6 h-4 object-cover rounded" />
                    <span className="font-medium text-sm md:text-base">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="text-sm font-medium">Top Destination</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 drop-shadow-2xl">
                  {city.name}
                </h1>

                <p className="text-lg sm:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl drop-shadow-lg line-clamp-2 md:line-clamp-3">
                  {city.description}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white/90" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs md:text-sm">Population</div>
                      <div className="text-white text-lg md:text-xl font-bold">
                        {city.population.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white/90" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs md:text-sm">Best Time</div>
                      <div className="text-white text-lg md:text-xl font-bold">
                        {city.bestTimeToVisit}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {getTemperatureIcon(city.avgTemp.summer)}
                    </div>
                    <div>
                      <div className="text-white/70 text-xs md:text-sm">Temperature</div>
                      <div className="text-white text-lg md:text-xl font-bold">
                        {city.avgTemp.summer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  {/* About Section */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                      About {city.name}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                      {city.description}
                    </p>

                    {/* Temperature Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 md:p-6 rounded-xl border border-amber-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-amber-100 rounded-lg">
                            <Sun className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-500">
                              Summer Temperature
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-gray-900">
                              {city.avgTemp.summer}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">
                          Perfect for outdoor activities and sightseeing
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 md:p-6 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Thermometer className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-500">
                              Winter Temperature
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-gray-900">
                              {city.avgTemp.winter}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600">
                          Great for indoor cultural experiences
                        </p>
                      </div>
                    </div>

                    {/* Popular For */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                        What {city.name} is Famous For
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {city.popularFor.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 md:p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 group cursor-pointer hover:shadow-md"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Star className="w-4 h-4 text-blue-600 fill-current" />
                            </div>
                            <span className="font-medium text-blue-800 text-sm md:text-base">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Top Attractions Preview */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Top Attractions
                      </h3>
                      <button
                        onClick={() => setActiveTab("attractions")}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base"
                      >
                        View All
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {attractions.slice(0, 4).map((attraction) => (
                        <div
                          key={attraction.id}
                          onClick={() => setActiveTab("attractions")}
                          className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-cyan-50 rounded-xl p-4 md:p-5 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between mb-2 md:mb-3">
                            <h4 className="font-bold text-gray-900 group-hover:text-blue-600 text-base md:text-lg">
                              {attraction.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-amber-500 fill-current" />
                              <span className="font-bold text-gray-700 text-sm md:text-base">
                                {attraction.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                            {attraction.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                {attraction.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
                                {attraction.priceRange}
                              </div>
                            </div>
                            <div className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                              {attraction.type}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4 md:space-y-6">
                  {/* Quick Facts */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 md:mb-6">
                      Quick Facts
                    </h4>

                    <div className="space-y-4 md:space-y-5">
                      <div className="flex items-center justify-between pb-3 md:pb-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-500">Country</div>
                            <div className="font-medium text-sm md:text-base">{country.name}</div>
                          </div>
                        </div>
                        <img src={country.flag} alt={`${country.name} flag`} className="w-8 md:w-10 h-5 md:h-6 object-cover rounded" />
                      </div>

                      <div className="flex items-center gap-3 pb-3 md:pb-4 border-b border-gray-100">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <svg
                            className="w-5 h-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-500">Language</div>
                          <div className="font-medium text-sm md:text-base">{country.language}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pb-3 md:pb-4 border-b border-gray-100">
                        <div className="p-2 bg-amber-50 rounded-lg">
                          <svg
                            className="w-5 h-5 text-amber-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-500">Currency</div>
                          <div className="font-medium text-sm md:text-base">{country.currency}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pb-3 md:pb-4 border-b border-gray-100">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Clock className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-500">Timezone</div>
                          <div className="font-medium text-sm md:text-base">{country.timezone}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 rounded-lg">
                          <Shield className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <div className="text-xs md:text-sm text-gray-500">
                            Visa Requirements
                          </div>
                          <div className="font-medium text-sm md:text-base">
                            {country.visaRequirements}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                      <h5 className="font-bold text-gray-900 mb-2 md:mb-3">
                        Best Time to Visit
                      </h5>
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="font-medium text-sm md:text-base">
                          {city.bestTimeToVisit}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        Recommended months: {country.bestTimeToVisit?.join(", ") || "Year-round"}
                      </p>
                    </div>

                    <button
                      onClick={handlePlanTrip}
                      className="w-full mt-6 md:mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    >
                      Plan Trip to {city.name}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === "attractions" && (
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    Attractions in {city.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Discover {attractions.length} amazing places to visit in {city.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {attractions.map((attraction) => (
                    <div
                      key={attraction.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                              {attraction.name}
                            </h3>
                            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                              <div className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {attraction.type}
                              </div>
                              <div className="px-2 py-0.5 md:px-3 md:py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                                {attraction.category}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900 text-sm md:text-base">
                              {attraction.rating}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                          {attraction.description}
                        </p>

                        <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="text-xs md:text-sm">
                                {attraction.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <DollarSign className="w-3 h-3 md:w-4 md:h-4" />
                              <span className="text-xs md:text-sm">
                                {attraction.priceRange}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 text-gray-500">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm">
                              Best time: {attraction.bestTimeToVisit}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                          {attraction.highlights
                            .slice(0, 3)
                            .map((highlight, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-2 md:py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hotels Tab */}
            {activeTab === "hotels" && (
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    Hotels in {city.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Find the perfect accommodation for your stay in {city.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {hotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                              {hotel.name}
                            </h3>
                            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                                {hotel.type}
                              </span>
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {hotel.priceRange}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900 text-sm md:text-base">
                              {hotel.rating}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                          {hotel.description}
                        </p>

                        <div className="mb-3 md:mb-4">
                          <div className="flex items-center gap-1 md:gap-2 text-gray-500 mb-1 md:mb-2">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm font-medium">
                              {hotel.location}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4 md:mb-6">
                          <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
                            Amenities
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {hotel.amenities
                              .slice(0, 4)
                              .map((amenity, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-50 text-gray-700 text-xs rounded-full flex items-center gap-1"
                                >
                                  {amenity === "Free WiFi" && <Wifi className="w-3 h-3" />}
                                  {amenity === "Parking" && <Car className="w-3 h-3" />}
                                  {amenity === "Breakfast" && <Coffee className="w-3 h-3" />}
                                  {amenity === "Spa" && <span className="text-xs">💆</span>}
                                  {!["Free WiFi", "Parking", "Breakfast", "Spa"].includes(amenity) && amenity}
                                </span>
                              ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-2 md:py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Hotel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Restaurants Tab */}
            {activeTab === "restaurants" && (
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    Restaurants in {city.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Discover amazing dining experiences in {city.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {restaurants.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                              {restaurant.name}
                            </h3>
                            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                                {restaurant.cuisine}
                              </span>
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {restaurant.priceRange}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-500 fill-current" />
                            <span className="font-bold text-gray-900 text-sm md:text-base">
                              {restaurant.rating}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                          {restaurant.description}
                        </p>

                        <div className="mb-3 md:mb-4">
                          <div className="flex items-center gap-1 md:gap-2 text-gray-500 mb-1 md:mb-2">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm font-medium">
                              {restaurant.location}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4 md:mb-6">
                          <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
                            Highlights
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {restaurant.highlights
                              .slice(0, 3)
                              .map((highlight, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                                >
                                  {highlight}
                                </span>
                              ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-2 md:py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
                          View Restaurant
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Activities Tab */}
            {activeTab === "activities" && (
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    Activities in {city.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Exciting things to do and experience in {city.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                              {activity.name}
                            </h3>
                            <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full flex items-center gap-1">
                                {getActivityIcon(activity.type)}
                                {activity.type}
                              </span>
                              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {activity.priceRange}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">
                          {activity.description}
                        </p>

                        <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                          <div className="flex items-center gap-1 md:gap-2 text-gray-500">
                            <Clock className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm">{activity.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 text-gray-500">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-sm">
                              Best time: {activity.bestTime}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4 md:mb-6">
                          <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">
                            Highlights
                          </p>
                          <div className="flex flex-wrap gap-1 md:gap-2">
                            {activity.highlights
                              .slice(0, 3)
                              .map((highlight, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 md:px-3 md:py-1 bg-gray-50 text-gray-700 text-xs rounded-full"
                                >
                                  {highlight}
                                </span>
                              ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 py-2 md:py-3 rounded-lg font-medium hover:from-blue-100 hover:to-cyan-100 transition-all duration-300">
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

      {/* Share Options Modal for Mobile */}
      {showShareOptions && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center md:hidden"
          onClick={() => setShowShareOptions(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="relative bg-white rounded-t-3xl w-full max-w-lg p-6 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Share Destination
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleShare('copy')}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                  <Share2 className="w-6 h-6 text-blue-600" />
                </div>
                <span className="font-medium text-gray-700">Copy Link</span>
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-2">
                  <span className="text-green-600 font-bold text-lg">WA</span>
                </div>
                <span className="font-medium text-gray-700">WhatsApp</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                  <span className="text-blue-600 font-bold text-lg">f</span>
                </div>
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2">
                  <span className="text-blue-400 font-bold text-lg">𝕏</span>
                </div>
                <span className="font-medium text-gray-700">Twitter</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareOptions(false)}
              className="w-full mt-6 py-3 text-gray-500 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}