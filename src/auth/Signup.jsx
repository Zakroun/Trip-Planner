import { 
  Plane, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  CheckCircle,
  ShieldCheck,
  Facebook,
  Twitter,
  Globe,
  ArrowRight,
  Calendar,
  Smartphone,
  Award
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: true
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle signup logic here
      console.log('Signup attempt:', formData);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const socialSignups = [
    { provider: 'Google', icon: <Globe className="w-5 h-5" />, color: 'hover:bg-red-50 border-red-200 text-red-600' },
    { provider: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-50 border-blue-200 text-blue-600' },
    { provider: 'Twitter', icon: <Twitter className="w-5 h-5" />, color: 'hover:bg-sky-50 border-sky-200 text-sky-600' }
  ];

  const features = [
    { text: "Create unlimited travel itineraries", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Save destinations to your wishlist", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Get personalized recommendations", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Access exclusive member deals", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Sync across all your devices", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "24/7 travel support", icon: <CheckCircle className="w-4 h-4" /> }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["Basic itinerary planning", "Up to 3 saved trips", "Standard support"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: ["Advanced planning tools", "Unlimited trips", "Priority support", "AI recommendations"],
      color: "from-purple-500 to-pink-500",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Signup Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-gray-900">TripPlanner</h1>
                  <p className="text-blue-600 text-sm">Start Your Journey</p>
                </div>
              </Link>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Create Your Account
              </h2>
              <p className="text-gray-600">
                Join thousands of travelers planning their perfect trips
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      First Name
                    </div>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Phone Number (Optional)
                  </div>
                </label>
                <div className="flex">
                  <div className="w-24 flex-shrink-0">
                    <select className="w-full h-full px-3 py-3 rounded-l-xl border border-gray-300 border-r-0 bg-gray-50 focus:outline-none">
                      <option>+1</option>
                      <option>+33</option>
                      <option>+44</option>
                      <option>+212</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 rounded-r-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </div>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-2">
                    Minimum 8 characters with letters and numbers
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-1 text-blue-600 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 text-blue-600 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className="text-gray-700 text-sm">
                    Send me travel tips, exclusive deals, and updates (you can unsubscribe anytime)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isLoading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:scale-105'
                } text-white`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <Award className="w-5 h-5" />
                    Start Free Trial
                  </>
                )}
              </button>

              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">Or sign up with</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {socialSignups.map((social) => (
                  <button
                    key={social.provider}
                    type="button"
                    className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all duration-300 ${social.color} hover:shadow-md`}
                  >
                    {social.icon}
                    <span className="text-xs mt-1">{social.provider}</span>
                  </button>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                  >
                    Sign in here
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right Column - Features & Plans */}
          <div className="space-y-8">
            {/* Features Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">
                  Why Join TripPlanner?
                </h3>
                
                <div className="space-y-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-semibold">Free 14-Day Trial</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    No credit card required. Cancel anytime during your trial period.
                  </p>
                </div>
              </div>
            </div>

            {/* Plans Comparison */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Choose Your Plan
              </h3>
              
              <div className="space-y-6">
                {plans.map((plan) => (
                  <div 
                    key={plan.name}
                    className={`relative rounded-2xl p-6 border-2 ${plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600">/{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Travel Statistics</h4>
                  <p className="text-purple-100 text-sm">New Member Benefits</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-purple-100 text-sm">Save Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-purple-100 text-sm">Save Money</div>
                </div>
              </div>
            </div>
             */}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Protected by reCAPTCHA and subject to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700">
              Terms
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}