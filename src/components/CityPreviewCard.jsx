// components/CityPreviewCard.jsx
import { useState } from 'react';
import { getCountryById } from '../data/data';
import { useNavigate } from 'react-router-dom';

export default function CityPreviewCard({ city }){
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const country = getCountryById(city.countryId);
  
  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    console.log(`${city.name} ${isSaved ? 'removed from' : 'added to'} saved destinations`);
  };
  
  const handleViewDetails = () => {
    navigate(`/city/${city.id}`);
  };
  
  return (
    <div 
      onClick={handleViewDetails}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* City Image Header */}
      <div className="relative h-40 overflow-hidden">
        {/* Show city image if it exists */}
        {city.image ? (
          <>
            <img 
              src={city.image} 
              alt={city.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </>
        ) : (
          <>
            {/* Fallback gradient background if no image */}
            <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-40`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </>
        )}
        
        {/* Save Button */}
        <button
          onClick={handleSave}
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors z-10"
        >
          {isSaved ? (
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
        
        {/* City & Country Info */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <img src={country?.flag} className="w-8"/>
            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
              {country?.name}
            </span>
          </div>
          <h3 className="text-xl font-bold">{city.name}</h3>
        </div>
      </div>
      
      {/* City Details */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{city.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{city.population.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Best: {city.bestTimeToVisit.split('-')[0].trim()}</span>
          </div>
        </div>
        
        {/* Temperature Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Summer: {city.avgTemp.summer}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span>Winter: {city.avgTemp.winter}</span>
          </div>
        </div>
        
        {/* Popular Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {city.popularFor.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        
        {/* View Button */}
        <button 
          onClick={handleViewDetails}
          className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};