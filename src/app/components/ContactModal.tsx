"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const animateIn = useCallback(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    tl.fromTo(
      panelRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.5, ease: "power3.out" },
      0.1
    );
    tl.fromTo(
      contentRef.current?.children ? Array.from(contentRef.current.children) : [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      0.3
    );
  }, []);

  const animateOut = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(
      panelRef.current,
      { y: "100%", duration: 0.4, ease: "power3.in" }
    );
    tl.to(overlayRef.current, { opacity: 0, duration: 0.25 }, 0.15);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      animateIn();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, animateIn]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={animateOut}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto"
      >
        <div ref={contentRef} className="px-6 py-10 md:px-12 md:py-16 max-w-[640px] mx-auto">
          {/* Close button */}
          <button
            onClick={animateOut}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Header */}
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f]/50 uppercase leading-[1.1] mb-2">
            [ get in touch ]
          </p>
          <h2 className="text-[32px] md:text-[48px] font-light text-black tracking-[-0.04em] leading-[1.1] uppercase mb-8">
            Let&apos;s{" "}
            <span className="font-black italic">talk</span>
          </h2>

          {/* Form */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              animateOut();
            }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="border-b border-[#1f1f1f]/20 pb-2 text-base text-black outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="Your name"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="border-b border-[#1f1f1f]/20 pb-2 text-base text-black outline-none focus:border-black transition-colors bg-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                Project type
              </label>
              <select
                className="border-b border-[#1f1f1f]/20 pb-2 text-base text-black outline-none focus:border-black transition-colors bg-transparent appearance-none"
              >
                <option value="">Select a service</option>
                <option value="branding">Brand Discovery</option>
                <option value="web">Web Design &amp; Dev</option>
                <option value="marketing">Marketing</option>
                <option value="photography">Photography</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[family-name:var(--font-geist-mono)] text-xs text-[#1f1f1f]/50 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="border-b border-[#1f1f1f]/20 pb-2 text-base text-black outline-none focus:border-black transition-colors bg-transparent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="self-start rounded-3xl bg-black px-6 py-3 text-sm font-medium tracking-[-0.56px] text-white hover:scale-105 active:scale-95 transition-transform mt-2"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
