import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MapPin,
  Star,
  Globe,
  Search,
  X,
  Hotel,
  Utensils,
  Trash2,
  Share2,
  Plus,
  Loader2,
  Award,
  Bookmark
} from "lucide-react";

export default function Favorites() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedFavorite, setSelectedFavorite] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

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

  const [newFavorite, setNewFavorite] = useState({
    name: "",
    location: "",
    category: "destination",
    description: "",
    priceRange: "$$",
    rating: 5,
    notes: "",
    image: ""
  });

  const categories = [
    { id: "destination", label: "Destinations", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { id: "hotel", label: "Hotels", icon: Hotel, color: "from-purple-500 to-pink-500" },
    { id: "restaurant", label: "Restaurants", icon: Utensils, color: "from-red-500 to-orange-500" },
  ];

  const priceRanges = [
    { id: "$", label: "Budget", color: "bg-green-500" },
    { id: "$$", label: "Moderate", color: "bg-yellow-500" },
    { id: "$$$", label: "Expensive", color: "bg-orange-500" },
    { id: "$$$$", label: "Luxury", color: "bg-red-500" },
  ];

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Santorini, Greece",
      location: "Greece",
      category: "destination",
      description: "Breathtaking sunset views and white-washed buildings",
      rating: 5,
      notes: "Best time to visit: May-October. Must see Oia sunset.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400",
      savedAt: "2024-03-15",
      visited: false
    },
    {
      id: 2,
      name: "The Ritz-Carlton",
      location: "Paris, France",
      category: "hotel",
      description: "Luxury hotel with Eiffel Tower views",
      rating: 5,
      notes: "Request room with balcony view. Amazing breakfast buffet.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      savedAt: "2024-03-10",
      visited: true
    },
    {
      id: 3,
      name: "Sukiyabashi Jiro",
      location: "Tokyo, Japan",
      category: "restaurant",
      description: "Michelin-starred sushi restaurant",
      rating: 5,
      notes: "Reservations required months in advance. Omakase only.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
      savedAt: "2024-03-05",
      visited: false
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFavorite(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newFavoriteObj = {
        id: favorites.length + 1,
        name: newFavorite.name,
        location: newFavorite.location,
        category: newFavorite.category,
        description: newFavorite.description,
        priceRange: newFavorite.priceRange,
        rating: parseInt(newFavorite.rating),
        notes: newFavorite.notes,
        image: newFavorite.image || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=400`,
        savedAt: new Date().toISOString().split('T')[0],
        visited: false
      };

      setFavorites(prev => [newFavoriteObj, ...prev]);
      setNewFavorite({
        name: "",
        location: "",
        category: "destination",
        description: "",
        priceRange: "$$",
        rating: 5,
        notes: "",
        image: ""
      });
      setShowAddForm(false);
      setLoading(false);
    }, 1500);
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const toggleVisited = (id) => {
    setFavorites(prev => prev.map(fav => 
      fav.id === id ? { ...fav, visited: !fav.visited } : fav
    ));
  };

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  const filteredFavorites = favorites.filter(fav => {
    const matchesSearch = fav.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fav.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fav.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || fav.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    total: favorites.length,
    visited: favorites.filter(f => f.visited).length,
    byCategory: categories.reduce((acc, cat) => {
      acc[cat.id] = favorites.filter(f => f.category === cat.id).length;
      return acc;
    }, {}),
    avgRating: (favorites.reduce((sum, f) => sum + f.rating, 0) / favorites.length).toFixed(1)
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Favorite Places ❤️
          </h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Save and organize places you want to visit or loved
          </p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-500/20'
                : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/30'
            }`}
          >
            <Plus className="w-5 h-5" />
            <span>Add Favorite</span>
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
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Saved</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stats.total}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Visited</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stats.visited}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Avg. Rating</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stats.avgRating}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Wishlist</p>
              <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stats.total - stats.visited}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Bookmark className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search favorites by name, location, or description..."
            className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } border transition-all duration-300`}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilterCategory("all")}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filterCategory === "all"
                ? isDarkMode
                  ? 'bg-pink-600 text-white'
                  : 'bg-pink-500 text-white'
                : isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                filterCategory === cat.id
                  ? isDarkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-900'
                  : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}>
                {stats.byCategory[cat.id] || 0}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div variants={itemVariants} className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
        <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Collection Breakdown
        </h2>
        <div className="space-y-4">
          {categories.map(cat => {
            const count = stats.byCategory[cat.id] || 0;
            const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
            
            return (
              <div key={cat.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cat.color} flex items-center justify-center`}>
                      <cat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cat.label}</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {count} {count === 1 ? 'item' : 'items'}
                      </p>
                    </div>
                  </div>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {percentage.toFixed(1)}%
                  </span>
                </div>
                <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, delay: cat.id * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Add Favorite Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Add New Favorite
                </h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newFavorite.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Santorini, Greece"
                      required
                      className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } border transition-all duration-300`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <input
                        type="text"
                        name="location"
                        value={newFavorite.location}
                        onChange={handleInputChange}
                        placeholder="e.g., Greece"
                        required
                        className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
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
                      Category *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setNewFavorite(prev => ({ ...prev, category: cat.id }))}
                          className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                            newFavorite.category === cat.id
                              ? `bg-gradient-to-r ${cat.color} text-white`
                              : isDarkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <cat.icon className="w-4 h-4" />
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Price Range *
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {priceRanges.map(price => (
                        <button
                          key={price.id}
                          type="button"
                          onClick={() => setNewFavorite(prev => ({ ...prev, priceRange: price.id }))}
                          className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                            newFavorite.priceRange === price.id
                              ? `${price.color} text-white`
                              : isDarkMode
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {price.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={newFavorite.description}
                    onChange={handleInputChange}
                    placeholder="Describe why you love this place or want to visit..."
                    required
                    rows="2"
                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } border transition-all duration-300`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Rating (1-5) *
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewFavorite(prev => ({ ...prev, rating: star }))}
                          className="p-1"
                        >
                          <Star className={`w-8 h-8 ${
                            star <= newFavorite.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : isDarkMode
                              ? 'text-gray-600'
                              : 'text-gray-300'
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Image URL (optional)
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={newFavorite.image}
                      onChange={handleInputChange}
                      placeholder="Paste image URL or leave empty for random"
                      className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } border transition-all duration-300`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Personal Notes
                  </label>
                  <textarea
                    name="notes"
                    value={newFavorite.notes}
                    onChange={handleInputChange}
                    placeholder="Add any personal notes, tips, or reminders..."
                    rows="2"
                    className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${
                      isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } border transition-all duration-300`}
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
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
                        ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-500/20'
                        : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/30'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        Add to Favorites
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Favorites Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFavorites.map((fav, index) => (
          <motion.div
            key={fav.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`rounded-2xl overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
          >
            <div className="relative h-48">
              <img 
                src={fav.image} 
                alt={fav.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeFavorite(fav.id)}
                className={`absolute top-4 right-4 p-2 rounded-full ${
                  isDarkMode
                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-red-400'
                    : 'bg-white/80 hover:bg-white text-red-500'
                } backdrop-blur-sm transition-all duration-300`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  isDarkMode
                    ? 'bg-gray-800/80 text-gray-200'
                    : 'bg-white/80 text-gray-800'
                }`}>
                  {categories.find(c => c.id === fav.category)?.label}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {fav.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {fav.location}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleVisited(fav.id)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    fav.visited
                      ? 'bg-green-500/10 text-green-500'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {fav.visited ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              </div>

              <p className={`mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {fav.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= fav.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : isDarkMode
                            ? 'text-gray-600'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className={`ml-1 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {fav.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Saved {formatDate(fav.savedAt)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedFavorite(selectedFavorite === fav.id ? null : fav.id)}
                  className={`flex-1 py-2 rounded-lg font-medium flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {selectedFavorite === fav.id ? 'Hide' : 'View'} Notes
                </button>
                <button className={`p-2 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}>
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <AnimatePresence>
                {selectedFavorite === fav.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <h4 className={`font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Personal Notes
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {fav.notes || "No notes added yet."}
                    </p>
                    {fav.visited && (
                      <div className="mt-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium text-green-500">
                            You've visited this place!
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredFavorites.length === 0 && (
        <motion.div
          variants={itemVariants}
          className={`rounded-2xl p-12 text-center ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            No favorites found
          </h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {searchTerm || filterCategory !== "all" 
              ? "Try changing your search or filter criteria"
              : "Start building your dream travel list!"
            }
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto ${
              isDarkMode
                ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-500/20'
                : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/30'
            }`}
          >
            <Plus className="w-5 h-5" />
            Add Your First Favorite
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}