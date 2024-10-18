'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface PriceContextType {
  minPrice: number | null;
  setMinPrice: (price: number | null) => void;
  maxPrice: number | null;
  setMaxPrice: (price: number | null) => void;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export const PriceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  return (
    <PriceContext.Provider value={{ minPrice, setMinPrice, maxPrice, setMaxPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePriceContext = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePriceContext must be used within a PriceProvider');
  }
  return context;
};
