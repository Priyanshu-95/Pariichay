"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  selectedService?: string;
  openModal: (serviceName?: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(undefined);
  };

  return (
    <BookingModalContext.Provider value={{ isOpen, selectedService, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}
