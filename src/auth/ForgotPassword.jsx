import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, ShieldCheck, CheckCircle, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // In real app, you would send reset email here
      console.log('Password reset requested for:', email);
    }, 1500);
  };

  const handleNavigateToCodeVerification = () => {
    navigate('/verify-code', { state: { email } });
  };

  const benefits = [
    { text: "We'll send a 6-digit verification code to your email", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Code expires in 15 minutes for security", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Check your spam folder if you don't see it", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Secure and encrypted password reset process", icon: <CheckCircle className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
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

            <div className="flex items-center justify-center mb-6">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reset Your Password
            </h2>
            <p className="text-gray-600">
              Enter your email address and we'll send you a verification code
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="you@example.com"
                />
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
                    Sending Code...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Verification Code
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                <Mail className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </h3>
                <p className="text-gray-600">
                  We've sent a verification code to <strong>{email}</strong>
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Please check your inbox and spam folder
                </p>
              </div>

              <button
                onClick={handleNavigateToCodeVerification}
                className="w-full py-4 px-6 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-white flex items-center justify-center gap-3"
              >
                Enter Verification Code
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>

              <div className="text-center">
                <p className="text-gray-600">
                  Didn't receive the code?{' '}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Resend Code
                  </button>
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Security Notice</span>
              </div>
              <p className="text-blue-700 text-sm mt-1">
                For security reasons, the verification code will expire in 15 minutes. Never share this code with anyone.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Need help?{' '}
              <Link to="/help" className="text-blue-600 hover:text-blue-700">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}