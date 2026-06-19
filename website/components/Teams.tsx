const categories = [
  {
    name: "Junior",
    emoji: "⭐",
    ageRange: "Toddlers – U12",
    color: "#ffc200",
    textColor: "#04091d",
    teams: ["Toddlers", "Kindy", "U6", "U8", "U10", "U12", "U12 Girls"],
    description: "Our youngest Bulldogs — building skills, confidence, and a love for football from the very first kick.",
  },
  {
    name: "Youth",
    emoji: "🎓",
    ageRange: "U14 – U18",
    color: "#1a56db",
    textColor: "#ffffff",
    teams: ["U14", "U15 Elite", "U16", "U18 Girls"],
    description: "Elite development for our teenage players stepping up to the next level of competitive football.",
  },
  {
    name: "Adult",
    emoji: "⚽",
    ageRange: "18+ Years",
    color: "#04091d",
    textColor: "#ffffff",
    teams: ["1st Team", "Social Team", "Legends 35+", "Masters 45+"],
    description: "Competitive, social, and masters football — a team for every adult Bulldog.",
  },
];

export default function Teams() {
  return (
    <section id="teams" className="py-12 md:py-16 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
            Bali Bulldogs
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] text-center">
            Our Teams
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            From Toddlers to Masters — 15 teams, 300+ players, one Bulldogs family.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-2xl overflow-hidden shadow-md">
              {/* Header */}
              <div
                className="px-6 pt-6 pb-5 relative overflow-hidden"
                style={{ background: cat.color }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)",
                    backgroundSize: "14px 14px",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-3xl">{cat.emoji}</span>
                  <div>
                    <div
                      className="font-heading font-900 text-2xl uppercase tracking-wide"
                      style={{ color: cat.textColor }}
                    >
                      {cat.name}
                    </div>
                    <div
                      className="font-heading font-600 text-xs uppercase tracking-widest"
                      style={{ color: cat.textColor, opacity: 0.65 }}
                    >
                      {cat.ageRange}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.teams.map((team) => (
                    <span
                      key={team}
                      className="font-heading font-700 text-xs uppercase tracking-wide px-3 py-1.5 rounded-full bg-[#f0f4ff] text-[#1a56db] border border-[#1a56db]/20"
                    >
                      {team}
                    </span>
                  ))}
                </div>

                <a
                  href="#join"
                  className="block text-center py-2.5 rounded-lg text-sm font-heading font-700 uppercase tracking-wide border-2 border-[#1a56db] text-[#1a56db] hover:bg-[#1a56db] hover:text-white transition-all duration-200"
                >
                  Register →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
