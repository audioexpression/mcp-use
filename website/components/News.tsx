const articles = [
  {
    date: "16 Jun 2026",
    category: "Club News",
    categoryColor: "#1a56db",
    title: "Bulldogs Arena Expansion — New Pitches Coming This Season",
    excerpt: "Exciting times at The Bulldogs Arena as we announce the addition of two new full-size pitches, set to open ahead of the upcoming season.",
    readTime: "2 min read",
  },
  {
    date: "10 Jun 2026",
    category: "Women's Team",
    categoryColor: "#0d309e",
    title: "Women's Team Secures Three Wins in a Row — Season Highlights",
    excerpt: "Our Women's squad is on fire. Three consecutive victories have pushed them to the top of the local standings, with more to come.",
    readTime: "3 min read",
  },
  {
    date: "3 Jun 2026",
    category: "Juniors",
    categoryColor: "#b8920a",
    title: "Kindy Kick-Off: 40 New Junior Players Join the Bulldogs Family",
    excerpt: "Our Junior program keeps growing. This month we welcomed 40 new Kindy and U6 players — the next generation of Bulldogs is here.",
    readTime: "2 min read",
  },
];

export default function News() {
  return (
    <section id="news" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
            Latest from the Club
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] text-center">
            Club News
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.title} className="card-lift bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
              {/* Colour band */}
              <div className="h-2" style={{ background: article.categoryColor }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-heading font-700 text-xs uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: article.categoryColor + "18", color: article.categoryColor }}
                  >
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs">{article.date}</span>
                </div>

                <h3 className="font-heading font-800 text-base uppercase leading-snug text-[#04091d] mb-3 flex-1">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-xs font-heading uppercase tracking-wide">{article.readTime}</span>
                  <a
                    href="#"
                    className="text-[#1a56db] text-xs font-heading font-700 uppercase tracking-wide hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex border-2 border-[#1a56db] text-[#1a56db] px-7 py-3 rounded-xl font-heading font-700 text-sm uppercase tracking-wide hover:bg-[#1a56db] hover:text-white transition-all duration-200"
          >
            All News →
          </a>
        </div>
      </div>
    </section>
  );
}
