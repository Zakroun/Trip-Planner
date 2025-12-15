import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock,
  Globe,
  Headphones,
  CheckCircle,
  User,
  Building,
  Calendar,
  ChevronRight,
  Award,
  ShieldCheck
} from 'lucide-react';
import { useState,useEffect } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["support@tripplanner.com", "sales@tripplanner.com"],
      description: "We respond within 4 hours",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+212 6-123-4566", "+212 6-123-4566"],
      description: "24/7 customer support",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Travel Street", "San Francisco, CA 94107"],
      description: "Visit us weekdays 9AM-6PM",
      color: "from-amber-500 to-orange-400"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page or contact our support team for assistance."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings."
    },
    {
      question: "Do you offer group travel planning?",
      answer: "Absolutely! We have special features for group planning and collaborative itineraries."
    },
    {
      question: "Is my payment information secure?",
      answer: "We use bank-level encryption and never store your full payment details on our servers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 shadow-sm">
              <MessageSquare className="w-4 h-4" />
              <span className="font-semibold text-sm">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
              Let's Plan Your <span className="text-blue-500">Adventure</span>
            </h1>
            
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
              Have questions, feedback, or need assistance? Our team is here to help you every step of the way.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
              { number: "2h", label: "Avg Response Time", icon: <Headphones className="w-6 h-6" /> },
              { number: "98%", label: "Satisfaction Rate", icon: <Award className="w-6 h-6" /> },
              { number: "150+", label: "Countries Supported", icon: <Globe className="w-6 h-6" /> }
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

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {method.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{method.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Send us a <span className="text-blue-500">Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Your Name
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Subject
                    </div>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Your Message
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your travel plans, questions, or feedback..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 4 hours.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span>Your information is secure and will never be shared</span>
                </div>
              </form>
            </div>

            {/* Map & Office Hours */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl p-8 h-64 md:h-80 flex flex-col items-center justify-center text-center">
                <MapPin className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Our Headquarters
                </h3>
                <p className="text-gray-600">
                  123 Travel Street, San Francisco, CA 94107
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                  Get Directions
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Office Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Emergency Support Only" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Headphones className="w-5 h-5" />
                    <span className="font-semibold">Emergency Support</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available 24/7 for urgent travel assistance
                  </p>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <h4 className="font-medium text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                  
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mt-4">
                    View all FAQs
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
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
                  Need Immediate Assistance?
                </h2>
                
                <p className="text-blue-100 text-lg mb-10">
                  Call our 24/7 support line for urgent travel assistance
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                    <Phone className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-blue-200 text-sm">Emergency Hotline</div>
                      <div className="text-2xl font-bold">+212 6-123-4566</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Start Live Chat
                  </button>
                </div>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Certified Travel Experts</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Instant Response Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Multilingual Support</span>
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