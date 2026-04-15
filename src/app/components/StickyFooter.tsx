"use client";

import { useRef, useEffect, useState } from "react";

export default function StickyFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const footerRef = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const measure = () => setHeight(footer.offsetHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      {/* Spacer that pushes content up by the footer's height */}
      <div style={{ height }} />
      <footer
        ref={footerRef}
        data-nav-dark
        id="contact"
        className={`fixed bottom-0 left-0 right-0 ${className}`}
      >
        {children}
      </footer>
    </>
  );
}
