import { 
  Plane, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  Facebook,
  Twitter,
  Globe,
  ArrowRight,
  Key
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log('Login attempt:', formData);
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

  const socialLogins = [
    { provider: 'Google', icon: <Globe className="w-5 h-5" />, color: 'hover:bg-red-50 border-red-200 text-red-600' },
    { provider: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-50 border-blue-200 text-blue-600' },
    { provider: 'Twitter', icon: <Twitter className="w-5 h-5" />, color: 'hover:bg-sky-50 border-sky-200 text-sky-600' }
  ];

  const benefits = [
    { text: "Access to personalized travel recommendations", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Save and organize your favorite destinations", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Sync itineraries across all your devices", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Get exclusive member-only deals", icon: <CheckCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Login Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-gray-900">TripPlanner</h1>
                  <p className="text-blue-600 text-sm">Your Journey, Perfected</p>
                </div>
              </Link>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to continue your travel journey
              </p>
            </div>

            {/* Login Method Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setLoginMethod('email')}
                className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'email' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Mail className="w-5 h-5" />
                Email
              </button>
              <button
                onClick={() => setLoginMethod('phone')}
                className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  loginMethod === 'phone' 
                    ? 'bg-white shadow-sm text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                Phone
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {loginMethod === 'email' ? (
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
                    placeholder="you@example.com"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      Phone Number
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
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-3 rounded-r-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </div>
                    <Link 
                      to="/forgot-password" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Forgot Password?
                    </Link>
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
                    placeholder="Enter your password"
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
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700 text-sm">Remember me for 30 days</span>
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
                    Signing in...
                  </>
                ) : (
                  <>
                    <Key className="w-5 h-5" />
                    Sign In
                  </>
                )}
              </button>

              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">Or continue with</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                {socialLogins.map((social) => (
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
                  Don't have an account?{' '}
                  <Link 
                    to="/signup" 
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                  >
                    Sign up free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right Column - Benefits & Info */}
          <div className="space-y-8">
            {/* Benefits Card */}
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
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="font-semibold">Security Guarantee</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    Your data is protected with bank-level encryption and never shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xl font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Frequent Traveler</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">
                "TripPlanner transformed how I travel. From solo adventures to family trips, everything is so much easier now. The login is seamless across all my devices!"
              </p>
              
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="text-yellow-400">
                    ★
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <Link 
                to="/forgot-password"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Key className="w-6 h-6 text-blue-500" />
                </div>
                <span className="font-medium text-gray-900">Reset Password</span>
              </Link>
              
              <Link 
                to="/help"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <span className="font-medium text-gray-900">Help Center</span>
              </Link>
            </div>

            {/* Security Badge */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-semibold">Verified & Secure</span>
              </div>
              <p className="text-gray-400 text-sm">
                SSL Encrypted • GDPR Compliant • Privacy First
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}