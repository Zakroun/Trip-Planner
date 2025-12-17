import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateactivsection, logout } from "../data/tripslice";
import {
  Home,
  MapPin,
  Heart,
  User,
  LogOut,
  Menu,
  X,
  Plane,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activesection = useSelector((t) => t.tripplanner.activsection);
  const user = useSelector((t) => t.tripplanner.user) || {
    name: "User",
    email: "user@example.com",
  };

  const [isOpen, setIsOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
    setIsDarkMode(darkMode);
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem('darkMode');
      const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
      setIsDarkMode(darkMode);
      
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem('darkMode');
      const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
      if (darkMode !== isDarkMode) {
        setIsDarkMode(darkMode);
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [isDarkMode]);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      path: "home",
    },
    {
      id: "mytrips",
      label: "My Trips",
      icon: <MapPin className="w-5 h-5" />,
      path: "mytrips",
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart className="w-5 h-5" />,
      path: "favorites",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      path: "notifications",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
      path: "profile",
    },
  ];

  const handleItemClick = (id, path) => {
    dispatch(updateactivsection(id));
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  
  const handlemenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button
        onClick={handlemenu}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isMobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-40 ${isDarkMode ? 'bg-black/70' : 'bg-black/50'} backdrop-blur-sm`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-40
          flex flex-col
          ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}
          shadow-xl border-r
          transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-20"}
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-3 ${
                !isOpen && "justify-center w-full"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}>
                <Plane className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              {isOpen && (
                <div className="overflow-hidden">
                  <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} whitespace-nowrap`}>
                    TripPlanner
                  </h1>
                  <p className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} whitespace-nowrap`}>
                    Dashboard
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } ${!isOpen && "absolute left-5"}`}
            >
              {isOpen ? (
                <ChevronLeft className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              ) : (
                <ChevronRight className={`w-4 h-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`lg:hidden p-1 rounded-lg transition-colors duration-300 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} onClick={()=>dispatch(updateactivsection(item.path))}>
                <button
                  className={`
                    w-full flex items-center rounded-xl p-3
                    transition-all duration-300
                    ${
                      activesection === item.id
                        ? `${isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} text-white shadow-md`
                        : `${isDarkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm'}`
                    }
                    ${!isOpen && "justify-center"}
                  `}
                >
                  <div className={`${isOpen ? "mr-3" : ""}`}>{item.icon}</div>
                  {isOpen && (
                    <span className="font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                  {activesection === item.id && isOpen && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-white"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center rounded-xl p-3
              transition-all duration-300
              ${isDarkMode ? 'text-red-400 hover:bg-gray-800' : 'text-red-600 hover:bg-red-50 hover:shadow-sm'}
              ${!isOpen && "justify-center"}
            `}
          >
            <div className={`${isOpen ? "mr-3" : ""}`}>
              <LogOut className="w-5 h-5" />
            </div>
            {isOpen && (
              <span className="font-medium whitespace-nowrap">Log Out</span>
            )}
          </button>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}