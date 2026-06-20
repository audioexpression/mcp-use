"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What age can my child start?",
    a: "We welcome players from as young as 2.5–3 years old in our Toddlers program. From there we have Kindy & U6, U8, U10, U12, and beyond — there's a squad for every stage.",
  },
  {
    q: "Do you offer a trial session?",
    a: "Yes! We encourage new players to come along and try a session before committing. Just message us on WhatsApp to arrange a time and we'll sort the rest.",
  },
  {
    q: "What kit or equipment does my child need?",
    a: "For the first trial, just bring boots, shin pads, and appropriate sports clothing. Club kits are available once registered — we'll let you know sizing and options when you sign up.",
  },
  {
    q: "How much does it cost to join?",
    a: "Fees vary by program and age group. Contact us via WhatsApp for current pricing — we aim to keep the club accessible for everyone and have options for all budgets.",
  },
  {
    q: "Are there teams for girls?",
    a: "Absolutely. We have U12 Girls, U18 Girls, and a Women's squad. Girls are also welcome in all co-ed junior and social programs. We're actively growing the women's side of the club.",
  },
  {
    q: "Where exactly is The Bulldogs Arena?",
    a: "The Bulldogs Arena is our home ground in Bali. Full address and directions are in the Find Us section below — or drop us a WhatsApp and we'll send you a pin.",
  },
  {
    q: "How do I register?",
    a: "The easiest way is to message us on WhatsApp using the Register button on this page. We'll guide you through the process, confirm your team placement, and get you started.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#f0f4ff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading font-700 text-[#1a56db] uppercase tracking-widest text-sm mb-3">
            Got Questions?
          </p>
          <h2 className="accent-bar font-heading font-900 text-4xl md:text-5xl uppercase leading-tight text-[#04091d] text-center">
            FAQ
          </h2>
          <p className="mt-4 text-gray-500">
            The most common things people ask before joining the Bulldogs.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-heading font-700 text-[#04091d] text-sm uppercase tracking-wide">
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1a56db] text-white flex items-center justify-center transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-3">Still have a question?</p>
          <a
            href="https://wa.me/6281384474406?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Bali%20Bulldogs%20FC!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal inline-flex px-6 py-3 rounded-xl text-sm font-heading font-700 uppercase tracking-wider"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
