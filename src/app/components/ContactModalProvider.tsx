"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ContactModal from "./ContactModal";

const ContactModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useContactModal() {
  return useContext(ContactModalContext);
}

export default function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      <ContactModal open={isOpen} onClose={close} />
    </ContactModalContext.Provider>
  );
}
