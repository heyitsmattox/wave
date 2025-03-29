import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../shared-components/Card";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    console.log("Making request with query:", searchQuery); // Log the query before making the request
    try {
      const response = await axios.get(`/api/products/search?q=${searchQuery}`);
      console.log("Received response:", response.data); // Log the response data
      setProducts(response.data);
    } catch (error) {
      console.error("Search request failed:", error); // Log any errors here
      setError("Failed to fetch search results");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("product array", products);
  }, [products]);

  console.log("Type of products:", typeof products);
console.log("Is products an array?", Array.isArray(products));

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a product"
        className="w-96 p-2 rounded-md"
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-blue-400 p-2 rounded-lg ml-6"
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <div className="error">{error}</div>}
<div>

{products && Object.keys(products).length > 0 ? (
  <Card product={products} />
) : (
  <div>No product was found</div>
)}

    </div>
      </div>
  );
};

export default ProductSearch;

