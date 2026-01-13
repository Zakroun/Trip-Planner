// pages/DestinationsPage.jsx
import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Globe, 
  MapPin, 
  Users, 
  Calendar,
  Thermometer,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  SlidersHorizontal,
  Plane
} from 'lucide-react';
import { continents, countries, cities, getCountriesByContinentId, getCitiesByCountryId } from '../data/data';
import ContinentCard from '../components/ContinentCard';
import CountryCard from '../components/CountryCard';
import CityPreviewCard from '../components/CityPreviewCard';
import CountUp from '../components/CountUp';
export default function DestinationsPage(){
  console.log("continents:", continents.length);
  console.log("countries:", countries.length);
  console.log("cities:", cities.length);
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('continents');
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPage, setFeaturedPage] = useState(1);
  const [sortBy, setSortBy] = useState('popular');
  const [filters, setFilters] = useState({
    minPopulation: 0,
    maxPopulation: 50000000,
    climate: 'all',
    rating: 0,
    bestTime: 'all'
  });
  
  const ITEMS_PER_PAGE = 12;
  const FEATURED_PER_PAGE = 12;

  // Initialize with all cities
  useEffect(() => {
    const sortedCities = cities.sort((a, b) => b.population - a.population);
    setAllCities(sortedCities);
    setFilteredCities(sortedCities);
  }, []);

  // Apply filters and sorting
  const applyFilters = (citiesList) => {
    let filtered = [...citiesList];
    
    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(city => {
        const cityName = city.name.toLowerCase();
        const country = countries.find(c => c.id === city.countryId);
        const countryName = country?.name.toLowerCase() || '';
        const continent = continents.find(c => c.id === country?.continentId);
        const continentName = continent?.name.toLowerCase() || '';
        
        return (
          cityName.includes(query) ||
          countryName.includes(query) ||
          continentName.includes(query) ||
          city.description.toLowerCase().includes(query) ||
          city.popularFor.some(item => item.toLowerCase().includes(query))
        );
      });
    }
    
    // Apply population filter
    filtered = filtered.filter(city => 
      city.population >= filters.minPopulation && 
      city.population <= filters.maxPopulation
    );
    
    // Apply climate filter (based on temperature)
    if (filters.climate !== 'all') {
      filtered = filtered.filter(city => {
        const avgSummer = parseInt(city.avgTemp.summer.split('-')[0]);
        if (filters.climate === 'cold') return avgSummer < 15;
        if (filters.climate === 'mild') return avgSummer >= 15 && avgSummer <= 25;
        if (filters.climate === 'warm') return avgSummer > 25;
        return true;
      });
    }
    
    // Apply best time filter
    if (filters.bestTime !== 'all') {
      filtered = filtered.filter(city => {
        const months = city.bestTimeToVisit.toLowerCase();
        const timeMap = {
          'spring': ['march', 'april', 'may', 'june'],
          'summer': ['june', 'july', 'august', 'september'],
          'fall': ['september', 'october', 'november'],
          'winter': ['december', 'january', 'february', 'march']
        };
        
        if (filters.bestTime === 'all') return true;
        return timeMap[filters.bestTime]?.some(month => months.includes(month));
      });
    }
    
    // Apply sorting
    switch(sortBy) {
      case 'population':
        filtered.sort((a, b) => b.population - a.population);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        // Assuming we have ratings, sort by popularity
        filtered.sort((a, b) => b.population - a.population);
        break;
      default: // 'popular'
        filtered.sort((a, b) => b.population - a.population);
    }
    
    return filtered;
  };

  // Handle continent selection
  const handleContinentSelect = (continentId) => {
    setSelectedContinent(continentId);
    const countriesInContinent = getCountriesByContinentId(continentId);
    setFilteredCountries(countriesInContinent);
    setSelectedCountry(null);
    setViewMode('countries');
    setCurrentPage(1);
    setFeaturedPage(1);
  };

  // Handle country selection
  const handleCountrySelect = (countryId) => {
    setSelectedCountry(countryId);
    const citiesInCountry = getCitiesByCountryId(countryId);
    const filtered = applyFilters(citiesInCountry);
    setFilteredCities(filtered);
    setViewMode('cities');
    setCurrentPage(1);
    setFeaturedPage(1);
  };

  // Handle back navigation
  const handleBackToContinents = () => {
    setSelectedContinent(null);
    setSelectedCountry(null);
    setFilteredCountries([]);
    const sortedCities = cities.sort((a, b) => b.population - a.population);
    setAllCities(sortedCities);
    setFilteredCities(sortedCities);
    setViewMode('continents');
    setCurrentPage(1);
    setFeaturedPage(1);
    setSearchQuery('');
    resetFilters();
  };

  const handleBackToCountries = () => {
    setSelectedCountry(null);
    setViewMode('countries');
    setCurrentPage(1);
    setFeaturedPage(1);
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    let citiesToFilter = [];
    if (selectedCountry) {
      citiesToFilter = getCitiesByCountryId(selectedCountry);
    } else if (selectedContinent) {
      const continentCountries = getCountriesByContinentId(selectedContinent);
      citiesToFilter = cities.filter(city => 
        continentCountries.some(country => country.id === city.countryId)
      );
    } else {
      citiesToFilter = cities;
    }
    
    const filtered = applyFilters(citiesToFilter);
    setFilteredCities(filtered);
    setViewMode('cities');
    setCurrentPage(1);
    setFeaturedPage(1);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      minPopulation: 0,
      maxPopulation: 50000000,
      climate: 'all',
      rating: 0,
      bestTime: 'all'
    });
    setSortBy('popular');
  };

  // Get current continent/country info
  const getCurrentContinent = () => {
    return continents.find(c => c.id === selectedContinent);
  };

  const getCurrentCountry = () => {
    return countries.find(c => c.id === selectedCountry);
  };

  // Get paginated cities for main cities view
  const getPaginatedCities = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredCities.slice(startIndex, endIndex);
  };

  // Get paginated cities for featured section
  const getPaginatedFeaturedCities = () => {
    const startIndex = (featuredPage - 1) * FEATURED_PER_PAGE;
    const endIndex = startIndex + FEATURED_PER_PAGE;
    return allCities.slice(startIndex, endIndex);
  };

  // Get total pages for main cities view
  const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);

  // Get total pages for featured cities
  const totalFeaturedPages = Math.ceil(allCities.length / FEATURED_PER_PAGE);

  // Handle page change for featured cities
  const handleFeaturedPageChange = (page) => {
    setFeaturedPage(page);
    window.scrollTo({
      top: document.querySelector('.featured-cities-section').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  // Filter button component
  const FilterButton = ({ label, value, currentValue, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all ${
        value === currentValue
          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  // Pagination component
  const Pagination = ({ currentPage, totalPages, onPageChange, pageSize = ITEMS_PER_PAGE }) => {
    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        // Calculate start and end of visible pages
        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        // Adjust if we're near the beginning
        if (currentPage <= 3) {
          end = 4;
        }

        // Adjust if we're near the end
        if (currentPage >= totalPages - 2) {
          start = totalPages - 3;
        }

        // Add ellipsis after first page if needed
        if (start > 2) {
          pages.push('ellipsis-start');
        }

        // Add middle pages
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        // Add ellipsis before last page if needed
        if (end < totalPages - 1) {
          pages.push('ellipsis-end');
        }

        // Always show last page
        pages.push(totalPages);
      }

      return pages.map((page, index) => {
        if (page === 'ellipsis-start' || page === 'ellipsis-end') {
          return (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              page === currentPage
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      });
    };

    return (
      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg transition-all ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {renderPageNumbers()}
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg transition-all ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, filteredCities.length)} of {filteredCities.length} cities
        </div>
      </div>
    );
  };

  // Climate options
  const climateOptions = [
    { value: 'all', label: 'All Climates' },
    { value: 'cold', label: 'Cold (<15°C)' },
    { value: 'mild', label: 'Mild (15-25°C)' },
    { value: 'warm', label: 'Warm (>25°C)' }
  ];

  // Best time options
  const bestTimeOptions = [
    { value: 'all', label: 'All Year' },
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'fall', label: 'Fall' },
    { value: 'winter', label: 'Winter' }
  ];

  // Sort options
  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'population', label: 'Largest Population' },
    { value: 'name', label: 'A to Z' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl pt-8 mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Plane className="w-4 h-4" />
              <span className="font-semibold text-sm">EXPLORE DESTINATIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover <span className="text-cyan-300">Amazing</span> Places
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Explore thousands of destinations worldwide. Find your next adventure with our comprehensive travel guide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-lg rounded-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search cities, countries, continents, or attractions..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30 border border-white/20"
                      />
                    </div>
                    <button className="ml-4 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: <Globe className="w-6 h-6" />, value: continents.length, label: 'Continents' },
            { icon: <MapPin className="w-6 h-6" />, value: countries.length, label: 'Countries' },
            { icon: <Users className="w-6 h-6" />, value: cities.length, label: 'Cities' },
            { icon: <Star className="w-6 h-6" />, value: '4.9', label: 'Avg. Rating' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                <div className="text-blue-500">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"><CountUp from={0} to={stat.value} duration={2} /></div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button
            onClick={handleBackToContinents}
            className={`flex items-center gap-1 hover:text-blue-600 transition-colors ${viewMode !== 'continents' ? '' : 'hidden'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            All Continents
          </button>
          
          {selectedContinent && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <button
                onClick={viewMode === 'cities' ? handleBackToCountries : undefined}
                className={`flex items-center gap-1 hover:text-blue-600 transition-colors ${viewMode === 'cities' ? 'cursor-pointer' : ''}`}
              >
                <Globe className="w-4 h-4" />
                {getCurrentContinent()?.name}
              </button>
            </>
          )}
          
          {selectedCountry && viewMode === 'cities' && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-blue-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {getCurrentCountry()?.name}
              </span>
            </>
          )}
          
          {viewMode === 'cities' && searchQuery && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">
                Search: "{searchQuery}"
              </span>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Controls Bar */}
        {viewMode === 'cities' && (
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <FilterButton
                    label="All Climates"
                    value="all"
                    currentValue={filters.climate}
                    onClick={() => setFilters({...filters, climate: 'all'})}
                  />
                  {climateOptions.slice(1).map(option => (
                    <FilterButton
                      key={option.value}
                      label={option.label}
                      value={option.value}
                      currentValue={filters.climate}
                      onClick={() => setFilters({...filters, climate: option.value})}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <select
                    value={filters.bestTime}
                    onChange={(e) => setFilters({...filters, bestTime: e.target.value})}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {bestTimeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        Sort by: {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {(filters.climate !== 'all' || filters.bestTime !== 'all' || sortBy !== 'popular') && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear All
                  </button>
                )}
              </div>
            </div>
            
            {/* Population Range Slider */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Population: {filters.minPopulation.toLocaleString()} - {filters.maxPopulation.toLocaleString()}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="100000"
                  value={filters.minPopulation}
                  onChange={(e) => setFilters({...filters, minPopulation: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="100000"
                  value={filters.maxPopulation}
                  onChange={(e) => setFilters({...filters, maxPopulation: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content Views */}
        {viewMode === 'continents' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Browse by <span className="text-blue-600">Continent</span>
                </h2>
                <p className="text-gray-600">Select a continent to explore its countries</p>
              </div>
              <img src='/assets/images/worldicon.png' className="w-12"/>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {continents.map((continent) => (
                <ContinentCard
                  key={continent.id}
                  continent={continent}
                  isSelected={selectedContinent === continent.id}
                  onClick={() => handleContinentSelect(continent.id)}
                />
              ))}
            </div>

            {/* Popular Cities Preview with Pagination */}
            <div className="mt-16 featured-cities-section">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Featured <span className="text-blue-600">Cities</span>
                  </h2>
                  <p className="text-gray-600">Most popular destinations worldwide</p>
                </div>
                <button
                  onClick={() => {
                    setViewMode('cities');
                    setSelectedContinent(null);
                    setSelectedCountry(null);
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-xl font-semibold hover:from-blue-100 hover:to-cyan-100 transition-all duration-300"
                >
                  Show All Cities
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getPaginatedFeaturedCities().map((city) => (
                  <CityPreviewCard key={city.id} city={city} />
                ))}
              </div>
              
              {/* Featured Cities Pagination */}
              {totalFeaturedPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={featuredPage}
                    totalPages={totalFeaturedPages}
                    onPageChange={handleFeaturedPageChange}
                    pageSize={FEATURED_PER_PAGE}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {viewMode === 'countries' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleBackToContinents}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {getCurrentContinent()?.name} <span className="text-blue-600">Countries</span>
                  </h2>
                  <p className="text-gray-600">Select a country to explore its cities</p>
                </div>
              </div>
              <img src={getCurrentContinent()?.imageicon} className="w-14"></img>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.id}
                  country={country}
                  isSelected={selectedCountry === country.id}
                  onClick={() => handleCountrySelect(country.id)}
                />
              ))}
            </div>
            
            {filteredCountries.length === 0 && (
              <div className="text-center py-16">
                <img src='/assets/images/worldicon.png' className="hidden w-14"/>
                <h3 className="text-2xl font-semibold mb-3">No countries found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or go back to continents</p>
                <button
                  onClick={handleBackToContinents}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Back to Continents
                </button>
              </div>
            )}
          </div>
        )}

        {viewMode === 'cities' && (
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {selectedContinent && (
                    <button
                      onClick={selectedCountry ? handleBackToCountries : handleBackToContinents}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                  )}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {selectedCountry 
                        ? `${getCurrentCountry()?.name} Cities` 
                        : selectedContinent
                          ? `${getCurrentContinent()?.name} Cities`
                          : searchQuery
                            ? `Results for "${searchQuery}"`
                            : 'All Cities'
                      }
                    </h2>
                    <p className="text-gray-600">
                      {selectedCountry 
                        ? `Explore amazing destinations in ${getCurrentCountry()?.name}`
                        : selectedContinent
                          ? `Discover cities across ${getCurrentContinent()?.name}`
                          : searchQuery
                            ? `Found ${filteredCities.length} matching cities`
                            : 'Browse all cities worldwide'
                      }
                    </p>
                  </div>
                </div>
                {selectedCountry && (
                <img src={getCurrentCountry()?.flag} alt={`${getCurrentCountry()?.name} flag`} className="w-12 h-12 object-cover rounded" />
                )}
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">{filteredCities.length} cities</span>
                </div>
                {selectedCountry && (
                  <>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 rounded-full">
                      <Thermometer className="w-4 h-4" />
                      <span className="font-medium">Avg: {getCurrentCountry()?.bestTimeToVisit[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 rounded-full">
                      <Globe className="w-4 h-4" />
                      <span className="font-medium">{getCurrentCountry()?.language}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Cities Grid */}
            {getPaginatedCities().length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {getPaginatedCities().map((city) => (
                    <CityPreviewCard key={city.id} city={city} />
                  ))}
                </div>
                
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  pageSize={ITEMS_PER_PAGE}
                />
              </>
            ) : (
              <div className="text-center py-16">
                <img src='/assets/images/worldicon.png' className="hidden w-14"/>
                <h3 className="text-2xl font-semibold mb-3">No cities found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => {
                      resetFilters();
                      setSearchQuery('');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={handleBackToContinents}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Browse Continents
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {viewMode === 'cities' && filteredCities.length > 0 && (
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Found {filteredCities.length} amazing destinations!
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Save your favorites and start planning your next adventure today.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Planning Your Trip
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
