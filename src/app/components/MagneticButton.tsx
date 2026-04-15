"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useContactModal } from "./ContactModalProvider";

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const { open: openContact } = useContactModal();

  const isContact = href.includes("contact");

  const onEnter = useCallback(() => {
    gsap.killTweensOf(fillRef.current);
    gsap.killTweensOf(textRef.current);

    const fill = fillRef.current;
    const hoverTextColor = fill
      ? getComputedStyle(fill).backgroundColor === "rgb(0, 0, 0)"
        ? "#fff"
        : "#000"
      : "#000";

    gsap.to(fillRef.current, {
      scaleY: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(textRef.current, {
      color: hoverTextColor,
      duration: 0.3,
    });
  }, []);

  const onLeave = useCallback(() => {
    gsap.killTweensOf(fillRef.current);
    gsap.killTweensOf(textRef.current);
    gsap.killTweensOf(wrapRef.current);
    gsap.killTweensOf(btnRef.current);
    gsap.to(wrapRef.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    gsap.to(fillRef.current, {
      scaleY: 0,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(textRef.current, {
      color: "",
      duration: 0.3,
      clearProps: "color",
    });
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(wrap, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out", overwrite: "auto" });
    gsap.to(btnRef.current, { x: x * 0.1, y: y * 0.1, duration: 0.3, ease: "power2.out", overwrite: "auto" });
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isContact) {
        e.preventDefault();
        openContact();
      }
    },
    [isContact, openContact]
  );

  const base =
    variant === "primary"
      ? "relative overflow-hidden rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.56px]"
      : "relative overflow-hidden rounded-3xl border border-white px-6 py-3 text-sm font-medium tracking-[-0.56px]";

  return (
    <div
      ref={wrapRef}
      className={`inline-block ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
    >
      <a
        ref={btnRef}
        href={isContact ? "#" : href}
        onClick={handleClick}
        className={`${base} flex items-center justify-center`}
      >
        <span
          ref={fillRef}
          className="btn-fill absolute inset-0 origin-bottom"
          style={{ transform: "scaleY(0)" }}
        />
        <span ref={textRef} className="btn-label relative z-10">
          {children}
        </span>
      </a>
    </div>
  );
}
