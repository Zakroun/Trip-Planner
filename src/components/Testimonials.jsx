import { 
  Star, 
  Quote, 
  MapPin, 
  Calendar, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  Heart
} from 'lucide-react';
import { useState } from 'react';

const reviews = [
  { 
    name: "Sarah Johnson", 
    text: "TripPlanner completely transformed how I travel. From discovering hidden gems in Tokyo to managing my budget in Bali, everything was seamless. The itinerary feature saved me hours of planning!",
    location: "Tokyo, Japan",
    trip: "2 Week Japan Adventure",
    rating: 5,
    avatarColor: "from-blue-400 to-cyan-400",
    date: "March 2024"
  },
  { 
    name: "Michael Chen", 
    text: "As a frequent traveler, I've tried many planning apps. TripPlanner stands out with its intuitive interface and powerful features. The real-time collaboration made planning our family reunion trip effortless.",
    location: "Bali, Indonesia",
    trip: "Family Beach Vacation",
    rating: 5,
    avatarColor: "from-purple-400 to-pink-400",
    date: "February 2024"
  },
  { 
    name: "Elena Rodriguez", 
    text: "The budget tracking feature alone is worth it! Saved 30% on our European tour by comparing options. The community recommendations were spot-on for authentic experiences.",
    location: "Paris, France",
    trip: "European Grand Tour",
    rating: 5,
    avatarColor: "from-amber-400 to-orange-400",
    date: "January 2024"
  },
  { 
    name: "David Wilson", 
    text: "From solo adventures to group trips, TripPlanner adapts perfectly. The AI suggestions helped me discover places I never would have found on my own. Highly recommended!",
    location: "New York, USA",
    trip: "City Exploration",
    rating: 4,
    avatarColor: "from-green-400 to-emerald-400",
    date: "December 2023"
  },
  { 
    name: "Aisha Patel", 
    text: "Planning our honeymoon was stress-free thanks to TripPlanner. The visual itinerary and booking integration made everything so simple. We're already planning our next trip!",
    location: "Maldives",
    trip: "Honeymoon Escape",
    rating: 5,
    avatarColor: "from-rose-400 to-red-400",
    date: "November 2023"
  },
  { 
    name: "James Miller", 
    text: "The best travel planning tool I've used. The offline access feature saved me during our mountain trek in Nepal. Professional yet easy to use for any traveler.",
    location: "Kathmandu, Nepal",
    trip: "Himalayan Trek",
    rating: 5,
    avatarColor: "from-indigo-400 to-blue-400",
    date: "October 2023"
  }
];

const stats = [
  { number: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
  { number: "50K+", label: "Happy Travelers", icon: <Users className="w-5 h-5" /> },
  { number: "150+", label: "Countries Covered", icon: <MapPin className="w-5 h-5" /> },
  { number: "98%", label: "Satisfaction Rate", icon: <Award className="w-5 h-5" /> }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 2) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 2 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleReviews = [
    reviews[activeIndex % reviews.length],
    reviews[(activeIndex + 1) % reviews.length]
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
            <Quote className="w-4 h-4" />
            <span className="font-semibold text-sm">TESTIMONIALS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-500">Travelers Worldwide</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Hear from real travelers who transformed their journeys with TripPlanner
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="text-blue-500">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.number}
                </div>
              </div>
              <div className="text-gray-600 text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-20">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute -top-16 right-0 space-x-3">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 disabled:opacity-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center hover:bg-blue-50 disabled:opacity-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
            {visibleReviews.map((review, index) => (
              <div 
                key={`${review.name}-${activeIndex + index}`}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${review.avatarColor} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {review.name.charAt(0)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                          <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{review.location}</span>
                          </div>
                        </div>
                        <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{review.date}</span>
                          </div>
                          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                            {review.trip}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 disabled:opacity-50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(reviews.length / 2))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i * 2)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i * 2 ? 'bg-blue-500 w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-blue-50 disabled:opacity-50 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Community of Happy Travelers
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Trusted by individuals, families, and travel professionals worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-5xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Active Monthly Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-5xl font-bold mb-2">92%</div>
                <div className="text-blue-100">Would Recommend</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-5xl font-bold mb-2">4.8/5</div>
                <div className="text-blue-100">App Store Rating</div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Read More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}