"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface NewsItem {
  img: string;
  title?: string;
  excerpt?: string;
}

export default function NewsSlider({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const touchDelta = useRef(0);

  const goTo = useCallback(
    (i: number) => setActive(Math.max(0, Math.min(i, items.length - 1))),
    [items.length]
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

  const translateX = `calc(${active} * (-85vw - 16px) + 7.5vw)`;

  return (
    <div className="flex flex-col gap-6">
      <div
        className="-mx-4 px-4 py-2"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {items.map((item, i) => (
            <div key={i} className="shrink-0 w-[85vw] flex flex-col gap-4">
              <div className="relative w-full aspect-[353/469] overflow-hidden">
                <Image
                  src={item.img}
                  alt="News"
                  fill
                  className="object-cover"
                />
              </div>
              {item.title && (
                <h3 className="text-lg font-bold text-black tracking-[-0.04em] leading-[1.2]">
                  {item.title}
                </h3>
              )}
              <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.56px]">
                {item.excerpt || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 border-b border-black pb-1 self-start text-sm font-medium text-black tracking-[-0.56px]"
              >
                Read more
                <svg
                  className="w-[18px] h-[18px] -rotate-90"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to news item ${i + 1}`}
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
