import { useState, useEffect } from "react";
import apiFetch from "../utils/apiFetch";
import SearchBar from "./SearchBar";
import Card from "./Card";

const ProductSearchPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("product objectt with new products being added", products);
  }, [products]);

  const handleSearch = async (query) => {
    console.log("search button was clicked with query", query);
    if (!query) {
      setProducts([]);
      return;
    }

    const data = await apiFetch(query);
    console.log("API response inside ProductSearchPage component", data);

    if (data) {
      setProducts([...products, data]); // Store the single product in an array
    } else {
      console.error("Invalid data received", data);
    }
  };

  return (
    <>
      <div className="max-w-4xl w-full border border-blue-500 flex flex-col justify-center p-20">
        <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
        </div>
          <div className="mt-4">
            {products.length > 0 ? (
              <ul>
                {products.map((product) => (
                  <li key={product.id}>
                    {
                      <div>
                        <Card product={product} />
                      </div>
                    }
                    {/* {product['console-name'] + " " +product['product-name']} - ${product['loose-price'] / 100} */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products found</p>
            )}
          </div>
      </div>
    </>
  );
};

export default ProductSearchPage;
