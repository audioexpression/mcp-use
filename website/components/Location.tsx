const details = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "The Bulldogs Arena\nJl. [Street], [Area]\nBali, Indonesia",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Training Hours",
    value: "Mon–Fri from 2:30 PM\nWeekend fixtures vary",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 813 8447 4406",
    link: "https://wa.me/6281384474406",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-12 md:py-16 bg-[#04091d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading font-700 text-[#ffc200] uppercase tracking-widest text-sm mb-3">
            Come Visit Us
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-white text-center">
            Find Us
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            The Bulldogs Arena is our home — come down, watch a session, and meet the family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 bg-[#0a1a3a]">
            <iframe
              src="https://maps.google.com/maps?q=Bali+Bulldogs+FC&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title="The Bulldogs Arena location"
            />
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {details.map((d, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a56db]/20 text-[#ffc200] flex items-center justify-center flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="font-heading font-700 text-[#ffc200] uppercase tracking-wide text-xs mb-1">
                    {d.label}
                  </div>
                  {d.link ? (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white text-sm leading-relaxed whitespace-pre-line transition-colors"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://maps.app.goo.gl/BZR8UKHiUgne8ZmEA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-sunflower px-6 py-3 rounded-xl text-sm font-heading font-700 uppercase tracking-wider mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
