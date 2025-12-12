import { 
  MapPin, 
  Globe, 
  Star, 
  Users, 
  ArrowRight, 
  Compass, 
  Headphones,
  Calendar,
  Plane
} from 'lucide-react';

const destinations = [
  { 
    name: "Paris", 
    country: "France", 
    color: "from-blue-400 to-purple-500",
    image: "/assets/images/paris.jpg",
    description: "City of Lights & Romance",
    travelers: 2450,
    rating: 4.9
  },
  { 
    name: "Tokyo", 
    country: "Japan", 
    color: "from-red-400 to-pink-500",
    image: "/assets/images/tokyo.jpg",
    description: "Modern & Traditional Fusion",
    travelers: 1890,
    rating: 4.8
  },
  { 
    name: "New York", 
    country: "USA", 
    color: "from-amber-400 to-orange-500",
    image: "/assets/images/newyork.jpg",
    description: "The City That Never Sleeps",
    travelers: 3120,
    rating: 4.7
  },
  { 
    name: "Marrakech", 
    country: "Morocco", 
    color: "from-emerald-400 to-teal-600",
    image: "/assets/images/marrakech.jpg",
    description: "Vibrant Cultural Hub",
    travelers: 1560,
    rating: 4.9
  },
  { 
    name: "Bali", 
    country: "Indonesia", 
    color: "from-green-400 to-blue-500",
    image: "/assets/images/bali.jpg",
    description: "Tropical Island Paradise",
    travelers: 2780,
    rating: 4.8
  },
  { 
    name: "Rome", 
    country: "Italy", 
    color: "from-yellow-400 to-red-500",
    image: "/assets/images/rome.jpg",
    description: "Eternal City & History",
    travelers: 2210,
    rating: 4.9
  },
  { 
    name: "Dubai", 
    country: "UAE", 
    color: "from-cyan-400 to-blue-600",
    image: "/assets/images/dubai.jpg",
    description: "Modern Desert Metropolis",
    travelers: 1940,
    rating: 4.7
  },
  { 
    name: "Sydney", 
    country: "Australia", 
    color: "from-sky-400 to-blue-500",
    image: "/assets/images/sydney.jpg",
    description: "Harbor City & Beaches",
    travelers: 1670,
    rating: 4.8
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 shadow-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold text-sm">TOP DESTINATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore <span className="text-blue-500">Popular</span> Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Discover the world's most breathtaking places loved by travelers worldwide
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={dest.name} 
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Image with Gradient Overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                {/* Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${dest.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Fallback Gradient if image fails to load */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      #{index + 1} Trending
                    </span>
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">{dest.name}</h3>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-800 font-bold text-sm">{dest.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700 font-semibold">{dest.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-500 text-sm">7-14 days</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-5 line-clamp-2">{dest.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white shadow-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white shadow-sm"></div>
                    </div>
                    <span className="text-gray-500 text-sm">+{dest.travelers.toLocaleString()} travelers</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br ${dest.color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3">
            <Compass className="w-6 h-6" />
            View All Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10K+", label: "Destinations", icon: <MapPin className="w-6 h-6" />, color: "from-blue-400 to-cyan-400" },
              { number: "50K+", label: "Happy Travelers", icon: <Users className="w-6 h-6" />, color: "from-purple-400 to-pink-400" },
              { number: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6" />, color: "from-amber-400 to-orange-400" },
              { number: "24/7", label: "Support", icon: <Headphones className="w-6 h-6" />, color: "from-green-400 to-emerald-400" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}