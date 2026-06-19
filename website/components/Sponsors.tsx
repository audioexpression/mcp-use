const tiers = [
  {
    name: "Gold Partner",
    price: "$2,500 / season",
    color: "#ffc200",
    textColor: "#04091d",
    perks: [
      "Logo on all team jerseys",
      "Premium website placement",
      "Social media shoutouts (weekly)",
      "Match day banner at The Bulldogs Arena",
      "4 VIP match day passes",
      "Named sponsor in all club communications",
    ],
  },
  {
    name: "Silver Partner",
    price: "$1,200 / season",
    color: "#1a56db",
    textColor: "white",
    perks: [
      "Logo on training kit",
      "Website sponsor page feature",
      "Monthly social media mention",
      "2 match day passes",
      "Club newsletter inclusion",
    ],
  },
  {
    name: "Bronze Partner",
    price: "$500 / season",
    color: "#091c5f",
    textColor: "white",
    perks: [
      "Logo on website sponsor page",
      "Bi-monthly social media mention",
      "1 match day pass",
      "Club newsletter inclusion",
    ],
  },
];

const currentSponsors = [
  { tier: "Gold", name: "Your Logo Here", slot: 1 },
  { tier: "Gold", name: "Your Logo Here", slot: 2 },
  { tier: "Silver", name: "Your Logo Here", slot: 3 },
  { tier: "Silver", name: "Your Logo Here", slot: 4 },
  { tier: "Bronze", name: "Your Logo Here", slot: 5 },
  { tier: "Bronze", name: "Your Logo Here", slot: 6 },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-12 md:py-16 bg-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
            Support the Bulldogs
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] text-center">
            Become a Sponsor
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Partner with Bali Bulldogs FC and put your brand in front of a growing community of 450+ active members, their families,
            and thousands of followers across social media. We&apos;re Bali&apos;s #1 football club — let&apos;s grow together.
          </p>
        </div>

        {/* Current sponsors */}
        <div className="mb-10">
          <div className="text-center mb-5">
            <span className="font-heading font-700 text-xs uppercase tracking-widest text-gray-400">Current Partners</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {currentSponsors.map((s) => (
              <div
                key={s.slot}
                className="flex items-center justify-center rounded-xl border-2 border-dashed bg-white text-center px-6 py-4 min-w-[140px]"
                style={{
                  borderColor: s.tier === "Gold" ? "#ffc200" : s.tier === "Silver" ? "#1a56db" : "#091c5f",
                }}
              >
                <div>
                  <div
                    className="font-heading font-900 text-xs uppercase tracking-widest mb-1"
                    style={{ color: s.tier === "Gold" ? "#b8920a" : s.tier === "Silver" ? "#1a56db" : "#091c5f" }}
                  >
                    {s.tier}
                  </div>
                  <div className="text-gray-300 text-xs font-heading uppercase tracking-wide">{s.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`card-lift rounded-2xl overflow-hidden shadow-lg ${i === 0 ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Header */}
              <div
                className="px-6 pt-8 pb-6"
                style={{ background: tier.color }}
              >
                {i === 0 && (
                  <div className="font-heading font-700 text-xs uppercase tracking-widest bg-[#04091d] text-[#ffc200] px-3 py-1 rounded-full inline-block mb-3">
                    Most Popular
                  </div>
                )}
                <div className="font-heading font-800 text-xl uppercase tracking-wide mb-1"
                  style={{ color: tier.textColor }}>
                  {tier.name}
                </div>
                <div className="font-heading font-900 text-3xl" style={{ color: tier.textColor }}>
                  {tier.price}
                </div>
              </div>

              {/* Perks */}
              <div className="bg-white p-6 flex-1">
                <ul className="space-y-3 mb-6">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-[#ffc200] font-bold mt-0.5 flex-shrink-0">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6281384474406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl font-heading font-700 text-sm uppercase tracking-wide border-2 border-[#1a56db] text-[#1a56db] hover:bg-[#1a56db] hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom / community note */}
        <div className="bg-[#04091d] rounded-2xl p-8 text-center">
          <div className="font-heading font-700 text-[#ffc200] uppercase tracking-widest text-sm mb-3">
            Custom Packages Available
          </div>
          <h3 className="font-heading font-900 text-white text-2xl uppercase mb-3">
            Want Something Tailored?
          </h3>
          <p className="text-white/50 text-sm max-w-lg mx-auto mb-5">
            We can build a sponsorship package that fits your brand, budget, and goals. Kit sponsors, match sponsors, pitch naming rights — let&apos;s talk.
          </p>
          <a
            href="https://wa.me/6281384474406"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sunflower inline-flex px-8 py-3.5 rounded-xl text-sm font-heading font-700 uppercase tracking-wider"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
