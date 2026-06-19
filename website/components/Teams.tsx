type Session = {
  days: string;
  time: string;
};

type TeamEntry = {
  name: string;
  sessions: Session[];
};

type Category = {
  name: string;
  emoji: string;
  ageRange: string;
  color: string;
  textColor: string;
  description: string;
  teams: TeamEntry[];
};

const categories: Category[] = [
  {
    name: "Junior",
    emoji: "⭐",
    ageRange: "Toddlers – U12",
    color: "#ffc200",
    textColor: "#04091d",
    description: "Our youngest Bulldogs — building skills, confidence, and a love for football from the very first kick.",
    teams: [
      { name: "Toddlers",       sessions: [{ days: "Mon & Wed", time: "2:30 – 3:15 PM" }] },
      { name: "Kindy & U6 (1)", sessions: [{ days: "Mon & Wed", time: "3:30 – 4:30 PM" }] },
      { name: "Kindy & U6 (2)", sessions: [{ days: "Tue & Thu", time: "3:00 – 4:00 PM" }] },
      { name: "U8",             sessions: [{ days: "Mon & Wed", time: "4:30 – 6:00 PM" }] },
      { name: "U10",            sessions: [{ days: "Tue & Thu", time: "4:00 – 5:30 PM" }] },
      { name: "U12",            sessions: [{ days: "Tue & Thu", time: "5:30 – 7:00 PM" }] },
      { name: "U12 Girls",      sessions: [{ days: "Fri",       time: "3:30 – 5:00 PM" }] },
    ],
  },
  {
    name: "Youth",
    emoji: "🎓",
    ageRange: "U14 – U18",
    color: "#1a56db",
    textColor: "#ffffff",
    description: "Elite development for our teenage players stepping up to the next level of competitive football.",
    teams: [
      { name: "U14",      sessions: [{ days: "Mon", time: "6:00 – 7:30 PM" }, { days: "Fri", time: "5:00 – 6:30 PM" }] },
      { name: "U15 Elite", sessions: [{ days: "",    time: "Contact us" }] },
      { name: "U16",      sessions: [{ days: "Wed", time: "6:00 – 7:30 PM" }, { days: "Fri", time: "5:00 – 6:30 PM" }] },
      { name: "U18 Girls", sessions: [{ days: "Mon & Wed", time: "6:00 – 7:30 PM" }] },
    ],
  },
  {
    name: "Adult",
    emoji: "⚽",
    ageRange: "18+ Years",
    color: "#04091d",
    textColor: "#ffffff",
    description: "Competitive, social, and masters football — a team for every adult Bulldog.",
    teams: [
      { name: "1st Team",    sessions: [{ days: "", time: "Contact us" }] },
      { name: "Social Team", sessions: [{ days: "", time: "Contact us" }] },
      { name: "Legends 35+", sessions: [{ days: "", time: "Contact us" }] },
      { name: "Masters 45+", sessions: [{ days: "", time: "Contact us" }] },
    ],
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
        <div className="grid md:grid-cols-3 gap-6 items-start">
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
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Training schedule rows */}
                <div className="divide-y divide-gray-100 mb-5">
                  {cat.teams.map((team) => (
                    <div key={team.name} className="py-2">
                      {team.sessions.map((session, sIdx) => (
                        <div key={sIdx} className={`flex items-center gap-2 ${sIdx > 0 ? "mt-1.5" : ""}`}>
                          {/* Team name — only shown on first session row */}
                          <span className="font-heading font-700 text-[11px] uppercase tracking-wide text-[#04091d] w-28 flex-shrink-0 leading-tight">
                            {sIdx === 0 ? team.name : ""}
                          </span>

                          {/* Day pill */}
                          {session.days ? (
                            <span className="font-heading font-700 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#1a56db] text-white flex-shrink-0 whitespace-nowrap">
                              {session.days}
                            </span>
                          ) : null}

                          {/* Time or contact link */}
                          {session.time === "Contact us" ? (
                            <a
                              href="https://wa.me/6281384474406"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1a56db] text-[11px] flex-1 text-right hover:underline"
                            >
                              WhatsApp us
                            </a>
                          ) : (
                            <span className="text-gray-400 text-[11px] flex-1 text-right whitespace-nowrap">
                              {session.time}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
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
