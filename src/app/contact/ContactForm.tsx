"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    const children = Array.from(formRef.current.children);
    gsap.fromTo(
      children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-2 opacity-0">
          <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
            Name
          </label>
          <input
            type="text"
            required
            className="border-b border-[#1f1f1f]/20 pb-3 text-lg text-black outline-none focus:border-black transition-colors bg-transparent"
            placeholder="Your name"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 opacity-0">
          <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
            Email
          </label>
          <input
            type="email"
            required
            className="border-b border-[#1f1f1f]/20 pb-3 text-lg text-black outline-none focus:border-black transition-colors bg-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 opacity-0">
        <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
          Project type
        </label>
        <select className="border-b border-[#1f1f1f]/20 pb-3 text-lg text-black outline-none focus:border-black transition-colors bg-transparent appearance-none">
          <option value="">Select a service</option>
          <option value="branding">Brand Discovery</option>
          <option value="web">Web Design &amp; Dev</option>
          <option value="marketing">Marketing</option>
          <option value="photography">Photography</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 opacity-0">
        <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
          Budget range
        </label>
        <select className="border-b border-[#1f1f1f]/20 pb-3 text-lg text-black outline-none focus:border-black transition-colors bg-transparent appearance-none">
          <option value="">Select a range</option>
          <option value="5k-10k">$5k — $10k</option>
          <option value="10k-25k">$10k — $25k</option>
          <option value="25k-50k">$25k — $50k</option>
          <option value="50k+">$50k+</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 opacity-0">
        <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
          Message
        </label>
        <textarea
          rows={5}
          required
          className="border-b border-[#1f1f1f]/20 pb-3 text-lg text-black outline-none focus:border-black transition-colors bg-transparent resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="self-start rounded-3xl bg-black px-8 py-4 text-base font-medium tracking-[-0.56px] text-white hover:scale-105 active:scale-95 transition-transform mt-4 opacity-0"
      >
        Send message
      </button>
    </form>
  );
}
