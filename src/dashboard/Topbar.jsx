import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Bell, 
  Settings, 
  HelpCircle, 
  ChevronDown,
  User,
  Sun,
  Moon,
  Globe,
  LogOut
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../data/tripslice";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const user = useSelector(t => t.tripplanner.user) || { name: "User", email: "user@example.com" };
  const activsection = useSelector(t => t.tripplanner.activsection);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlelogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const [notifications, setNotifications] = useState(3);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const markAllAsRead = () => {
    setNotifications(0);
    setShowNotifications(false);
  };

  return (
    <header className={`sticky top-0 z-30 ${isDarkMode ? 'dark:bg-gray-900 dark:border-gray-700' : 'bg-white border-gray-200'} border-b`}>
      <div className="px-4 sm:px-6 lg:px-8 py-[0.39rem]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              title="Language"
            >
              <Globe className="w-5 h-5" />
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-lg transition-colors duration-300 relative ${isDarkMode ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              >
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className={`absolute right-0 mt-2 w-80 rounded-xl shadow-xl border overflow-hidden z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
                      <button
                        onClick={markAllAsRead}
                        className={`text-sm font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                      >
                        Mark all as read
                      </button>
                    </div>
                  </div>
                  <div id="notifications" className="max-h-96 overflow-y-auto">
                    {notificationItems.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 border-b hover:cursor-pointer ${isDarkMode ? `border-gray-700 hover:bg-gray-700 ${item.unread ? 'bg-gray-700' : ''}` : `border-gray-100 hover:bg-gray-50 ${item.unread ? 'bg-blue-50' : ''}`}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 mt-2 rounded-full ${item.unread ? 'bg-blue-500' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
                          <div className="flex-1">
                            <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.message}</p>
                            <span className={`text-xs mt-2 block ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <button className={`w-full text-center font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center gap-3 p-2 rounded-xl transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-medium">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="hidden lg:block text-left">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name || "User"}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium Member</p>
                </div>
                <ChevronDown className={`hidden lg:block w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`} />
              </button>

              {showUserMenu && (
                <div className={`absolute right-0 mt-2 w-50 rounded-xl shadow-xl border overflow-hidden z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white font-medium">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.name || "User"}</p>
                        <p className={`text-sm truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email || "user@example.com"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <a href="/profile" className={`flex items-center gap-3 px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                      <User className="w-4 h-4" />
                      <span>My Profile</span>
                    </a>
                    <a href="/settings" className={`flex items-center gap-3 px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                      <Settings className="w-4 h-4" />
                      <span>Account Settings</span>
                    </a>
                    <a href="/help" className={`flex items-center gap-3 px-4 py-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                      <HelpCircle className="w-4 h-4" />
                      <span>Help & Support</span>
                    </a>
                  </div>
                  <div className={`p-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <button onClick={handlelogout} className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium ${isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-red-50'}`}>
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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