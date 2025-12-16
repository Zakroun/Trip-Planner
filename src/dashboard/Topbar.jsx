import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { 
  Search, 
  Bell, 
  Settings, 
  HelpCircle, 
  ChevronDown,
  User,
  Sun,
  Moon,
  Globe,
  Filter,
  Calendar,
  Download,
  LogOut
} from "lucide-react";

export default function TopBar() {
  const user = useSelector(t => t.tripplanner.user) || { name: "User", email: "user@example.com" };
  const activsection = useSelector(t => t.tripplanner.activsection);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock notifications
  const notificationItems = [
    { id: 1, title: "Trip Reminder", message: "Your Paris trip starts in 3 days", time: "10 min ago", unread: true },
    { id: 2, title: "Flight Update", message: "Flight BA123 schedule changed", time: "1 hour ago", unread: true },
    { id: 3, title: "New Feature", message: "Check out our new itinerary planner", time: "2 days ago", unread: false },
    { id: 4, title: "Booking Confirmed", message: "Hotel booking for London confirmed", time: "3 days ago", unread: false },
  ];

  const sectionTitles = {
    home: "Dashboard Overview",
    mytrips: "My Trips",
    favorites: "Favorite Destinations",
    calendar: "Travel Calendar",
    notifications: "Notifications",
    profile: "My Profile",
    settings: "Settings",
    help: "Help & Support"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting data...");
  };

  const markAllAsRead = () => {
    setNotifications(0);
    setShowNotifications(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-[0.4rem]">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Page Title & Breadcrumb */}
          <div className="flex items-center">
            
          </div>

          {/* Right Section - Actions & Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search trips, destinations..."
                  className="w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </form>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Language Selector */}
            <button
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              title="Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 relative"
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notificationItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${item.unread ? 'bg-blue-50' : ''}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 mt-2 rounded-full ${item.unread ? 'bg-blue-500' : 'bg-gray-300'}`} />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.message}</p>
                            <span className="text-xs text-gray-500 mt-2 block">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-medium">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-medium text-gray-900">{user.name || "User"}</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
                <ChevronDown className="hidden lg:block w-4 h-4 text-gray-400" />
              </button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-medium">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name || "User"}</p>
                        <p className="text-sm text-gray-500 truncate">{user.email || "user@example.com"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </a>
                    <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <Settings className="w-4 h-4" />
                      <span>Account Settings</span>
                    </a>
                    <a href="/help" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <HelpCircle className="w-4 h-4" />
                      <span>Help & Support</span>
                    </a>
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Search Button */}
            <button className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (Appears when needed) */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trips, destinations..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </form>
      </div>

      {/* Overlay for dropdowns */}
      {(showNotifications || showUserMenu) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </header>
  );
}