import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Check,
  X,
  Filter,
  Calendar,
  Plane,
  Hotel,
  Wallet,
  AlertCircle,
  Info,
  CheckCircle,
  Settings,
  Trash2,
  BellOff,
  BellRing,
  Loader2,
  Eye,
  EyeOff,
  Share2,
  Download,
  ChevronRight,
  Search
} from "lucide-react";

export default function Notifications() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

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

  const [notificationSettings, setNotificationSettings] = useState({
    tripReminders: true,
    flightUpdates: true,
    hotelAlerts: true,
    priceChanges: true,
    newFeatures: false,
    marketing: false,
    weeklyDigest: true,
    emergencyAlerts: true
  });

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Flight Schedule Changed",
      message: "Your flight AF123 from JFK to CDG has been rescheduled to 10:30 AM",
      type: "flight",
      priority: "high",
      read: false,
      time: "10 minutes ago",
      date: "2024-03-20",
      icon: Plane,
      color: "bg-blue-500",
      action: "Review Changes"
    },
    {
      id: 2,
      title: "Hotel Check-in Reminder",
      message: "Check-in at Hilton Paris Opera starts tomorrow at 3:00 PM",
      type: "hotel",
      priority: "medium",
      read: false,
      time: "1 hour ago",
      date: "2024-03-20",
      icon: Hotel,
      color: "bg-purple-500",
      action: "View Booking"
    },
    {
      id: 3,
      title: "Trip Departure Tomorrow",
      message: "Your Paris trip starts tomorrow! Don't forget to pack your essentials",
      type: "trip",
      priority: "high",
      read: false,
      time: "2 hours ago",
      date: "2024-03-20",
      icon: Calendar,
      color: "bg-green-500",
      action: "View Itinerary"
    },
    {
      id: 4,
      title: "Price Drop Alert",
      message: "Flight prices to Tokyo have dropped by 15% for your dates",
      type: "price",
      priority: "medium",
      read: true,
      time: "1 day ago",
      date: "2024-03-19",
      icon: Wallet,
      color: "bg-orange-500",
      action: "Check Prices"
    }
  ]);

  const filterOptions = [
    { id: "all", label: "All", count: notifications.length },
    { id: "unread", label: "Unread", count: notifications.filter(n => !n.read).length },
    { id: "high", label: "High Priority", count: notifications.filter(n => n.priority === "high").length },
    { id: "flight", label: "Flights", count: notifications.filter(n => n.type === "flight").length },
    { id: "hotel", label: "Hotels", count: notifications.filter(n => n.type === "hotel").length },
    { id: "trip", label: "Trips", count: notifications.filter(n => n.type === "trip").length },
  ];

  const handleMarkAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setLoading(true);
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(notif => ({ ...notif, read: true }))
      );
      setLoading(false);
    }, 500);
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const handleClearAll = () => {
    setLoading(true);
    setTimeout(() => {
      setNotifications([]);
      setLoading(false);
    }, 500);
  };

  const handleSettingChange = (key) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const formatDate = (dateStr) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case "high": return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "medium": return <Info className="w-4 h-4 text-yellow-500" />;
      case "low": return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    const matchesSearch = notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notif.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    switch(filter) {
      case "all": return matchesSearch;
      case "unread": return matchesSearch && !notif.read;
      case "high": return matchesSearch && notif.priority === "high";
      case "flight": return matchesSearch && notif.type === "flight";
      case "hotel": return matchesSearch && notif.type === "hotel";
      case "trip": return matchesSearch && notif.type === "trip";
      default: return matchesSearch;
    }
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Notifications 🔔
              </h1>
              {unreadCount > 0 && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                  {unreadCount} new
                </span>
              )}
            </div>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Stay updated with your travel plans and important alerts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSettings(!showSettings)}
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMarkAllAsRead}
            disabled={loading || unreadCount === 0}
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 ${
              loading || unreadCount === 0
                ? isDarkMode
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : isDarkMode
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Check className="w-5 h-5" />
            )}
            <span>Mark All Read</span>
          </motion.button>
        </div>
      </div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {notifications.length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unread</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {unreadCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
              <BellRing className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>High Priority</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {notifications.filter(n => n.priority === "high").length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Today</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {notifications.filter(n => n.date === new Date().toISOString().split('T')[0]).length}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-6">
        {/* Filter Sidebar */}
        <div className="lg:w-64 space-y-4">
          <div className={`rounded-2xl p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter Notifications
              </h3>
              <Filter className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <div className="space-y-2">
              {filterOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${
                    filter === option.id
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {option.id === "all" && <Bell className="w-4 h-4" />}
                    {option.id === "unread" && <BellRing className="w-4 h-4" />}
                    {option.id === "high" && <AlertCircle className="w-4 h-4" />}
                    {option.id === "flight" && <Plane className="w-4 h-4" />}
                    {option.id === "hotel" && <Hotel className="w-4 h-4" />}
                    {option.id === "trip" && <Calendar className="w-4 h-4" />}
                    <span>{option.label}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {option.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleClearAll}
                disabled={notifications.length === 0}
                className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  notifications.length === 0
                    ? isDarkMode
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : isDarkMode
                    ? 'bg-red-600 hover:bg-red-500 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                <Trash2 className="w-4 h-4" />
                Clear All Notifications
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`overflow-hidden rounded-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Notification Settings
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className={`p-1 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(notificationSettings).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </p>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Receive {key.toLowerCase().replace(/([A-Z])/g, ' $1')} notifications
                          </p>
                        </div>
                        <button
                          onClick={() => handleSettingChange(key)}
                          className={`w-12 h-6 rounded-full transition-all duration-300 ${
                            value
                              ? 'bg-blue-500'
                              : isDarkMode
                              ? 'bg-gray-700'
                              : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full bg-white transform transition-all duration-300 ${
                            value ? 'translate-x-7' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search notifications..."
              className={`w-full pl-12 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              } border transition-all duration-300`}
            />
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Notifications List */}
          <div className={`rounded-2xl overflow-hidden ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
            {filteredNotifications.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BellOff className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  No notifications found
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {searchTerm || filter !== "all"
                    ? "Try changing your search or filter criteria"
                    : "You're all caught up! New notifications will appear here."
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilter("all");
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredNotifications.map((notif, index) => (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-6 transition-all duration-300 ${
                      !notif.read ? isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-blue-50 hover:bg-blue-100' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${notif.color} flex items-center justify-center flex-shrink-0`}>
                        <notif.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h4 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {notif.title}
                            </h4>
                            {getPriorityIcon(notif.priority)}
                            {!notif.read && (
                              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {notif.time}
                            </span>
                            <button
                              onClick={() => handleDeleteNotification(notif.id)}
                              className={`p-1 rounded-lg ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {notif.message}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedNotification(selectedNotification === notif.id ? null : notif.id)}
                              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                                isDarkMode
                                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                              }`}
                            >
                              {selectedNotification === notif.id ? 'Hide' : 'Show'} Details
                              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                                selectedNotification === notif.id ? 'rotate-90' : ''
                              }`} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleMarkAsRead(notif.id)}
                              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                                isDarkMode
                                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                              }`}
                            >
                              <Check className="w-4 h-4" />
                              Mark as Read
                            </motion.button>
                          </div>
                          <button className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                            isDarkMode
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}>
                            {notif.action}
                          </button>
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {selectedNotification === notif.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Date
                                  </p>
                                  <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                                    {formatDate(notif.date)}
                                  </p>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Priority
                                  </p>
                                  <div className="flex items-center gap-2">
                                    {getPriorityIcon(notif.priority)}
                                    <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                                      {notif.priority.charAt(0).toUpperCase() + notif.priority.slice(1)}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Type
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <notif.icon className="w-4 h-4" />
                                    <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                                      {notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Status
                                  </p>
                                  <div className="flex items-center gap-2">
                                    {notif.read ? (
                                      <>
                                        <Eye className="w-4 h-4 text-green-500" />
                                        <span className="text-green-500">Read</span>
                                      </>
                                    ) : (
                                      <>
                                        <EyeOff className="w-4 h-4 text-blue-500" />
                                        <span className="text-blue-500">Unread</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex gap-2">
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
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination/Summary */}
          {filteredNotifications.length > 0 && (
            <div className={`mt-6 p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Showing <span className="font-bold">{filteredNotifications.length}</span> of{" "}
                    <span className="font-bold">{notifications.length}</span> notifications
                  </p>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {unreadCount} unread • {notifications.filter(n => n.priority === "high").length} high priority
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleMarkAllAsRead}
                    disabled={unreadCount === 0}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                      unreadCount === 0
                        ? isDarkMode
                          ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    Mark All Read
                  </button>
                  <button className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    <Settings className="w-4 h-4" />
                    Manage Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}