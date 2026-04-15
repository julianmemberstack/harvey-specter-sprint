"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileMenu from "./MobileMenu";
import MagneticButton from "./MagneticButton";
import { useContactModal } from "./ContactModalProvider";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

function getTheme(navBottom: number): "dark" | "light" {
  const darkSections = document.querySelectorAll<HTMLElement>("[data-nav-dark]");
  for (const section of darkSections) {
    const rect = section.getBoundingClientRect();
    if (rect.top < navBottom && rect.bottom > navBottom) {
      return "dark";
    }
  }
  return "light";
}

export default function StickyNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const navHeight = 72;

    const update = () => {
      const theme = getTheme(navHeight);
      nav.setAttribute("data-theme", theme);
    };

    // Run on scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: update,
    });

    // Initial check
    update();

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.onUpdate === update) t.kill();
      });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      data-theme="light"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-6 md:px-8"
    >
      <span className="text-base font-semibold capitalize tracking-[-0.64px] nav-text">
        H.Studio
      </span>

      {/* Desktop nav links */}
      <DesktopLinks />

      {/* Desktop CTA */}
      <div className="hidden md:block nav-btn-wrap">
        <MagneticButton href="#contact">
          Let&apos;s talk
        </MagneticButton>
      </div>

      {/* Mobile hamburger */}
      <MobileMenu />
    </nav>
  );
}

function DesktopLinks() {
  const { open } = useContactModal();
  return (
    <div className="hidden md:flex items-center gap-14 text-base font-semibold capitalize tracking-[-0.64px] nav-text">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.label}
        </a>
      ))}
      <button onClick={open} className="nav-link cursor-pointer">
        Contact
      </button>
    </div>
  );
}
