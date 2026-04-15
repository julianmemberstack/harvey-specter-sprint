"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { useContactModal } from "./ContactModalProvider";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { open: openContact } = useContactModal();

  const animateOpen = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    tl.current?.kill();

    const timeline = gsap.timeline();
    tl.current = timeline;

    timeline.fromTo(
      overlay,
      { clipPath: "circle(0% at calc(100% - 32px) 36px)" },
      {
        clipPath: "circle(150% at calc(100% - 32px) 36px)",
        duration: 0.6,
        ease: "power3.inOut",
      }
    );

    timeline.fromTo(
      linksRef.current.filter(Boolean),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
      },
      "-=0.25"
    );

    timeline.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
      "-=0.15"
    );
  }, []);

  const animateClose = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    tl.current?.kill();

    const timeline = gsap.timeline({
      onComplete: () => setOpen(false),
    });
    tl.current = timeline;

    timeline.to([...linksRef.current.filter(Boolean), ctaRef.current], {
      y: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.03,
      ease: "power2.in",
    });

    timeline.to(
      overlay,
      {
        clipPath: "circle(0% at calc(100% - 32px) 36px)",
        duration: 0.45,
        ease: "power3.inOut",
      },
      "-=0.1"
    );
  }, []);

  useEffect(() => {
    if (open) animateOpen();
  }, [open, animateOpen]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    animateClose();
  };

  const handleLinkClick = () => {
    animateClose();
  };

  const handleContactClick = () => {
    animateClose();
    setTimeout(() => openContact(), 500);
  };

  return (
    <>
      <button
        className="md:hidden relative z-50"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={open ? handleClose : handleOpen}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            className="nav-text"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor" />
          </svg>
        )}
      </button>

      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          style={{ clipPath: "circle(0% at calc(100% - 32px) 36px)" }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              ref={(el) => { linksRef.current[i] = el; }}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-semibold capitalize tracking-[-0.64px] text-white opacity-0"
            >
              {link.label}
            </a>
          ))}
          <button
            ref={(el) => { linksRef.current[navLinks.length] = el; }}
            onClick={handleContactClick}
            className="text-2xl font-semibold capitalize tracking-[-0.64px] text-white opacity-0"
          >
            Contact
          </button>
          <button
            ref={ctaRef}
            onClick={handleContactClick}
            className="mt-4 flex items-center justify-center rounded-3xl border border-white px-6 py-3 text-sm font-medium tracking-[-0.56px] text-white btn-outline opacity-0"
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
