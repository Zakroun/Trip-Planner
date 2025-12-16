import { useSelector } from "react-redux";
import SideBar from "./Sidebar";
import TopBar from "./Topbar";
import Home from "./Home";
import Mytrips from "./Mytrips";
import Favorites from "./Favorites";
import Profile from "./Profile";

export default function Dashboard() {
  const activsection = useSelector(t => t.tripplanner.activsection) || "home";

  // Render component based on active section
  const renderContent = () => {
    switch (activsection) {
      case "home":
        return <Home />;
      case "mytrips":
        return <Mytrips />;
      case "favorites":
        return <Favorites />;
      case "profile":
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="flex">
        {/* Sidebar */}
        <SideBar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col ml-0 transition-all duration-300">
          {/* TopBar */}
          <TopBar />
          
          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {/* Render active component */}
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}