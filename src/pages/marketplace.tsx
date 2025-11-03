import { useEffect, useState } from 'react';

// Define TypeScript interfaces for the agricultural product data structure
interface Product {
  id: string;
  title: string;
  cropType: string;
  farmer: string;
  farmId: string;
  location: string;
  pricePerKg: number;
  availableKg: number;
  freshnessDays: number;
  organic: boolean;
  harvestDate: string;
  image: string;
  rating: number;
  verified: boolean;
  description: string;
}

export default function Marketplace() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCropType, setSelectedCropType] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/agrotech__mock.json');
        const data = await res.json();
        const cleaned: Product[] = Array.isArray(data) ? data : [];
        setProducts(cleaned);
        setFiltered(cleaned);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    let results = products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.cropType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (maxPrice) {
      results = results.filter((product: Product) =>
        product.pricePerKg <= Number(maxPrice)
      );
    }

    if (selectedRating) {
      results = results.filter((product: Product) =>
        product.rating >= Number(selectedRating)
      );
    }

    if (selectedCropType) {
      results = results.filter((product: Product) =>
        product.cropType === selectedCropType
      );
    }

    setFiltered(results);
    setCurrentPage(1);
  }, [searchTerm, maxPrice, selectedRating, selectedCropType, products]);

  // Get unique crop types for filter dropdown
  const cropTypes = [...new Set(products.map(product => product.cropType))].sort();

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-r from-lime-50 to-lime-100 p-6 max-md:p-4 max-sm:p-3">
      {/* Header */}
      <div className="mt-12 max-md:mb-6 max-sm:mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 max-md:text-2xl max-sm:text-xl max-sm:mb-1">
          Agricultural Marketplace
        </h1>
        <p className="text-gray-600 max-sm:text-sm">
          Discover fresh produce from African farms
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4 max-md:mb-6 max-md:space-y-3 max-sm:mb-4 max-sm:space-y-2">
        <input
          type="text"
          placeholder="Search products, locations, or crop types..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 max-sm:gap-2">
          <input
            type="number"
            placeholder="Max Price (per kg)"
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <select
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
          <select
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
            onChange={(e) => setSelectedCropType(e.target.value)}
          >
            <option value="">All Crop Types</option>
            {cropTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 max-md:mb-4 max-sm:mb-3">
        <p className="text-gray-600 max-sm:text-sm">
          Showing {paginatedProducts.length} of {filtered.length} products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-6 max-sm:gap-4">
        {paginatedProducts.map((product: Product) => (
          <div key={product.id} className="bg-white shadow-sm rounded-sm  hover:shadow-xl transition-shadow duration-300 max-sm:shadow-sm">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-56 object-cover max-md:h-48 max-sm:h-40" 
                  loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-700 max-sm:top-2 max-sm:right-2 max-sm:px-1 max-sm:text-xs">
                {product.freshnessDays} days fresh
              </div>
              {product.organic && (
                <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold max-sm:top-2 max-sm:left-2 max-sm:px-1 max-sm:text-xs">
                  Organic
                </div>
              )}
            </div>
            
            <div className="p-6 max-md:p-4 max-sm:p-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2 max-md:text-lg max-sm:text-base max-sm:mb-1">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2 max-md:mb-3 max-sm:mb-2 max-sm:text-sm">
                {product.description}
              </p>
              
              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm max-md:gap-3 max-md:mb-3 max-sm:gap-2 max-sm:mb-2 max-sm:text-xs">
                <div>
                  <p className="text-gray-500">Crop Type</p>
                  <p className="font-semibold">{product.cropType}</p>
                </div>
                <div>
                  <p className="text-gray-500">Farmer</p>
                  <p className="font-semibold">{product.farmer}</p>
                </div>
                <div>
                  <p className="text-gray-500">Available</p>
                  <p className="font-semibold">{product.availableKg} kg</p>
                </div>
                <div>
                  <p className="text-gray-500">Harvest Date</p>
                  <p className="font-semibold text-xs max-sm:text-xs">
                    {new Date(product.harvestDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              {/* Price and Rating */}
              <div className="flex justify-between items-center mb-4 max-md:mb-3 max-sm:mb-2">
                <div>
                  <p className="text-2xl font-bold text-green-600 max-md:text-xl max-sm:text-lg">
                    ${product.pricePerKg}/kg
                  </p>
                  <p className="text-gray-500 text-sm max-sm:text-xs">
                    Total: ${(product.pricePerKg * product.availableKg).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg mr-1 max-md:text-base max-sm:text-sm">⭐</span>
                  <span className="font-semibold text-gray-700 max-sm:text-sm">
                    {product.rating}
                  </span>
                  {product.verified && (
                    <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold max-sm:text-xs">
                      Verified
                    </span>
                  )}
                </div>
              </div>
              
              {/* Location */}
              <div className="bg-gray-50 p-3 rounded-lg mb-4 max-md:p-2 max-sm:p-2 max-sm:mb-3">
                <p className="text-sm text-gray-600 max-sm:text-xs">
                  <span className="font-semibold">Location:</span> {product.location}
                </p>
                <p className="text-sm text-gray-600 max-sm:text-xs">
                  <span className="font-semibold">Farm ID:</span> {product.farmId}
                </p>
              </div>
              
              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-yellow-300 to-lime-900  text-white py-3 rounded-lg font-semibold transition-colors duration-200 max-md:py-2 max-sm:py-2 max-sm:text-sm">
                Contact Farmer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {paginatedProducts.length === 0 && (
        <div className="text-center py-12 max-md:py-8 max-sm:py-6">
          <div className="text-gray-400 text-6xl mb-4 max-md:text-4xl max-sm:text-3xl">🌱</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2 max-md:text-lg max-sm:text-base">
            No products found
          </h3>
          <p className="text-gray-500 max-sm:text-sm">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 max-md:mt-8 max-sm:mt-6">
          <div className="flex space-x-2 max-sm:flex-wrap max-sm:justify-center max-sm:gap-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <span className="max-sm:hidden">Previous</span>
              <span className="sm:hidden">‹</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                    currentPage === pageNum
                      ? 'bg-lime-600 text-white border-lime-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <span className="max-sm:hidden">Next</span>
              <span className="sm:hidden">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}