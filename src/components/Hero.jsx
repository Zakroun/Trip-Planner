import { useNavigate } from "react-router-dom";
import DotGrid from "./DotGrid";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#f8fbff]">
      {/* Dotted Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.20) 1px, transparent 0)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Soft Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-cyan-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-4xl pt-16 w-full text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-8 shadow-sm border border-blue-100">
          <span className="text-sm">✈️ Smart Travel Planning</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Plan your perfect trip <br />
          with <span className="text-blue-500">TripPlanner</span>
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Permettre aux utilisateurs de planifier facilement leurs voyages ou
          sorties, suivre itinéraires, activités et budget, et partager avec
          amis ou famille.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => navigate("/destinations")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto"
          >
            Start Planning
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              document.getElementById("howitwork")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-white hover:bg-blue-50 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-blue-100 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            How It Works
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-sky-500 border-2 border-white" />
              <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-700 font-semibold text-sm">
                Trusted by 10,000+
              </p>
              <p className="text-slate-500 text-xs">travelers worldwide</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-yellow-400 text-lg">⭐</span>
            <span className="text-slate-700 font-semibold text-sm">
              4.9/5 Traveler Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
