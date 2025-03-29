import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../shared-components/Card";
import LoadingSpinner from "../../shared-components/LoadingSpinner";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRemoveQuery = () => {
    setSearchQuery("");
    setError(null);
    setLoading(false);
    setProducts([])
  }

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
    <>
      <div className="flex justify-center">
        <div className="relative flex items-center">
          <i className="ml-2 absolute fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a product"
            className=" w-96 p-2 pl-8 rounded-md border border-slate-400"
          />
         
        <i 
        onClick={handleRemoveQuery}
        className="absolute right-4 fa-solid fa-circle-xmark text-slate-400 hover:text-red-300"></i>
        </div>
      

        <button
          onClick={handleSearch}
          disabled={loading}
          className="flex bg-blue-400 p-2 px-4 rounded-lg ml-6 hover:bg-blue-500"
        >
          {loading ? (
            <>
               Searching <LoadingSpinner /> 
            </>
          ) : (
            "Search"
          )}
        </button>

        {error && <div className="error">{error}</div>}
      </div>
      <div>
        {products && Object.keys(products).length > 0 ? (
          <Card key={products.id} product={products} />
        ) : null}
      </div>
    </>
  );
};

export default ProductSearch;
