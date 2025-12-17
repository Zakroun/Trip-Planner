import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Edit2,
  Save,
  X,
  Camera,
  Lock,
  CreditCard,
  Award,
  Star,
  Heart,
  Plane,
  Users,
  Briefcase,
  Cake,
  Camera as CameraIcon,
  Music,
  BookOpen,
  Coffee,
  Dumbbell,
  Palette,
  Gamepad2,
  Utensils,
  Compass,
  Shield,
  Download,
  Share2,
  CheckCircle,
  Loader2
} from "lucide-react";

export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [showAvatarModal, setShowAvatarModal] = useState(false);

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

  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Passionate traveler, foodie, and adventure seeker. Always planning my next trip to explore new cultures and cuisines.",
    birthdate: "1990-08-15",
    nationality: "American",
    occupation: "Software Engineer",
    memberSince: "2022-03-15",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    coverPhoto: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
  });

  const [formData, setFormData] = useState({ ...profile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setProfile(formData);
      setIsEditing(false);
      setLoading(false);
    }, 1500);
  };

  const handleCancel = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  const travelStats = [
    { label: "Countries Visited", value: "24", icon: Globe, change: "+3 this year", color: "from-blue-500 to-cyan-500" },
    { label: "Total Trips", value: "56", icon: Plane, change: "12 upcoming", color: "from-purple-500 to-pink-500" },
    { label: "Travel Days", value: "428", icon: Calendar, change: "+45 days", color: "from-green-500 to-emerald-500" },
  ];

  const preferences = [
    { id: "foodie", label: "Foodie", icon: Utensils, color: "bg-red-500" },
    { id: "adventure", label: "Adventure", icon: Compass, color: "bg-green-500" },
    { id: "luxury", label: "Luxury", icon: Star, color: "bg-yellow-500" },
    { id: "budget", label: "Budget", icon: CreditCard, color: "bg-blue-500" },
    { id: "solo", label: "Solo Travel", icon: User, color: "bg-purple-500" },
    { id: "family", label: "Family", icon: Users, color: "bg-pink-500" },
  ];

  const interests = [
    { id: "photography", label: "Photography", icon: CameraIcon, selected: true },
    { id: "music", label: "Local Music", icon: Music, selected: true },
    { id: "history", label: "History", icon: BookOpen, selected: false },
    { id: "coffee", label: "Coffee Culture", icon: Coffee, selected: true },
    { id: "fitness", label: "Fitness", icon: Dumbbell, selected: false },
    { id: "art", label: "Art & Museums", icon: Palette, selected: true },
    { id: "gaming", label: "Gaming", icon: Gamepad2, selected: false },
    { id: "hiking", label: "Hiking", icon: Compass, selected: true },
  ];

  const recentTrips = [
    { id: 1, destination: "Paris, France", date: "May 2024", duration: "7 days", rating: 5 },
    { id: 2, destination: "Tokyo, Japan", date: "Mar 2024", duration: "14 days", rating: 5 },
    { id: 3, destination: "Bali, Indonesia", date: "Jan 2024", duration: "10 days", rating: 4 },
    { id: 4, destination: "New York, USA", date: "Dec 2023", duration: "10 days", rating: 4 },
  ];

  const badges = [
    { id: 1, name: "Globe Trotter", description: "Visited 20+ countries", icon: Globe, unlocked: true },
    { id: 2, name: "Early Bird", description: "Booked 10+ trips 6 months in advance", icon: Calendar, unlocked: true },
    { id: 3, name: "Food Explorer", description: "Tried 50+ local dishes", icon: Utensils, unlocked: true },
    { id: 4, name: "Adventure Seeker", description: "Completed 15+ adventure activities", icon: Compass, unlocked: false },
    { id: 5, name: "Loyal Traveler", description: "2+ years with TripPlanner", icon: Award, unlocked: true },
    { id: 6, name: "Review Master", description: "Submitted 25+ reviews", icon: Star, unlocked: false },
  ];

  const tabItems = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "preferences", label: "Preferences", icon: Heart },
  ];

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

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
      {/* Cover Photo */}
      {/* <motion.div variants={itemVariants} className="relative h-64 rounded-2xl overflow-hidden">
        <img 
          src={profile.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300">
          <Camera className="w-4 h-4 inline mr-2" />
          Change Cover
        </button>
      </motion.div> */}

      {/* Profile Header */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end gap-6 relative z-10">
        {/* Avatar */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative group">
            <div className="w-40 h-40 rounded-2xl border-4 border-white dark:border-gray-900 shadow-2xl overflow-hidden">
              <img 
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => setShowAvatarModal(true)}
              className="absolute bottom-3 right-3 p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 lg:ml-6 mt-6 lg:mt-0">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {profile.name}
                </h1>
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              <p className={`text-lg mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {profile.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Briefcase className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{profile.occupation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cake className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {calculateAge(profile.birthdate)} years
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Member since {new Date(profile.memberSince).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {!isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Edit2 className="w-5 h-5" />
                    Edit Profile
                  </button>
                  <button className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/20'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/30'
                  }`}>
                    <Share2 className="w-5 h-5" />
                    Share Profile
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleCancel}
                    className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                  <motion.button
                    onClick={handleSave}
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/20'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        Save Changes
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`rounded-2xl p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
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
                <p className={`text-sm mt-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
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

      {/* Main Content Tabs */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="lg:w-64">
          <div className={`rounded-2xl p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg sticky top-6`}>
            <div className="space-y-1">
              {tabItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Account Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Verified</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Premium</span>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Security</span>
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>

            <button className={`w-full mt-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}>
              <Download className="w-5 h-5" />
              Export Data
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Personal Info */}
              {activeTab === "personal" && (
                <div className={`rounded-2xl p-6 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Personal Information
                    </h2>
                    <User className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  </div>

                  {isEditing ? (
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                            } border transition-all duration-300`}
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Email *
                          </label>
                          <div className="relative">
                            <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                isDarkMode
                                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                              } border transition-all duration-300`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
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
                            Location
                          </label>
                          <div className="relative">
                            <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                isDarkMode
                                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                              } border transition-all duration-300`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Birthdate
                          </label>
                          <input
                            type="date"
                            name="birthdate"
                            value={formData.birthdate}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900'
                            } border transition-all duration-300`}
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Nationality
                          </label>
                          <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                            } border transition-all duration-300`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows="3"
                          className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                          } border transition-all duration-300`}
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                              : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                          } border transition-all duration-300`}
                        />
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <div>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{profile.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <div>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{profile.phone}</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <div>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{profile.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Globe className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            <div>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Nationality</p>
                              <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>{profile.nationality}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{profile.bio}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Occupation</p>
                          <p className={`font-medium mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{profile.occupation}</p>
                        </div>
                        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Member Since</p>
                          <p className={`font-medium mt-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {new Date(profile.memberSince).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Preferences */}
              {activeTab === "preferences" && (
                <>
                  {/* Travel Preferences */}
                  <div className={`rounded-2xl p-6 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Travel Preferences
                      </h2>
                      <Heart className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                      {preferences.map(pref => (
                        <div key={pref.id} className="text-center">
                          <div className={`w-16 h-16 ${pref.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                            <pref.icon className="w-7 h-7 text-white" />
                          </div>
                          <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {pref.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div className={`rounded-2xl p-6 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Interests
                      </h2>
                      <div className="text-sm">
                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {interests.filter(i => i.selected).length} selected
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {interests.map(interest => (
                        <button
                          key={interest.id}
                          onClick={() => {
                            // Toggle interest selection
                            const updatedInterests = interests.map(i => 
                              i.id === interest.id ? { ...i, selected: !i.selected } : i
                            );
                            // In real app, update state
                          }}
                          className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 ${
                            interest.selected
                              ? isDarkMode
                                ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                                : 'bg-blue-50 border-blue-500 text-blue-600'
                              : isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-gray-400 hover:bg-gray-600'
                              : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <interest.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{interest.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Trips */}
                  <div className={`rounded-2xl p-6 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                    <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Recent Trips
                    </h2>
                    <div className="space-y-4">
                      {recentTrips.map(trip => (
                        <div key={trip.id} className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ?'bg-gray-700' : 'bg-gray-50'}`}>
                          <div>
                            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {trip.destination}
                            </p>
                            <div className="flex items-center gap-4 mt-1">
                              <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {trip.date} • {trip.duration}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < trip.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : isDarkMode
                                    ? 'text-gray-600'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Badges & Achievements */}
              {activeTab === "security" && (
                <div className={`rounded-2xl p-6 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Badges & Achievements
                    </h2>
                    <Award className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {badges.map(badge => (
                      <div key={badge.id} className={`p-4 rounded-xl border ${
                        badge.unlocked
                          ? isDarkMode
                            ? 'bg-gray-700 border-green-500'
                            : 'bg-green-50 border-green-200'
                          : isDarkMode
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-gray-50 border-gray-300'
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            badge.unlocked
                              ? 'bg-gradient-to-r from-yellow-500 to-amber-500'
                              : isDarkMode
                              ? 'bg-gray-700'
                              : 'bg-gray-200'
                          }`}>
                            <badge.icon className={`w-6 h-6 ${badge.unlocked ? 'text-white' : isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                          </div>
                          <div>
                            <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {badge.name}
                            </h3>
                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {badge.description}
                            </p>
                            <div className="mt-3">
                              {badge.unlocked ? (
                                <div className="flex items-center gap-1">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm text-green-500">Unlocked</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <Lock className="w-4 h-4 text-gray-400" />
                                  <span className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                    Locked
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Avatar Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAvatarModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-md rounded-2xl p-6 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Change Profile Photo
                </h3>
                <button
                  onClick={() => setShowAvatarModal(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                    <img 
                      src={profile.avatar}
                      alt="Current Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <button className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    <Camera className="w-5 h-5" />
                    Upload New Photo
                  </button>
                  <button className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
                    Remove Current Photo
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-3 mt-6">
                  {[1, 2, 3, 4].map(i => (
                    <button
                      key={i}
                      className="w-full aspect-square rounded-lg overflow-hidden"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400` }));
                        setProfile(prev => ({ ...prev, avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400` }));
                      }}
                    >
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=400`}
                        alt={`Avatar ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}