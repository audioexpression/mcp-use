const stats = [
  { icon: "🏟️", value: "The Bulldogs Arena", label: "Home Ground" },
  { icon: "⚽", value: "300+", label: "Active Players" },
  { icon: "🏆", value: "15", label: "Teams" },
  { icon: "📅", value: "2020", label: "Year Founded" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#1a56db] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-4">
              <span className="text-2xl mb-1">{s.icon}</span>
              <div className="font-heading font-800 text-xl md:text-2xl text-[#ffc200] tracking-wide">
                {s.value}
              </div>
              <div className="font-heading font-600 text-xs uppercase tracking-widest text-white/70 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
