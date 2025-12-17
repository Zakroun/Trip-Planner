import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  MapPin,
  Calendar,
  Users,
  Wallet,
  Plane,
  Hotel,
  Tag,
  Globe,
  X,
  Edit2,
  Trash2,
  Eye,
  ChevronRight,
  Search,
  Download,
  Share2,
  Loader2,
  Heart
} from "lucide-react";

export default function Mytrips() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTrip, setActiveTrip] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const checkDarkMode = () => {
      const savedTheme = localStorage.getItem('darkMode');
      const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
      setIsDarkMode(darkMode);
    };

    checkDarkMode();

    const interval = setInterval(() => {
      checkDarkMode();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const [newTrip, setNewTrip] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: "2",
    type: "vacation",
    description: "",
    flights: [],
    accommodations: [],
    activities: []
  });

  const tripTypes = [
    { id: "vacation", label: "Vacation", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: "business", label: "Business", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "adventure", label: "Adventure", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { id: "romantic", label: "Romantic", color: "bg-gradient-to-r from-red-500 to-pink-500" },
    { id: "family", label: "Family", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
  ];

  const [trips, setTrips] = useState([
    {
      id: 1,
      destination: "Paris, France",
      country: "France",
      startDate: "2024-05-15",
      endDate: "2024-05-22",
      budget: 2500,
      travelers: 2,
      type: "romantic",
      status: "upcoming",
      progress: 75,
      description: "Romantic getaway to the city of love",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
      flights: [
        { id: 1, airline: "Air France", number: "AF123", from: "JFK", to: "CDG", date: "2024-05-15", time: "08:00" }
      ],
      accommodations: [
        { id: 1, name: "Hotel Paris Opera", checkIn: "2024-05-15", checkOut: "2024-05-22", price: 1200 }
      ],
      activities: [
        { id: 1, name: "Eiffel Tower Tour", date: "2024-05-16", price: 50 },
        { id: 2, name: "Louvre Museum", date: "2024-05-17", price: 30 }
      ]
    },
    {
      id: 2,
      destination: "Tokyo, Japan",
      country: "Japan",
      startDate: "2024-06-10",
      endDate: "2024-06-25",
      budget: 4200,
      travelers: 3,
      type: "adventure",
      status: "upcoming",
      progress: 40,
      description: "Cultural exploration and food adventure",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
      flights: [
        { id: 1, airline: "Japan Airlines", number: "JL001", from: "LAX", to: "HND", date: "2024-06-10", time: "14:30" }
      ],
      accommodations: [
        { id: 1, name: "Shinjuku Hotel", checkIn: "2024-06-10", checkOut: "2024-06-25", price: 1800 }
      ],
      activities: []
    },
    {
      id: 3,
      destination: "Bali, Indonesia",
      country: "Indonesia",
      startDate: "2024-08-05",
      endDate: "2024-08-15",
      budget: 3800,
      travelers: 4,
      type: "vacation",
      status: "upcoming",
      progress: 20,
      description: "Beach relaxation and surfing trip",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400",
      flights: [],
      accommodations: [],
      activities: []
    },
    {
      id: 4,
      destination: "New York, USA",
      country: "USA",
      startDate: "2023-12-20",
      endDate: "2023-12-30",
      budget: 3000,
      travelers: 2,
      type: "business",
      status: "completed",
      progress: 100,
      description: "Christmas in New York City",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
      flights: [
        { id: 1, airline: "Delta", number: "DL456", from: "SFO", to: "JFK", date: "2023-12-20", time: "10:15" }
      ],
      accommodations: [
        { id: 1, name: "Times Square Hotel", checkIn: "2023-12-20", checkOut: "2023-12-30", price: 1500 }
      ],
      activities: [
        { id: 1, name: "Broadway Show", date: "2023-12-22", price: 120 },
        { id: 2, name: "Statue of Liberty", date: "2023-12-23", price: 25 }
      ]
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newTripObj = {
        id: trips.length + 1,
        destination: newTrip.destination,
        country: newTrip.destination.split(",")[1]?.trim() || "Unknown",
        startDate: newTrip.startDate,
        endDate: newTrip.endDate,
        budget: parseFloat(newTrip.budget),
        travelers: parseInt(newTrip.travelers),
        type: newTrip.type,
        status: "upcoming",
        progress: 10,
        description: newTrip.description,
        image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400`,
        flights: [],
        accommodations: [],
        activities: []
      };

      setTrips(prev => [newTripObj, ...prev]);
      setNewTrip({
        destination: "",
        startDate: "",
        endDate: "",
        budget: "",
        travelers: "2",
        type: "vacation",
        description: "",
        flights: [],
        accommodations: [],
        activities: []
      });
      setShowForm(false);
      setLoading(false);
    }, 1500);
  };

  const deleteTrip = (id) => {
    setTrips(prev => prev.filter(trip => trip.id !== id));
  };

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || trip.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My Trips 🗺️
          </h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Plan, manage, and track all your upcoming and past adventures
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(!showForm)}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/20'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            <Plus className="w-5 h-5" />
            <span>Plan New Trip</span>
          </motion.button>
        </div>
      </div>

      {/* Search and Filter */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search trips by destination or description..."
            className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } border transition-all duration-300`}
          />
        </div>
        <div className="flex gap-2">
          {["all", "upcoming", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filterStatus === status
                  ? isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Create Trip Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Plan a New Trip
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Destination *
                  </label>
                  <div className="relative">
                    <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      name="destination"
                      value={newTrip.destination}
                      onChange={handleInputChange}
                      placeholder="e.g., Paris, France"
                      required
                      className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } border transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Date and Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Start Date *
                    </label>
                    <div className="relative">
                      <Calendar className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="date"
                        name="startDate"
                        value={newTrip.startDate}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        } border transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      End Date *
                    </label>
                    <div className="relative">
                      <Calendar className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="date"
                        name="endDate"
                        value={newTrip.endDate}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        } border transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Travelers *
                    </label>
                    <div className="relative">
                      <Users className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <select
                        name="travelers"
                        value={newTrip.travelers}
                        onChange={handleInputChange}
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        } border transition-all duration-300 appearance-none`}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget and Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Budget ($) *
                    </label>
                    <div className="relative">
                      <Wallet className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="number"
                        name="budget"
                        value={newTrip.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., 2500"
                        required
                        min="0"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        } border transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Trip Type *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {tripTypes.map(type => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setNewTrip(prev => ({ ...prev, type: type.id }))}
                          className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                            newTrip.type === type.id
                              ? `${type.color} text-white`
                              : isDarkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={newTrip.description}
                    onChange={handleInputChange}
                    placeholder="Describe your trip plans, activities, or special requirements..."
                    rows="3"
                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } border transition-all duration-300`}
                  />
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/20'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        Create Trip
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trip Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Trips</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trips.length}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Upcoming</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {trips.filter(t => t.status === 'upcoming').length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Spent</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                ${trips.reduce((sum, trip) => sum + trip.budget, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Avg. Budget</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                ${Math.round(trips.reduce((sum, trip) => sum + trip.budget, 0) / trips.length).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Tag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trips Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTrips.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`rounded-2xl overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
          >
            <div className="relative h-48">
              <img 
                src={trip.image} 
                alt={trip.destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  trip.status === 'completed' 
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white'
                }`}>
                  {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className={`text-xl font-bold text-white`}>{trip.destination}</h3>
                <p className={`text-sm text-gray-200`}>{trip.description}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    tripTypes.find(t => t.id === trip.type)?.color || 'bg-gray-500'
                  }`}>
                    {trip.type === 'business' && <Users className="w-4 h-4 text-white" />}
                    {trip.type === 'adventure' && <MapPin className="w-4 h-4 text-white" />}
                    {trip.type === 'romantic' && <Heart className="w-4 h-4 text-white" />}
                    {trip.type === 'family' && <Users className="w-4 h-4 text-white" />}
                    {trip.type === 'vacation' && <Plane className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tripTypes.find(t => t.id === trip.type)?.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActiveTrip(activeTrip === trip.id ? null : trip.id)}
                    className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    {activeTrip === trip.id ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => deleteTrip(trip.id)}
                    className={`p-2 rounded-lg text-red-500 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Duration</p>
                  <p className={`font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {calculateDays(trip.startDate, trip.endDate)} days
                  </p>
                </div>
                <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Travelers</p>
                  <p className={`font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {trip.travelers} {trip.travelers === 1 ? 'person' : 'people'}
                  </p>
                </div>
                <div className={`text-center p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Budget</p>
                  <p className={`font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${trip.budget.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Planning progress
                  </span>
                  <span className={`text-sm font-medium ${trip.progress === 100 ? 'text-green-500' : 'text-blue-500'}`}>
                    {trip.progress}%
                  </span>
                </div>
                <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trip.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full rounded-full ${
                      trip.progress === 100 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                    }`}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                  </span>
                </div>
                <button className={`flex items-center gap-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeTrip === trip.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Flights</p>
                          <div className="flex items-center gap-2">
                            <Plane className="w-4 h-4 text-blue-500" />
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {trip.flights.length} booked
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hotels</p>
                          <div className="flex items-center gap-2">
                            <Hotel className="w-4 h-4 text-green-500" />
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {trip.accommodations.length} booked
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className={`text-xs font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Activities</p>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {trip.activities.length} planned
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className={`flex-1 py-2 rounded-lg font-medium flex items-center justify-center gap-2 ${
                          isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}>
                          <Download className="w-4 h-4" />
                          Export
                        </button>
                        <button className={`flex-1 py-2 rounded-lg font-medium flex items-center justify-center gap-2 ${
                          isDarkMode 
                            ? 'bg-blue-600 hover:bg-blue-500 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}>
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredTrips.length === 0 && (
        <motion.div
          variants={itemVariants}
          className={`rounded-2xl p-12 text-center ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Plane className="w-10 h-10 text-white transform -rotate-45" />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            No trips found
          </h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {searchTerm || filterStatus !== "all" 
              ? "Try changing your search or filter criteria"
              : "Start planning your first adventure!"
            }
          </p>
          <button
            onClick={() => setShowForm(true)}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/20'
                : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            <Plus className="w-5 h-5" />
            Plan Your First Trip
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}