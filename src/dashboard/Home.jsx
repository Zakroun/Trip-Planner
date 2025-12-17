import { useState, useEffect } from "react";
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  TrendingUp, 
  ChevronRight,
  Plus,
  Star,
  Clock,
  Wallet,
  Award,
  Globe,
  Search,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTrip, setActiveTrip] = useState(0);
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

    const handleStorageChange = () => {
      checkDarkMode();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const stats = [
    { id: 1, label: "Total Trips", value: "24", icon: Plane, change: "+12%", color: "from-blue-500 to-cyan-500" },
    { id: 2, label: "Countries Visited", value: "12", icon: Globe, change: "+3", color: "from-purple-500 to-pink-500" },
    { id: 3, label: "Upcoming Trips", value: "5", icon: Calendar, change: "Next: 2 days", color: "from-green-500 to-emerald-500" },
    { id: 4, label: "Total Spent", value: "$8,450", icon: Wallet, change: "-5% budget", color: "from-orange-500 to-red-500" },
  ];

  const upcomingTrips = [
    { id: 1, destination: "Paris, France", date: "May 15-22, 2024", travelers: 2, budget: "$2,500", progress: 75, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
    { id: 2, destination: "Tokyo, Japan", date: "Jun 10-25, 2024", travelers: 3, budget: "$4,200", progress: 40, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
    { id: 3, destination: "Bali, Indonesia", date: "Aug 5-15, 2024", travelers: 4, budget: "$3,800", progress: 20, image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400" },
    { id: 4, destination: "New York, USA", date: "Dec 20-30, 2024", travelers: 2, budget: "$3,000", progress: 10, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400" },
  ];

  const recentActivities = [
    { id: 1, action: "Booked flight", detail: "Paris (CDG) - May 15", time: "2 hours ago", icon: Plane, color: "text-blue-500" },
    { id: 2, action: "Added hotel", detail: "Hilton Paris Opera", time: "1 day ago", icon: MapPin, color: "text-green-500" },
    { id: 3, action: "Updated budget", detail: "+$500 to Paris trip", time: "2 days ago", icon: Wallet, color: "text-orange-500" },
    { id: 4, action: "Shared trip", detail: "Tokyo trip with Sarah", time: "3 days ago", icon: Users, color: "text-purple-500" },
  ];

  const quickActions = [
    { id: 1, label: "Plan New Trip", icon: Plus, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { id: 2, label: "Search Flights", icon: Search, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: 3, label: "Book Hotel", icon: MapPin, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { id: 4, label: "Check Calendar", icon: Calendar, color: "bg-gradient-to-r from-orange-500 to-red-500" },
  ];

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
      {/* Welcome Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Welcome back, Traveler! ✈️
          </h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your next adventure awaits. Here's what's happening with your trips.
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`rounded-2xl p-6 ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-white hover:bg-gray-50'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </p>
                <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <p className={`text-sm mt-2 ${stat.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </p>
              </div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Trips */}
        <motion.div 
          variants={itemVariants}
          className={`lg:col-span-2 rounded-2xl p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Upcoming Trips
            </h2>
            <button className={`flex items-center gap-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveTrip(trip.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTrip === trip.id
                    ? isDarkMode 
                      ? 'bg-gray-700 ring-2 ring-blue-500'
                      : 'bg-blue-50 ring-2 ring-blue-500'
                    : isDarkMode
                    ? 'bg-gray-900 hover:bg-gray-700'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={trip.image} 
                      alt={trip.destination}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {trip.destination}
                      </h3>
                      <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {trip.budget}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {trip.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {trip.travelers} travelers
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Planning progress
                        </span>
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {trip.progress}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${trip.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${stats[0].color}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <motion.div 
            variants={itemVariants}
            className={`rounded-2xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Activity
              </h2>
              <Filter className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {activity.action}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {activity.detail}
                    </p>
                  </div>
                  <div className="text-right">
                    <Clock className={`w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mb-1`} />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {activity.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl p-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Travel Master</h3>
                <p className="text-sm opacity-90">Level 5 Explorer</p>
              </div>
            </div>
            <p className="text-sm mb-4">You've visited 12 countries! Keep exploring to unlock new badges.</p>
            <div className={`h-2 rounded-full bg-white/30`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1.5 }}
                className="h-full rounded-full bg-white"
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs">Level 5</span>
              <span className="text-xs">65% to Level 6</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Destination */}
      <motion.div
        variants={itemVariants}
        className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Destination
              </h2>
              <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your most popular trip destination
              </p>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className={`ml-2 font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>4.8</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Santorini, Greece
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Known for its stunning sunsets, white-washed buildings, and crystal-clear waters. 
                Perfect for romantic getaways and photography enthusiasts.
              </p>
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-500">Best Time</div>
                  <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>May - Oct</div>
                </div>
                <div className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-500">Avg. Cost</div>
                  <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>$3,200</div>
                </div>
                <div className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-sm text-gray-500">Popularity</div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="font-semibold text-green-500">+24%</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1}}
              transition={{ type: "spring", stiffness: 300 }}
              className="hidden lg:block w-64 h-64 rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400" 
                alt="Santorini"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}