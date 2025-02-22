import { useState } from "react";
import apiFetch from "../utils/apiFetch";
import SearchBar from "./SearchBar";

const ProductSearchPage = () => {
  const [products, setProducts] = useState([]);

  const handleSearch = async (query) => {
    console.log("search button was clicked with query", query);
    if (!query) {
      setProducts([]); // Clear results if input is empty
      return;
    }
  
    const data = await apiFetch(query);
    console.log("API response inside ProductSearchPage component", data);
  
    if (data && typeof data === 'object' && data['product-name']) {
      // If there's a product in the response, wrap it in an array
      setProducts([data]); // Store the single product in an array
    } else {
      console.error("Invalid data received", data);
    }
  };
  

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />

      {/* Display search results */}
      <div className="mt-4">
  {products.length > 0 ? (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="border-b p-2">
          {product['product-name']} - ${product['new-price'] / 100} {/* Price in dollars */}
        </li>
      ))}
    </ul>
  ) : (
    <p>No products found</p>
  )}
</div>

    </div>
  );
};

export default ProductSearchPage;
