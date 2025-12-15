export default function SearchBar() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Next Adventure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Search thousands of destinations, plan your perfect itinerary, and create unforgettable memories
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          {/* Main Search Input */}
          <div className="flex w-full md:w-auto md:flex-1 max-w-2xl">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Where do you want to go? (e.g., Paris, Tokyo, Bali...)"
                className="w-full pl-12 pr-4 py-4 text-gray-800 bg-white border border-gray-200 rounded-l-xl md:rounded-l-xl md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:border-blue-300 transition-all duration-300 text-lg"
              />
            </div>
            
            {/* Date Input */}
            <div className="hidden md:block relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="far fa-calendar-alt text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Dates"
                className="px-12 py-4 w-48 text-gray-800 bg-white border-y border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-300 text-lg"
              />
            </div>

            {/* Travelers Input */}
            <div className="hidden md:block relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="fas fa-user-friends text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="Travelers"
                className="px-12 py-4 w-40 text-gray-800 bg-white border-y border-r border-gray-200 rounded-r-xl md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300 transition-all duration-300 text-lg"
              />
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-r-xl md:rounded-r-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[140px]">
              <i className="fas fa-search"></i>
              Search
            </button>
          </div>
        </div>

        {/* Mobile Additional Inputs */}
        <div className="mt-4 md:hidden flex flex-col gap-3 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="far fa-calendar-alt text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Travel Dates"
              className="w-full pl-12 pr-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-user-friends text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Number of Travelers"
              className="w-full pl-12 pr-4 py-3 text-gray-800 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-3 text-sm font-medium">POPULAR SEARCHES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Paris', 'Tokyo', 'Bali', 'New York', 'Rome', 'Barcelona', 'Dubai', 'London'].map((city) => (
              <button
                key={city}
                className="bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm text-sm font-medium flex items-center gap-2"
              >
                <i className="fas fa-map-marker-alt text-blue-500 text-xs"></i>
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}