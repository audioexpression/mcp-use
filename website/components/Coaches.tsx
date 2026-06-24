const coaches = [
  { initials: "J",  name: "Jon",      role: "Head Coach",      color: "#ffc200", text: "#04091d" },
  { initials: "N",  name: "Nacho",    role: "Senior Coach",    color: "#1a56db", text: "#ffffff" },
  { initials: "T",  name: "Trisna",   role: "Senior Coach",    color: "#1a56db", text: "#ffffff" },
  { initials: "N",  name: "Nabila",   role: "Senior Coach",    color: "#1a56db", text: "#ffffff" },
  { initials: "J",  name: "Joni",     role: "Senior",          color: "#091c5f", text: "#ffffff" },
  { initials: "E",  name: "Eka",      role: "Assistant Coach", color: "#04091d", text: "#ffffff" },
  { initials: "S",  name: "Salander", role: "Assistant Coach", color: "#04091d", text: "#ffffff" },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
            The People Behind the Club
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] text-center">
            Coaching Staff
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Dedicated coaches and staff who make Bali Bulldogs FC the club it is.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((c, i) => (
            <div
              key={i}
              className="card-lift flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm bg-white"
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-heading font-900"
                style={{
                  background: c.color,
                  color: c.text,
                }}
              >
                {c.initials}
              </div>
              <div>
                <div className="font-heading font-800 text-[#04091d] text-base uppercase tracking-wide">
                  {c.name}
                </div>
                <div className="text-gray-500 text-sm mt-0.5">{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          Want to join the coaching team?{" "}
          <a
            href="https://wa.me/6281384474406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1a56db] hover:underline"
          >
            Get in touch via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
