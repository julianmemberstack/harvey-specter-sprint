"use client";

import { useState, useRef, useCallback } from "react";

interface Testimonial {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  name: string;
}

export default function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const touchDelta = useRef(0);

  const goTo = useCallback(
    (i: number) => setActive(Math.max(0, Math.min(i, testimonials.length - 1))),
    [testimonials.length]
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };
  const onTouchEnd = () => {
    if (touchDelta.current < -40) goTo(active + 1);
    else if (touchDelta.current > 40) goTo(active - 1);
  };

  /* Each card is 85vw + 16px gap. Shift track left by active * (85vw + 16px),
     then offset by (100vw - 85vw) / 2 = 7.5vw to center the active card. */
  const translateX = `calc(${active} * (-85vw - 16px) + 7.5vw)`;

  return (
    <div className="flex flex-col gap-6">
      {/* Track wrapper — breaks out of section padding so cards bleed to viewport edge */}
      <div
        className="-mx-4 px-4 py-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw]"
              style={{
                transform: `rotate(${i % 2 === 0 ? -3.5 : 2}deg)`,
              }}
            >
              <div className="bg-[#f1f1f1] border border-[#ddd] rounded p-6 flex flex-col gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.logo}
                  alt=""
                  style={{ width: t.logoW, height: t.logoH }}
                  className="object-contain"
                />
                <p className="text-lg text-[#1f1f1f] leading-[1.3] tracking-[-0.72px]">
                  {t.quote}
                </p>
                <p className="text-base font-black uppercase text-black tracking-[-0.64px] leading-[1.1]">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === active ? "bg-black" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
