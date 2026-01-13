import { useState, useEffect } from "react";
import { getCityById , getCountryById } from "../data/data";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTrip } from "../data/tripslice";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Wallet,
  Plane,
  Hotel,
  MapPin,
  Clock,
  Check,
  X,
  Info,
  Utensils,
  Camera,
  ShoppingBag,
  Heart,
  Home,
  TreePine,
  Train,
  Car,
  Bus,
  Castle,
  Mountain,
  Compass,
  Loader2,
  ChevronLeft,
  Briefcase
} from "lucide-react";

export default function CreateTrip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [country,setcountry] = useState(null)
  const [cityLoading, setCityLoading] = useState(true);

  useEffect(() => {
    const fetchCity = () => {
      setCityLoading(true);
      const cityData = getCityById(parseInt(id));
      const countryData = cityData ? getCountryById(cityData.countryId) : null;
    //   console.log(cityData,countryData)
      setCity(cityData);
      setcountry(countryData);
      setCityLoading(false);
    };

    fetchCity();
  }, [id]);

  const [tripData, setTripData] = useState({
    destination: "",
    countryId: 0,
    startDate: "",
    endDate: "",
    travelers: 2,
    budget: 2000,
    flightCost: 0,
    accommodationCost: 0,
    activityCost: 0,
    notes: "",
    travelStyle: "leisure",
    accommodationType: "hotel",
    transportation: "flight"
  });

  useEffect(() => {
    if (city) {
      setTripData(prev => ({
        ...prev,
        destination: city.name || "",
        countryId: city.countryId || 0
      }));
    }
  }, [city]);

  const travelStyles = [
    { id: "leisure", label: "Leisure", icon: Heart, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "adventure", label: "Adventure", icon: Compass, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { id: "business", label: "Business", icon: Briefcase, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "family", label: "Family", icon: Users, color: "bg-gradient-to-r from-orange-500 to-red-500" },
  ];

  const accommodationTypes = [
    { id: "hotel", label: "Hotel", icon: Hotel },
    { id: "airbnb", label: "Airbnb", icon: Home },
    { id: "hostel", label: "Hostel", icon: Users },
    { id: "resort", label: "Resort", icon: PalmTree },
  ];

  const transportOptions = [
    { id: "flight", label: "Flight", icon: Plane },
    { id: "train", label: "Train", icon: Train },
    { id: "car", label: "Car", icon: Car },
    { id: "bus", label: "Bus", icon: Bus },
  ];

  const activities = [
    { id: "sightseeing", label: "Sightseeing", icon: Camera },
    { id: "food", label: "Food Tours", icon: Utensils },
    { id: "shopping", label: "Shopping", icon: ShoppingBag },
    { id: "culture", label: "Cultural", icon: Castle },
    { id: "nature", label: "Nature", icon: TreePine },
    { id: "adventure", label: "Adventure", icon: Mountain },
  ];

  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData(prev => ({
      ...prev,
      [name]: name === "travelers" || name === "budget" || name === "flightCost" || 
              name === "accommodationCost" || name === "activityCost" 
              ? parseInt(value) || 0 
              : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const totalDays = Math.ceil(
      (new Date(tripData.endDate) - new Date(tripData.startDate)) / (1000 * 60 * 60 * 24)
    );
    const newTrip = {
      id: Date.now(),
      destination: tripData.destination,
      countryId: tripData.countryId,
      startDate: tripData.startDate,
      endDate: tripData.endDate,
      duration: totalDays,
      travelers: tripData.travelers,
      budget: tripData.budget,
      flightCost: tripData.flightCost,
      accommodationCost: tripData.accommodationCost,
      activityCost: tripData.activityCost,
      totalCost: tripData.flightCost + tripData.accommodationCost + tripData.activityCost,
      travelStyle: tripData.travelStyle,
      accommodationType: tripData.accommodationType,
      transportation: tripData.transportation,
      activities: selectedActivities,
      notes: tripData.notes,
      status: "planned",
      progress: 10,
      createdAt: new Date().toISOString(),
      image: city?.image || "/assets/images/default-city.jpg"
    };
    setTimeout(() => {
      dispatch(addTrip(newTrip));
      setLoading(false);
      navigate("/destinations");
    }, 1500);
  };

  const calculateDays = () => {
    if (!tripData.startDate || !tripData.endDate) return 0;
    const start = new Date(tripData.startDate);
    const end = new Date(tripData.endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateDailyBudget = () => {
    const days = calculateDays();
    if (days === 0) return 0;
    return Math.round(tripData.budget / days);
  };

  const totalCost = tripData.flightCost + tripData.accommodationCost + tripData.activityCost;
  const budgetRemaining = tripData.budget - totalCost;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (cityLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
          <p className="text-gray-600">Loading city information...</p>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City not found</h1>
          <p className="text-gray-600 mb-6">The city you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900">
          Plan Your Trip to {city.name}
        </h1>
        <div className="w-24"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - City Info */}
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
          {/* City Card */}
          <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg">
            <div className="relative h-[400px]">
              <img 
                src={city.image} 
                alt={city.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold bg-white/90">
                <img src={country.flag} className="w-6" />
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {city.name}
              </h2>
              <p className="mb-4 text-gray-600">
                {city.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Population</span>
                  <span className="font-medium text-gray-900">
                    {city.population?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Best Time to Visit</span>
                  <span className="font-medium text-gray-900">
                    {city.bestTimeToVisit || "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Avg Temperature</span>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">
                      Summer: {city.avgTemp?.summer || "N/A"}
                    </div>
                    <div className="text-xs text-gray-500">
                      Winter: {city.avgTemp?.winter || "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular For */}
              {city.popularFor && city.popularFor.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-bold mb-3 text-gray-900">Popular For</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.popularFor.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Budget Summary */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              Budget Summary
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Budget</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${tripData.budget.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Flights</span>
                  <span className="text-gray-900">
                    ${tripData.flightCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accommodation</span>
                  <span className="text-gray-900">
                    ${tripData.accommodationCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Activities</span>
                  <span className="text-gray-900">
                    ${tripData.activityCost.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Cost</span>
                  <span className={`text-xl font-bold ${
                    totalCost > tripData.budget ? 'text-red-500' : 'text-gray-900'
                  }`}>
                    ${totalCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Remaining</span>
                  <span className={`text-xl font-bold ${
                    budgetRemaining < 0 ? 'text-red-500' : budgetRemaining > 0 ? 'text-green-500' : 'text-gray-900'
                  }`}>
                    ${budgetRemaining.toLocaleString()}
                  </span>
                </div>
              </div>
              
              {calculateDays() > 0 && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-gray-600">Daily Budget</div>
                    <div className={`text-2xl font-bold mt-1 ${
                      calculateDailyBudget() < 50 ? 'text-red-500' : 
                      calculateDailyBudget() < 100 ? 'text-yellow-500' : 
                      'text-green-500'
                    }`}>
                      ${calculateDailyBudget()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Trip Details */}
            <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Trip Details
              </h2>

              {/* Dates and Travelers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Start Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="startDate"
                      value={tripData.startDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    End Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="endDate"
                      value={tripData.endDate}
                      onChange={handleInputChange}
                      required
                      min={tripData.startDate}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Travelers *
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="travelers"
                      value={tripData.travelers}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Duration Display */}
              {calculateDays() > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-blue-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-900">
                        Trip Duration: <strong>{calculateDays()} days</strong>
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {tripData.startDate} to {tripData.endDate}
                    </div>
                  </div>
                </div>
              )}

              {/* Budget */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Total Budget ($) *
                </label>
                <div className="relative">
                  <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    name="budget"
                    value={tripData.budget}
                    onChange={handleInputChange}
                    required
                    min="100"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Travel Style */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Travel Style
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {travelStyles.map(style => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setTripData(prev => ({ ...prev, travelStyle: style.id }))}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        tripData.travelStyle === style.id
                          ? `${style.color} border-transparent text-white`
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <style.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{style.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accommodation Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Accommodation Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {accommodationTypes.map(type => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setTripData(prev => ({ ...prev, accommodationType: type.id }))}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        tripData.accommodationType === type.id
                          ? 'bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <type.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Transportation */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Transportation
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {transportOptions.map(option => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setTripData(prev => ({ ...prev, transportation: option.id }))}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        tripData.transportation === option.id
                          ? 'bg-blue-50 border-blue-500 text-blue-600'
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <option.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Costs Breakdown */}
            <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Cost Breakdown
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Flight Cost ($)
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="flightCost"
                      value={tripData.flightCost}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Accommodation Cost ($)
                  </label>
                  <div className="relative">
                    <Hotel className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="accommodationCost"
                      value={tripData.accommodationCost}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Activity Cost ($)
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="activityCost"
                      value={tripData.activityCost}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Interests & Activities
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {activities.map(activity => (
                  <button
                    type="button"
                    key={activity.id}
                    onClick={() => {
                      setSelectedActivities(prev =>
                        prev.includes(activity.id)
                          ? prev.filter(id => id !== activity.id)
                          : [...prev, activity.id]
                      );
                    }}
                    className={`p-3 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                      selectedActivities.includes(activity.id)
                        ? 'bg-blue-50 border-blue-500 text-blue-600'
                        : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <activity.icon className="w-5 h-5" />
                    <span className="text-sm text-center">{activity.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                Additional Notes
              </h2>
              
              <textarea
                name="notes"
                value={tripData.notes}
                onChange={handleInputChange}
                placeholder="Add any special requirements, preferences, or notes about your trip..."
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-between pt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-8 py-3 rounded-xl font-semibold flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
              
              <div className="flex items-center gap-4">
                <div className={`text-sm ${budgetRemaining < 0 ? 'text-red-500' : 'text-gray-500'}`}>
                  {budgetRemaining < 0 && (
                    <div className="flex items-center gap-1">
                      <Info className="w-4 h-4" />
                      Over budget by ${Math.abs(budgetRemaining)}
                    </div>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading || !tripData.startDate || !tripData.endDate || tripData.budget <= 0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                    loading || !tripData.startDate || !tripData.endDate || tripData.budget <= 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Creating Trip...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      Create Trip
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Custom PalmTree icon component
const PalmTree = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M13.613 3.135A1 1 0 0114 4v1.764l2.168 1.251a1 1 0 01.5.866v2.254a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-2.254a1 1 0 01.5-.866L10 5.764V4a1 1 0 01.387-.865l1-1a1 1 0 011.226 0l1 1z"
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M7 21v-2a4 4 0 014-4h2a4 4 0 014 4v2"
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 13h6"
    />
  </svg>
);