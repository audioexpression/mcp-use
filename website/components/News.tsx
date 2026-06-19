const articles = [
  {
    date: "16 Jun 2026",
    category: "Club News",
    title: "Bulldogs Arena Expansion — New Pitches Coming This Season",
    excerpt:
      "We're thrilled to announce the expansion of The Bulldogs Arena with two new full-size pitches. Construction begins next month as we prepare for our biggest season yet.",
    color: "#1a56db",
  },
  {
    date: "10 Jun 2026",
    category: "Women's Team",
    title: "Women's Team Wins 5–0 in Dominant Display",
    excerpt:
      "The Bali Bulldogs Women's Team put on a clinical performance against Kuta Strikers, with hat-trick hero Sarah M. leading the charge. A massive result for the squad.",
    color: "#0d309e",
  },
  {
    date: "3 Jun 2026",
    category: "Juniors",
    title: "U12 Tournament: Bulldogs Pups Take Gold",
    excerpt:
      "Our U12 squad showed incredible heart in the Bali Youth Cup, topping the group and winning the final on penalties. The future of the Bulldogs is very bright.",
    color: "#ffc200",
  },
];

export default function News() {
  return (
    <section id="news" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
              Latest from the Club
            </p>
            <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d]">
              News &amp; Updates
            </h2>
          </div>
          <a
            href="#"
            className="text-[#1a56db] font-heading font-700 text-sm uppercase tracking-wide hover:text-[#ffc200] transition-colors"
          >
            All Articles →
          </a>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title} className="card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              {/* Colour band */}
              <div
                className="h-2 w-full"
                style={{ background: a.color }}
              />
              {/* Header image placeholder */}
              <div
                className="h-44 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${a.color}22 0%, ${a.color}44 100%)`,
                }}
              >
                <div className="font-heading font-900 text-5xl opacity-20" style={{ color: a.color }}>
                  BBFC
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-heading font-700 text-xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: a.color === "#ffc200" ? "#ffc200" : `${a.color}18`,
                      color: a.color === "#ffc200" ? "#04091d" : a.color,
                    }}
                  >
                    {a.category}
                  </span>
                  <span className="text-gray-400 text-xs">{a.date}</span>
                </div>

                <h3 className="font-heading font-800 text-lg uppercase leading-snug text-[#04091d] mb-3 flex-1">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{a.excerpt}</p>

                <a
                  href="#"
                  className="font-heading font-700 text-sm uppercase tracking-wide text-[#1a56db] hover:text-[#ffc200] transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
