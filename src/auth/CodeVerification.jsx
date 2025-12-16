import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock, ArrowLeft, ShieldCheck, CheckCircle, Plane, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CodeVerification() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);

  const email = location.state?.email || 'your email';

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Move to next input if value entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
      
      // Auto submit when all digits entered
      if (newCode.every(digit => digit !== '') && index === 5) {
        handleSubmit();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    if (code.some(digit => digit === '')) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      const verificationCode = code.join('');
      
      // In real app, verify code with backend
      console.log('Verifying code:', verificationCode);
      
      // Navigate to reset password on success
      navigate('/reset-password', { state: { email, verificationCode } });
    }, 1500);
  };

  const handleResendCode = () => {
    setTimeLeft(900); // Reset timer to 15 minutes
    // In real app, resend verification code
    console.log('Resending code to:', email);
  };

  const tips = [
    { text: "Enter the 6-digit code sent to your email", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Code is case-sensitive and numbers only", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Code will expire in 15 minutes for security", icon: <CheckCircle className="w-4 h-4" /> },
    { text: "Don't share this code with anyone", icon: <CheckCircle className="w-4 h-4" /> }
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
                to="/forgot-password"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Email
              </Link>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enter Verification Code
            </h2>
            <p className="text-gray-600">
              We sent a code to <strong>{email}</strong>
            </p>
          </div>

          <div className="space-y-6">
            {/* Timer Display */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-mono font-bold text-blue-700">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-blue-600 text-sm">Time remaining</span>
              </div>
            </div>

            {/* Code Input */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Key className="w-4 h-4" />
                  6-Digit Verification Code
                </div>
              </label>
              
              <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 text-center text-2xl font-bold rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                ))}
              </div>
              
              {error && (
                <p className="text-red-600 text-center text-sm">{error}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
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
                  Verifying...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Verify & Continue
                </>
              )}
            </button>

            <div className="text-center">
              <p className="text-gray-600">
                Didn't receive the code?{' '}
                <button
                  onClick={handleResendCode}
                  disabled={timeLeft > 870} // Can resend after 30 seconds
                  className={`font-semibold ${
                    timeLeft > 870 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Resend Code
                </button>
              </p>
              {timeLeft > 870 && (
                <p className="text-gray-500 text-sm mt-1">
                  Wait 30 seconds before requesting a new code
                </p>
              )}
            </div>
          </div>

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

            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-yellow-600" />
                <span className="font-semibold text-yellow-800">Security Alert</span>
              </div>
              <p className="text-yellow-700 text-sm mt-1">
                TripPlanner will never ask for your verification code via phone, email, or text message. Keep this code confidential.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Having trouble?{' '}
              <Link to="/help" className="text-blue-600 hover:text-blue-700">
                Get Help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}