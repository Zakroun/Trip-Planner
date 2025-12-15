import { 
  Plane, 
  Users, 
  Globe, 
  Award, 
  ShieldCheck, 
  Target,
  Heart,
  Clock,
  Star,
  MapPin,
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  Map
} from 'lucide-react';
import { useEffect } from 'react';
export default function AboutPage() {
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former travel journalist with 15+ years of industry experience",
      avatar: "/assets/images/team/sarah.jpg",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Technology",
      bio: "Ex-Google engineer passionate about travel innovation",
      avatar: "/assets/images/team/michael.jpg",
      color: "from-purple-400 to-pink-400"
    },
    {
      name: "Emma Wilson",
      role: "Travel Experience Director",
      bio: "Lived in 30+ countries, specializes in cultural immersion",
      avatar: "/assets/images/team/emma.jpg",
      color: "from-amber-400 to-orange-400"
    },
    {
      name: "David Kim",
      role: "Product Design Lead",
      bio: "Award-winning designer focused on user experience",
      avatar: "/assets/images/team/david.jpg",
      color: "from-green-400 to-emerald-400"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Travel",
      description: "We believe travel transforms lives and connects cultures"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your safety and data privacy are our top priorities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Celebrating diversity and promoting sustainable travel"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving to enhance your travel experience"
    }
  ];

  const milestones = [
    { year: "2020", event: "TripPlanner Founded", description: "Started with a vision to simplify travel planning" },
    { year: "2021", event: "First 10,000 Users", description: "Reached our initial user milestone" },
    { year: "2022", event: "Mobile App Launch", description: "Released iOS and Android applications" },
    { year: "2023", event: "Global Expansion", description: "Expanded to 50+ countries worldwide" },
    { year: "2024", event: "Award Recognition", description: "Won 'Best Travel App 2024' award" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Plane className="w-4 h-4" />
              <span className="font-semibold text-sm">OUR STORY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              We Make Travel <span className="text-blue-500">Simpler</span>
            </h1>
            
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
              TripPlanner was born from a simple idea: travel planning should be joyful, not stressful. 
              We're here to transform how you experience the world.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "50K+", label: "Happy Travelers", icon: <Users className="w-6 h-6" /> },
              { number: "150+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
              { number: "4.9", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
              { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                  <div className="text-blue-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our <span className="text-blue-500">Mission</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  To democratize travel planning by providing powerful, intuitive tools that empower 
                  everyone to create their perfect journeys, regardless of experience or budget.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Make travel planning accessible to everyone",
                    "Promote sustainable and responsible tourism",
                    "Connect travelers with authentic local experiences",
                    "Build a global community of passionate explorers"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 lg:p-12 text-white">
                <Award className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-blue-100 mb-6">
                  Winner of "Best Travel Innovation 2024" and featured in leading travel publications worldwide.
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">+300% YoY Growth</span>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-blue-500">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Passionate travelers and tech innovators united by a common goal: making travel better for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="p-6">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <div 
                        className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-bold`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="text-blue-600 font-medium text-center mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-gray-600 text-center text-sm">
                    {member.bio}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-500">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do at TripPlanner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-500">Journey</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From a simple idea to a global platform revolutionizing travel planning
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Dot */}
                  <div className="absolute lg:relative left-6 lg:left-auto w-4 h-4 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for even items */}
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Travel Experience?
                </h2>
                
                <p className="text-blue-100 text-lg mb-10">
                  Join thousands of travelers who trust TripPlanner for their adventures
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Start Planning Free
                  </button>
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/10">
                    Contact Our Team
                  </button>
                </div>
                
                <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>hello@tripplanner.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}