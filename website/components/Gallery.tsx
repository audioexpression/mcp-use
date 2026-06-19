"use client";

import { useState } from "react";

const photos = [
  {
    id: 1,
    caption: "Training at The Bulldogs Arena",
    category: "Training",
    span: "col-span-2 row-span-2",
    aspect: "aspect-square",
    gradient: "from-[#060f30] to-[#1a56db]",
    icon: "⚽",
  },
  {
    id: 2,
    caption: "Junior Kick-Off Day",
    category: "Juniors",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#b8920a] to-[#ffc200]",
    icon: "⭐",
  },
  {
    id: 3,
    caption: "Women's Squad",
    category: "Women's Team",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#091c5f] to-[#0d309e]",
    icon: "💪",
  },
  {
    id: 4,
    caption: "Masters on the Pitch",
    category: "35+ Masters",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#04091d] to-[#122460]",
    icon: "🦁",
  },
  {
    id: 5,
    caption: "Club Social Night",
    category: "Community",
    span: "col-span-2 row-span-1",
    aspect: "aspect-[16/7]",
    gradient: "from-[#1243c0] to-[#1a56db]",
    icon: "🎉",
  },
  {
    id: 6,
    caption: "End of Season Awards",
    category: "Achievement",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#060f30] to-[#091c5f]",
    icon: "🏆",
  },
  {
    id: 7,
    caption: "Academy Session",
    category: "Academy",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#0c2680] to-[#1a56db]",
    icon: "🎓",
  },
  {
    id: 8,
    caption: "The Bulldogs Family",
    category: "Club Culture",
    span: "col-span-1 row-span-1",
    aspect: "aspect-[4/3]",
    gradient: "from-[#b8920a] to-[#ffc200]",
    icon: "🐾",
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 md:py-16 bg-[#04091d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-heading font-700 text-[#ffc200] uppercase tracking-widest text-sm mb-3">
            The Bulldogs Life
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-white text-center">
            Our Gallery
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-sm">
            From training sessions to trophies — a glimpse into life at Bali Bulldogs FC.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onMouseEnter={() => setHovered(photo.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Placeholder image area */}
              <div className={`w-full ${photo.aspect} md:h-full md:aspect-auto relative`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} transition-transform duration-500 group-hover:scale-105`}
                >
                  {/* Club pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #ffc200 0, #ffc200 1px, transparent 0, transparent 50%)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  {/* Upload prompt */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-5xl mb-2 opacity-40">{photo.icon}</div>
                    <div className="text-white/20 text-xs font-heading uppercase tracking-widest text-center px-4">
                      Add Photo
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[#04091d]/70 flex flex-col items-end justify-end p-4 transition-opacity duration-300 ${
                    hovered === photo.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span
                    className="font-heading font-700 text-xs uppercase tracking-widest px-2.5 py-1 rounded-full mb-2"
                    style={{ background: "#ffc200", color: "#04091d" }}
                  >
                    {photo.category}
                  </span>
                  <p className="font-heading font-800 text-sm text-white uppercase tracking-wide leading-tight">
                    {photo.caption}
                  </p>
                </div>

                {/* Always-visible category pill */}
                <div
                  className={`absolute bottom-3 left-3 transition-opacity duration-300 ${
                    hovered === photo.id ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="font-heading font-700 text-xs uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/40 text-white/70 backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-white/30 text-xs mb-4">
            Replace placeholders with your own photos — just swap the background with a Next.js{" "}
            <code className="text-white/40">Image</code> component
          </p>
          <a
            href="https://www.instagram.com/balibulldogsfc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#ffc200]/30 text-[#ffc200] px-7 py-3 rounded-xl font-heading font-700 text-sm uppercase tracking-wide hover:border-[#ffc200] hover:bg-[#ffc200]/10 transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
