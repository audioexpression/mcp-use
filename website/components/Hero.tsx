import BulldogCrest from "./BulldogCrest";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen hero-bg flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{ background: "linear-gradient(135deg, transparent 0%, #ffc200 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-16">
        {/* Crest */}
        <div className="mb-8">
          <BulldogCrest size={200} />
        </div>

        {/* Tagline */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#ffc200]/30" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-transparent px-6 font-heading font-600 text-base sm:text-lg md:text-xl tracking-[0.2em] text-white/80 uppercase italic">
              &ldquo; We Never Walk Alone &rdquo;
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#join"
            className="btn-sunflower px-8 py-4 rounded-xl text-base font-heading font-700 uppercase tracking-wider"
          >
            Join the Club
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-xl text-base font-heading font-700 uppercase tracking-wider border-2 border-white/30 text-white hover:border-[#ffc200] hover:text-[#ffc200] transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "450+", label: "Players" },
            { value: "2020", label: "Founded" },
            { value: "6", label: "Teams" },
            { value: "Bali", label: "Indonesia" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading font-900 text-3xl sm:text-4xl text-[#ffc200]">{s.value}</div>
              <div className="font-heading font-600 text-xs sm:text-sm uppercase tracking-widest text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-heading uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7l5 5 5-5" stroke="#ffc200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
