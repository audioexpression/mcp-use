const pinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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
          {/* Map — shows current training location */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-96 bg-[#0a1a3a]">
            <iframe
              src="https://maps.google.com/maps?q=Jl.+Subak+Sari+No.72+Tibubeneng+Kuta+Utara+Bali&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title="Current training location"
            />
          </div>

          {/* Info panel */}
          <div className="space-y-4">

            {/* Current address */}
            <div className="rounded-2xl border border-[#ffc200]/40 bg-[#ffc200]/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-[#ffc200]">{pinIcon}</div>
                <span className="font-heading font-800 text-[#ffc200] text-xs uppercase tracking-widest">
                  Current Location
                </span>
                <span className="ml-auto font-heading font-700 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#ffc200] text-[#04091d]">
                  Until Aug 5
                </span>
              </div>
              <p className="text-white text-sm leading-relaxed mb-4">
                Jl. Subak Sari No.72<br />
                Tibubeneng, Kec. Kuta Utara<br />
                Kabupaten Badung, Bali 80361
              </p>
              <a
                href="https://maps.google.com/maps?q=Jl.+Subak+Sari+No.72+Tibubeneng+Kuta+Utara+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ffc200] text-xs font-heading font-700 uppercase tracking-wide hover:underline"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* New address */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-white/50">{pinIcon}</div>
                <span className="font-heading font-800 text-white/70 text-xs uppercase tracking-widest">
                  The Bulldogs Arena
                </span>
                <span className="ml-auto font-heading font-700 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#1a56db] text-white">
                  From Aug 6
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Jl. Tanah Sampi No.6<br />
                Kerobokan Kaja, Kec. Kuta Utara<br />
                Kabupaten Badung, Bali 80361
              </p>
              <a
                href="https://maps.app.goo.gl/BZR8UKHiUgne8ZmEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#1a56db] text-xs font-heading font-700 uppercase tracking-wide hover:underline"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Hours + WhatsApp */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4">
              <div>
                <div className="font-heading font-700 text-[#ffc200] uppercase tracking-wide text-xs mb-1">Training Hours</div>
                <p className="text-white/80 text-sm">Mon–Fri from 2:30 PM · Weekend fixtures vary</p>
              </div>
              <div>
                <div className="font-heading font-700 text-[#ffc200] uppercase tracking-wide text-xs mb-1">WhatsApp</div>
                <a
                  href="https://wa.me/6281384474406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  +62 813 8447 4406
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
