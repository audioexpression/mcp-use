import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-4">
              Our Story
            </p>
            <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] mb-6">
              More Than a Football Club
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2020, Bali Bulldogs FC was built on a simple belief — football is for everyone. What started as a
              small group of passionate players has grown into Bali&apos;s largest football community, with over 450 players
              calling The Bulldogs Arena home.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From our youngest Kindy players taking their first kicks to our senior squads competing with pride, the Bulldogs
              are more than a club — we&apos;re a family. Our motto isn&apos;t just words: <em>&quot;We Never Walk Alone.&quot;</em>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🐾", title: "Community First", desc: "Building lasting bonds on and off the pitch" },
                { icon: "📍", title: "The Bulldogs Arena", desc: "Our very own home ground in the heart of Bali" },
                { icon: "👶", title: "From Kindy Up", desc: "Junior programs for every age group" },
                { icon: "🌏", title: "Global Family", desc: "Players from across the world, one team" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-[#f0f4ff]">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-heading font-700 text-[#04091d] text-sm uppercase tracking-wide">
                      {item.title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#join"
              className="btn-royal inline-flex px-7 py-3.5 rounded-xl text-sm font-heading font-700 uppercase tracking-wider"
            >
              Join Our Family
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main image placeholder */}
            <div
              className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #060f30 0%, #1243c0 50%, #1a56db 100%)",
              }}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #ffc200 0, #ffc200 1px, transparent 0, transparent 50%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <Image
                  src="/logo.png"
                  alt="Bali Bulldogs FC"
                  width={260}
                  height={260}
                  className="object-contain mb-4"
                />
                <div className="font-heading font-700 text-xl text-[#ffc200]">The Bulldogs Arena</div>
                <div className="text-white/60 text-sm mt-2">Our Home. Our Pride.</div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#ffc200] text-[#04091d] rounded-2xl p-5 shadow-xl">
              <div className="font-heading font-900 text-4xl">450+</div>
              <div className="font-heading font-600 text-xs uppercase tracking-widest mt-1">Players &amp; Growing</div>
            </div>

            {/* Floating year badge */}
            <div className="absolute -top-4 -right-4 bg-[#04091d] text-white rounded-2xl p-4 shadow-xl border border-[#1a56db]">
              <div className="font-heading font-900 text-2xl text-[#ffc200]">2020</div>
              <div className="font-heading font-600 text-xs uppercase tracking-widest text-white/60">Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
