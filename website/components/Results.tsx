const results = [
  {
    date: "15 Jun 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Canggu FC",
    homeScore: 3,
    awayScore: 1,
    result: "win" as const,
    competition: "Men's 1st XI",
  },
  {
    date: "8 Jun 2026",
    homeTeam: "Seminyak United",
    awayTeam: "Bali Bulldogs",
    homeScore: 2,
    awayScore: 2,
    result: "draw" as const,
    competition: "Men's Social",
  },
  {
    date: "1 Jun 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Kuta Strikers",
    homeScore: 5,
    awayScore: 0,
    result: "win" as const,
    competition: "Women's Team",
  },
  {
    date: "25 May 2026",
    homeTeam: "Ubud Warriors",
    awayTeam: "Bali Bulldogs",
    homeScore: 3,
    awayScore: 2,
    result: "loss" as const,
    competition: "35+ Masters",
  },
  {
    date: "18 May 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Denpasar City",
    homeScore: 1,
    awayScore: 1,
    result: "draw" as const,
    competition: "Men's 1st XI",
  },
  {
    date: "11 May 2026",
    homeTeam: "Bali Bulldogs",
    awayTeam: "Nusa Dua FC",
    homeScore: 4,
    awayScore: 2,
    result: "win" as const,
    competition: "Men's 1st XI",
  },
];

const resultMeta: Record<"win" | "draw" | "loss", { label: string; bg: string; text: string }> = {
  win: { label: "W", bg: "#16a34a", text: "white" },
  draw: { label: "D", bg: "#ffc200", text: "#04091d" },
  loss: { label: "L", bg: "#dc2626", text: "white" },
};

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-28 bg-[#04091d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="font-heading font-700 text-[#ffc200] uppercase tracking-widest text-sm mb-3">
              SportEasy Data
            </p>
            <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-white">
              Recent Results
            </h2>
          </div>
          <div className="text-white/50 text-sm max-w-xs">
            Results pulled from SportEasy. Full integration &amp; standings coming soon.
          </div>
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {results.map((r, i) => {
            const meta = resultMeta[r.result];
            const bulldogsHome = r.homeTeam === "Bali Bulldogs";
            return (
              <div
                key={i}
                className={`result-card ${r.result} bg-[#07122e] rounded-xl p-5 flex items-center gap-4`}
              >
                {/* Result badge */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-heading font-900 text-lg flex-shrink-0"
                  style={{ background: meta.bg, color: meta.text }}
                >
                  {meta.label}
                </div>

                {/* Match info */}
                <div className="flex-1 min-w-0">
                  <div className="text-white/40 text-xs font-heading font-600 uppercase tracking-wide mb-1">
                    {r.competition} · {r.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-heading font-700 text-sm truncate ${
                        bulldogsHome ? "text-[#ffc200]" : "text-white"
                      }`}
                    >
                      {r.homeTeam}
                    </span>
                    <span className="font-heading font-900 text-white text-base">
                      {r.homeScore} – {r.awayScore}
                    </span>
                    <span
                      className={`font-heading font-700 text-sm truncate ${
                        !bulldogsHome ? "text-[#ffc200]" : "text-white"
                      }`}
                    >
                      {r.awayTeam}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SportEasy CTA */}
        <div className="text-center">
          <div className="inline-block bg-[#07122e] border border-[#1a56db]/40 rounded-2xl p-6 max-w-lg">
            <div className="text-[#ffc200] font-heading font-700 text-sm uppercase tracking-widest mb-2">
              Coming Soon
            </div>
            <h3 className="font-heading font-800 text-white text-xl uppercase mb-3">
              Full Results &amp; Standings Portal
            </h3>
            <p className="text-white/50 text-sm mb-5">
              We&apos;re building a native results, fixtures, and stats hub — powered by your SportEasy data but living right here on your site.
            </p>
            <a
              href="https://www.sporteasy.net"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal inline-flex px-6 py-3 rounded-lg text-sm font-heading font-700 uppercase tracking-wide"
            >
              View on SportEasy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
