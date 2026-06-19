export default function JoinCTA() {
  return (
    <section id="join" className="py-20 md:py-28 bg-[#ffc200] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #04091d 0, #04091d 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Decorative shapes */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#04091d]/10" />
      <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-[#04091d]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="font-heading font-700 text-[#04091d]/60 uppercase tracking-widest text-sm mb-4">
              Become a Bulldog
            </p>
            <h2 className="font-heading font-900 text-4xl md:text-6xl uppercase leading-tight text-[#04091d] mb-6">
              Join the Bulldogs Family
            </h2>
            <p className="text-[#04091d]/70 text-lg leading-relaxed mb-8">
              Whether you&apos;re a seasoned player or just starting out, the Bali Bulldogs have a place for you.
              Join over 450 players and be part of something special.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Juniors", desc: "Kindy – U18", icon: "⭐" },
                { label: "Adults", desc: "Social & Competitive", icon: "⚽" },
                { label: "Women", desc: "All skill levels", icon: "💪" },
                { label: "Masters", desc: "35+ Years", icon: "🦁" },
              ].map((item) => (
                <div key={item.label} className="bg-[#04091d]/10 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-heading font-700 text-[#04091d] text-sm uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="text-[#04091d]/60 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@balibulldogsfc.com"
                className="bg-[#04091d] text-[#ffc200] px-8 py-4 rounded-xl font-heading font-700 text-sm uppercase tracking-wider hover:bg-[#1a56db] transition-colors duration-200"
              >
                Register Now
              </a>
              <a
                href="#contact"
                className="border-2 border-[#04091d] text-[#04091d] px-8 py-4 rounded-xl font-heading font-700 text-sm uppercase tracking-wider hover:bg-[#04091d] hover:text-[#ffc200] transition-all duration-200"
              >
                Ask a Question
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-[#04091d] rounded-2xl p-8 text-white">
            <div className="font-heading font-800 text-xl uppercase tracking-wide text-[#ffc200] mb-6">
              What You Get
            </div>
            <ul className="space-y-4">
              {[
                "Access to The Bulldogs Arena — our home ground",
                "Weekly training sessions with qualified coaches",
                "Competitive and social match fixtures",
                "Official Bali Bulldogs kit",
                "Online member portal for scheduling & payments",
                "Access to club community events",
                "Coaching & skill development programs",
                "We Never Walk Alone — a true club family",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-[#ffc200] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#04091d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
