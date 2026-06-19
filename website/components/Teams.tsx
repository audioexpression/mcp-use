const teams = [
  {
    name: "Men's 1st XI",
    emoji: "⚽",
    color: "#1a56db",
    accent: "#ffc200",
    description: "Our flagship adult men's squad — the heart of the Bulldogs.",
    players: "~25 players",
    kit: "Royal Blue",
    badge: "Senior",
  },
  {
    name: "Men's Social",
    emoji: "🤝",
    color: "#1243c0",
    accent: "#ffc200",
    description: "Open-age social football for adults who love the game.",
    players: "Open",
    kit: "Yellow",
    badge: "Social",
  },
  {
    name: "35+ Masters",
    emoji: "🦁",
    color: "#091c5f",
    accent: "#ffc200",
    description: "Competitive but fun football for our experienced legends.",
    players: "~20 players",
    kit: "Royal Blue",
    badge: "Masters",
  },
  {
    name: "Women's Team",
    emoji: "💪",
    color: "#0d309e",
    accent: "#ffc200",
    description: "Fast-growing women's squad with passion and determination.",
    players: "~18 players",
    kit: "Royal Blue",
    badge: "Women",
  },
  {
    name: "Junior Boys & Girls",
    emoji: "⭐",
    color: "#ffc200",
    accent: "#04091d",
    description: "Kindy through U18 — developing the next generation of Bulldogs.",
    players: "200+ players",
    kit: "Blue & Yellow",
    badge: "Juniors",
  },
  {
    name: "Academy",
    emoji: "🎓",
    color: "#122460",
    accent: "#ffc200",
    description: "Elite development pathway for our most dedicated young players.",
    players: "Selected",
    kit: "Navy",
    badge: "Academy",
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
            From Kindy to Masters — the Bulldogs have a team for everyone. Find your squad below.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.name}
              className="card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              {/* Top banner */}
              <div
                className="h-28 flex items-center justify-center relative overflow-hidden"
                style={{ background: team.color }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 20px)",
                    backgroundSize: "14px 14px",
                  }}
                />
                <div className="relative text-center">
                  <span className="text-4xl">{team.emoji}</span>
                  <div
                    className="mt-1 font-heading font-800 text-xs uppercase tracking-widest px-3 py-0.5 rounded-full inline-block"
                    style={{ background: team.accent, color: team.color === "#ffc200" ? "#04091d" : "#ffc200" }}
                  >
                    {team.badge}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-800 text-lg uppercase tracking-wide text-[#04091d] mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{team.description}</p>

                <div className="flex gap-4 text-xs">
                  <div>
                    <div className="font-heading font-700 text-[#1a56db] uppercase tracking-wide">Players</div>
                    <div className="text-gray-600 mt-0.5">{team.players}</div>
                  </div>
                  <div>
                    <div className="font-heading font-700 text-[#1a56db] uppercase tracking-wide">Kit</div>
                    <div className="text-gray-600 mt-0.5">{team.kit}</div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
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
