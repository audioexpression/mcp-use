import BulldogCrest from "./BulldogCrest";

const quickLinks = ["About", "Teams", "Results", "News", "Sponsors", "Join"];
const teams = ["Men's 1st XI", "Men's Social", "35+ Masters", "Women's Team", "Juniors", "Academy"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#04091d] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BulldogCrest size={52} />
              <div>
                <div className="font-heading font-900 text-white uppercase tracking-widest text-sm">
                  Bali Bulldogs
                </div>
                <div className="font-heading font-600 text-[#ffc200] uppercase tracking-widest text-xs">
                  Football Club
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Bali&apos;s leading football community. Founded 2020. Home of over 450 players at The Bulldogs Arena.
            </p>
            <div className="font-heading font-700 text-[#ffc200] text-sm italic mb-5">
              &ldquo;We Never Walk Alone&rdquo;
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/balibulldogsfc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#07122e] hover:bg-[#1a56db] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/BaliBulldogsFC/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#07122e] hover:bg-[#1a56db] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-heading font-800 text-sm uppercase tracking-widest text-[#ffc200] mb-5">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-white/50 hover:text-white text-sm transition-colors font-heading font-600 uppercase tracking-wide"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams */}
          <div>
            <div className="font-heading font-800 text-sm uppercase tracking-widest text-[#ffc200] mb-5">
              Our Teams
            </div>
            <ul className="space-y-2.5">
              {teams.map((team) => (
                <li key={team}>
                  <a
                    href="#teams"
                    className="text-white/50 hover:text-white text-sm transition-colors font-heading font-600 uppercase tracking-wide"
                  >
                    {team}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-800 text-sm uppercase tracking-widest text-[#ffc200] mb-5">
              Get in Touch
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#ffc200] mt-0.5">📍</span>
                <div className="text-white/50 text-sm">
                  The Bulldogs Arena<br />
                  Bali, Indonesia
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ffc200] mt-0.5">✉️</span>
                <a
                  href="mailto:info@balibulldogsfc.com"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  info@balibulldogsfc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ffc200] mt-0.5">🌐</span>
                <a
                  href="https://www.balibulldogsfc.com"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  www.balibulldogsfc.com
                </a>
              </li>
            </ul>

            {/* Sponsor CTA */}
            <div className="mt-6 p-4 rounded-xl border border-[#1a56db]/30 bg-[#07122e]">
              <div className="font-heading font-700 text-xs uppercase tracking-widest text-[#ffc200] mb-1">
                Become a Partner
              </div>
              <p className="text-white/40 text-xs mb-3">Support Bali Bulldogs FC</p>
              <a
                href="mailto:info@balibulldogsfc.com"
                className="btn-sunflower block text-center py-2 rounded-lg text-xs font-heading font-700 uppercase tracking-wide"
              >
                Sponsor Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white/30 text-xs font-heading uppercase tracking-wide">
            © {new Date().getFullYear()} Bali Bulldogs FC. All rights reserved.
          </div>
          <div className="text-white/20 text-xs font-heading uppercase tracking-wide">
            Est. 2020 · Bali, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
