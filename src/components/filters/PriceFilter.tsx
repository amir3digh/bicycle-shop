'use client';
import { usePriceContext } from '@/src/context/PriceContext';

export const PriceFilter = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = usePriceContext();

  return (
    <div className="w-full items-end justify-end">
      <div className="flex w-full flex-col gap-2">
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={minPrice || undefined}
          onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          placeholder="Minimum Price"
          min={0}
        />
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={maxPrice || undefined}
          onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          placeholder="Maximum Price"
          min={0}
        />
      </div>
    </div>
  );
};
