import { 
  Search, 
  GitCompare, 
  CalendarCheck, 
  Globe,
  Wallet,
  Share2,
  BarChart3,
  Sparkles,
  Zap,
  ShieldCheck
} from 'lucide-react';

const features = [
  {
    title: "Smart Destination Search",
    description: "Find your perfect destination with intelligent filters, real-time availability, and personalized recommendations based on your preferences.",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
    delay: "100"
  },
  {
    title: "Compare Trips Effortlessly",
    description: "Side-by-side comparison of itineraries, prices, and reviews to make informed decisions quickly and confidently.",
    icon: <GitCompare className="w-8 h-8" />,
    color: "from-purple-500 to-pink-400",
    delay: "200"
  },
  {
    title: "One-Click Booking",
    description: "Secure and instant booking with our integrated payment system. Get instant confirmation and e-tickets directly.",
    icon: <CalendarCheck className="w-8 h-8" />,
    color: "from-green-500 to-emerald-400",
    delay: "300"
  },
  {
    title: "Budget Management",
    description: "Track expenses, set budgets, and get real-time cost breakdowns. Never overspend on your trips again.",
    icon: <Wallet className="w-8 h-8" />,
    color: "from-amber-500 to-orange-400",
    delay: "100"
  },
  {
    title: "Share & Collaborate",
    description: "Invite friends and family to plan together. Share itineraries, vote on activities, and coordinate seamlessly.",
    icon: <Share2 className="w-8 h-8" />,
    color: "from-red-500 to-rose-400",
    delay: "200"
  },
  {
    title: "Real-Time Analytics",
    description: "Get insights on your travel patterns, preferences, and savings. Make smarter travel decisions over time.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-indigo-500 to-blue-400",
    delay: "300"
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    text: "Save up to 40% on travel costs"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    text: "Secure & encrypted payment system"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    text: "AI-powered recommendations"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    text: "Access to 150+ countries"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plan Your Trip in <span className="text-blue-500">3 Simple Steps</span>
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            From dream to reality - our platform makes travel planning effortless and enjoyable
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={feature.title} 
              className="relative group"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Connecting Line (Desktop Only) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-100 group-hover:from-blue-400 group-hover:to-blue-200 transition-all duration-500"></div>
              )}
              
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl font-bold text-blue-600 z-10">
                0{index + 1}
              </div>
              
              {/* Feature Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:border-blue-200 border border-transparent">
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="flex items-center gap-2 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Learn more</span>
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need in <span className="text-blue-500">One Platform</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(3).map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:border-blue-100 border border-transparent group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-500`}>
                  <div className={`text-gradient ${feature.color.replace('from-', 'text-').replace(' to-', '-to-')}`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Premium Feature</span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-inner">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
              Why Choose TripPlanner?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <span className="text-gray-800 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 shadow-xl">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">
                Ready to Start Your Journey?
              </h4>
              <p className="text-blue-100">
                Join over 50,000 travelers who trust TripPlanner
              </p>
            </div>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
              Get Started Free
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}