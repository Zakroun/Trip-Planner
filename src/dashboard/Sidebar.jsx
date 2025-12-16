import { useState } from "react";
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
  Settings,
  Calendar,
  Bell,
  HelpCircle,
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

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      id: "mytrips",
      label: "My Trips",
      icon: <MapPin className="w-5 h-5" />,
      path: "/my-trips",
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <Heart className="w-5 h-5" />,
      path: "/favorites",
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: <Calendar className="w-5 h-5" />,
      path: "/calendar",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="w-5 h-5" />,
      path: "/notifications",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
      path: "/profile",
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop and Mobile Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-40
          flex flex-col
          bg-white
          shadow-xl border-r border-gray-200
          transition-all duration-500 ease-in-out
          ${isOpen ? "w-64" : "w-20"}
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-3 ${
                !isOpen && "justify-center w-full"
              }`}
            >
                
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 text-white transform -rotate-45" />
              </div>
              {isOpen && (
                <div className="overflow-hidden">
                  <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                    TripPlanner
                  </h1>
                  <p className="text-xs text-blue-600 whitespace-nowrap">
                    Dashboard
                  </p>
                </div>
              )}
            </div>

            {/* Desktop Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 ${
                !isOpen && "absolute left-5"
              }`}
            >
              {isOpen ? (
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id, item.path)}
                  className={`
                    w-full flex items-center rounded-xl p-3
                    transition-all duration-300
                    ${
                      activesection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
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

        {/* Logout Section */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center rounded-xl p-3
              transition-all duration-300
              text-red-600 hover:bg-red-50 hover:shadow-sm
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

          {/* Version Info (only when open) 
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                TripPlanner v1.0.0
              </p>
            </div>
          )}
            */}
        </div>
      </aside>

      {/* Overlay when mobile sidebar is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
