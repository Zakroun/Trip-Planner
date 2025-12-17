import { useSelector } from "react-redux";
import SideBar from "./Sidebar";
import TopBar from "./Topbar";
import Home from "./Home";
import Mytrips from "./Mytrips";
import Favorites from "./Favorites";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { useState, useEffect as useEffectReact } from "react";

export default function Dashboard() {
  const activsection = useSelector((t) => t.tripplanner.activsection) || "home";
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffectReact(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
    setIsDarkMode(darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffectReact(() => {
    const handleStorageChange = () => {
      const savedTheme = localStorage.getItem("darkMode");
      const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
      setIsDarkMode(darkMode);

      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(() => {
      const savedTheme = localStorage.getItem("darkMode");
      const darkMode = savedTheme ? JSON.parse(savedTheme) : false;
      if (darkMode !== isDarkMode) {
        setIsDarkMode(darkMode);
        if (darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }, 100);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [isDarkMode]);

  const renderContent = () => {
    switch (activsection) {
      case "home":
        return <Home />;
      case "mytrips":
        return <Mytrips />;
      case "favorites":
        return <Favorites />;
      case "notifications":
        return <Notifications />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div
      id="Dashboard"
      className={`min-h-screen ${
        isDarkMode
          ? "dark:bg-gray-900"
          : "bg-gradient-to-br from-blue-50 to-cyan-50"
      }`}
    >
      <div className="flex">
        <SideBar />

        <div className="flex-1 flex flex-col ml-0 transition-all duration-300">
          <TopBar />

          <main
            className={`flex-1 p-4 md:p-6 lg:p-8 ${
              isDarkMode ? "bg-gray-900" : ""
            }`}
          >
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
