import {
  Plane,
  MapPin,
  Globe,
  Mail,
  Phone,
  Map,
  ShieldCheck,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  ArrowUp,
  Download,
  Apple,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600">
                    <Plane className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold transition-colors duration-300 text-white drop-shadow-md">
                      TripPlanner
                    </h1>
                    <p className="text-blue-100 text-xs">
                      Your Journey, Perfected
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md">
                We revolutionize travel planning by combining cutting-edge
                technology with human expertise. From dream destinations to
                perfect itineraries, we make every journey memorable.
              </p>

              {/* App Download Buttons */}
              <div className="space-y-4 mb-8">
                <p className="font-semibold text-gray-200">Get the App</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition-all duration-300 group w-full sm:w-auto">
                    {/* <Apple className="w-6 h-6" /> */}
                    <div className="text-left">
                      <div className="text-xs text-gray-400">
                        Download on the
                      </div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition-all duration-300 group w-full sm:w-auto">
                    {/* <Android className="w-6 h-6" /> */}
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Destinations",
                  "Itineraries",
                  "About Us",
                  "How It Works",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowUp className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Map className="w-5 h-5 text-blue-400" />
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "Travel Guides",
                  "Blog",
                  "FAQ",
                  "Support Center",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowUp className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get travel tips, exclusive deals, and destination inspiration.
              </p>
              <div className="mb-6">
                <div className="flex bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-transparent px-4 py-3 flex-1 text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 transition-all duration-300">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+212 6-123-4566</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>support@tripplanne...</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>24/7 Global Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  {
                    icon: <ShieldCheck className="w-5 h-5" />,
                    text: "SSL Secured",
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    text: "Verified Reviews",
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    text: "150+ Countries",
                  },
                  {
                    icon: <Download className="w-5 h-5" />,
                    text: "500K+ Downloads",
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="text-blue-400">{badge.icon}</div>
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="flex items-center gap-2">
                <div className="text-gray-500 text-sm mr-2">We accept:</div>
                <div className="flex gap-2">
                  {["Visa", "MasterCard", "PayPal", "Stripe"].map((method) => (
                    <div
                      key={method}
                      className="bg-gray-800 px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p className="flex items-center gap-1">
                  © 2025 TripPlanner. All rights reserved.
                </p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-6">
                <div className="flex gap-4">
                  {[
                    {
                      icon: <Facebook className="w-5 h-5" />,
                      label: "Facebook",
                    },
                    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      label: "Instagram",
                    },
                    { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Language & Currency 
              <div className="flex items-center gap-4 text-sm">
                <select className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>English</option>
                  <option>French</option>
                  <option>Spanish</option>
                  <option>Arabic</option>
                </select>
                <select className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>MAD (د.م.)</option>
                </select>
              </div>
              */}
            </div>

            {/* Bottom Links */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Disclaimer",
                  "Accessibility",
                  "Sitemap",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 rotate-270" />
      </button>
    </footer>
  );
}
