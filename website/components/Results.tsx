const results = [
  {
    date: "15 Jun 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Canggu FC",
    homeScore: 3,
    awayScore: 1,
    result: "W",
    competition: "Men's 1st XI",
  },
  {
    date: "8 Jun 2026",
    homeTeam: "Seminyak United",
    awayTeam: "Bali Bulldogs",
    homeScore: 2,
    awayScore: 2,
    result: "D",
    competition: "Men's Social",
  },
  {
    date: "1 Jun 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Kuta Rangers",
    homeScore: 5,
    awayScore: 0,
    result: "W",
    competition: "35+ Masters",
  },
  {
    date: "25 May 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Ubud Warriors",
    homeScore: 1,
    awayScore: 3,
    result: "L",
    competition: "Women's Team",
  },
  {
    date: "18 May 2026",
    homeTeam: "Denpasar City",
    awayTeam: "Bali Bulldogs",
    homeScore: 0,
    awayScore: 4,
    result: "W",
    competition: "Men's 1st XI",
  },
  {
    date: "11 May 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Beach FC",
    homeScore: 2,
    awayScore: 2,
    result: "D",
    competition: "Women's Team",
  },
];

const resultStyles: Record<string, { bg: string; text: string; label: string }> = {
  W: { bg: "#16a34a", text: "white", label: "Win" },
  D: { bg: "#ca8a04", text: "white", label: "Draw" },
  L: { bg: "#dc2626", text: "white", label: "Loss" },
};

export default function Results() {
  return (
    <section id="results" className="py-12 md:py-16 bg-[#04091d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-heading font-700 text-[#ffc200] uppercase tracking-widest text-sm mb-3">
            Powered by SportEasy
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-white text-center">
            Recent Results
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            Latest match results across all Bulldog squads.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {results.map((r) => {
            const style = resultStyles[r.result];
            return (
              <div key={r.date + r.homeTeam} className="result-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs font-heading uppercase tracking-wide">{r.date}</span>
                  <span
                    className="font-heading font-800 text-xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: style.bg, color: style.text }}
                  >
                    {style.label}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex-1 text-right">
                    <div className="font-heading font-800 text-sm uppercase tracking-wide text-white leading-tight">
                      {r.homeTeam}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-heading font-900 text-2xl text-[#ffc200]">{r.homeScore}</span>
                    <span className="text-white/30 font-heading font-700 text-lg">–</span>
                    <span className="font-heading font-900 text-2xl text-[#ffc200]">{r.awayScore}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-800 text-sm uppercase tracking-wide text-white leading-tight">
                      {r.awayTeam}
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-[#ffc200]/70 text-xs font-heading uppercase tracking-widest">
                    {r.competition}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SportEasy note */}
        <div className="text-center">
          <p className="text-white/30 text-xs mb-4">
            Full fixtures & stats managed via SportEasy
          </p>
          <a
            href="https://www.sporteasy.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-[#ffc200]/30 text-[#ffc200] px-6 py-3 rounded-xl font-heading font-700 text-sm uppercase tracking-wide hover:border-[#ffc200] hover:bg-[#ffc200]/10 transition-all duration-200"
          >
            Full Results Portal (Coming Soon)
          </a>
        </div>
      </div>
    </section>
  );
}
