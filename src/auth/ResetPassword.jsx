import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, Eye, EyeOff, CheckCircle, ShieldCheck, Plane, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || 'your account';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In real app, update password via API
      console.log('Password reset for:', email);
      
      // Navigate to success page or login
      navigate('/login', { 
        state: { 
          message: 'Password reset successfully! Please login with your new password.' 
        } 
      });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const passwordRequirements = [
    { text: "At least 8 characters long", met: formData.password.length >= 8 },
    { text: "Contains at least one uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "Contains at least one lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "Contains at least one number", met: /[0-9]/.test(formData.password) },
    { text: "Contains at least one special character", met: /[!@#$%^&*]/.test(formData.password) }
  ];

  const allRequirementsMet = passwordRequirements.every(req => req.met);

  const tips = [
    { text: "Create a strong, unique password you haven't used before", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Use a password manager to generate and store passwords", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Avoid using personal information like birthdays or names", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Consider using a passphrase for better security", icon: <CheckCircle className="w-4 h-4" /> }
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

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Create New Password
            </h2>
            <p className="text-gray-600">
              Choose a strong password for your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  New Password
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
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-4 space-y-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${req.met ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <CheckCircle className={`w-3 h-3 ${req.met ? 'text-green-600' : 'text-gray-400'}`} />
                    </div>
                    <span className={`text-sm ${req.met ? 'text-green-700' : 'text-gray-500'}`}>
                      {req.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Confirm New Password
                </div>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-600 text-sm mt-2">Passwords don't match</p>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !allRequirementsMet}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                isLoading || !allRequirementsMet
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:scale-105'
              } text-white`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Updating Password...
                </>
              ) : (
                <>
                  <Key className="w-5 h-5" />
                  Reset Password
                </>
              )}
            </button>

            <div className="text-center">
              <p className="text-gray-600">
                Remember your password?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Back to Login
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-4 mb-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    {tip.icon}
                  </div>
                  <span className="text-gray-700 text-sm">{tip.text}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Security Best Practice</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                After resetting your password, we recommend enabling two-factor authentication and reviewing your account security settings.
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