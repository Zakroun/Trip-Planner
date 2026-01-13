// components/ContinentCard.jsx
import { ArrowRight } from 'lucide-react';

export default function ContinentCard({ continent, isSelected, onClick }){
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-500 transform hover:-translate-y-2 h-full min-h-[300px] ${
        isSelected 
          ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-2xl' 
          : 'shadow-lg hover:shadow-2xl'
      }`}
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${continent.image}')` }}
      />
      
      {/* Gradient Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-br ${continent.color} opacity-60`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-8">
        <div className="flex items-start justify-between mb-6">
          {/* <div className="text-5xl drop-shadow-lg">{continent.icon}</div> */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
          ${
            isSelected 
              ? 'bg-white text-blue-600' 
              : 'bg-white/20 text-white'
          }
          `}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors drop-shadow-lg">
            {continent.name}
          </h3>
          
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-medium">Explore destinations</span>
          </div>
        </div>
      </div>
      
      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      )}
    </button>
  );
};