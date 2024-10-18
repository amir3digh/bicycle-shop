import { useBrandContext } from 'Context';

export const BrandSelect = () => {
  const { selectedBrand, setSelectedBrand, brands, loading, error } = useBrandContext();

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(Number(event.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm">Brand</label>
      <select className="w-full p-2 border rounded" value={selectedBrand || ''} onChange={handleBrandChange}>
        <option value="">Select a brand</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.title}
          </option>
        ))}
      </select>
    </div>
  );
};
