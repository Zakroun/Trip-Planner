export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center"
      style={{
        backgroundImage: `url("/assets/images/hero.jpg")`,
        backgroundColor: '#eff6ff',
      }}
    >
      <div className="max-w-4xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 backdrop-blur-sm px-4 py-2 rounded-full mb-8 mt-12 shadow-sm">
          <img src="/assets/images/airplane.png" alt="airplan" className="w-5"/>
          <span className="text-blue-600 font-medium text-sm">Smart Travel Planning</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Plan your perfect trip<br />
          with <span className="text-blue-500">TripPlanner</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed px-4">
          Permettre aux utilisateurs de planifier facilement leurs voyages ou sorties, suivre itinéraires, activités, et budget, et partager avec amis ou famille.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto">
            Start Planning
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="bg-white hover:bg-blue-50 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-blue-100 w-full sm:w-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How It Works
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Avatars and Trust Badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="text-gray-700 font-semibold text-sm">Trusted by 10,000+</p>
              <p className="text-gray-500 text-xs">travelers worldwide</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="text-blue-400 text-lg">⭐</span>
            <span className="text-gray-700 font-semibold text-sm">4.9/5 Traveler Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}