import { useEffect, useState } from "react";
import ProductItem from "./Productitem";
import axios from "axios";
import ProductLoadingSkeleton from "./ProductsLoadingkeleton";
import { AiOutlineSearch } from "react-icons/ai";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce the search term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timerId); // cleanup
  }, [searchTerm]);

  // Fetch when the debounced term changes
  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedSearchTerm)}`,
          { signal: controller.signal }
        );
        setProducts(res.data.products);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Failed to fetch products:", error);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort(); // cancel stale requests
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border p-2 pl-10 shadow focus:border-pink-300 focus:outline-none"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <AiOutlineSearch className="h-6 w-6 text-pink-600" />
        </span>
      </div>

      {loading ? (
        <ProductLoadingSkeleton />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <p className="mt-4 text-center">No products found.</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductsList;