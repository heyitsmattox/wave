import { useState, useEffect } from "react";
import apiFetch from "../utils/apiFetch";
import SearchBar from "./SearchBar";
import Card from "./Card";


const ProductSearchPage = (props) => {

  const [products, setProducts] = useState([]);
  const { value, setValue } = props;
  useEffect(() => {
    console.log("product object with new products being added", products);
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
      const productWithQuantity = {
        ...data, 
        quantity: 0,
        searchId: Date.now(),
      }
      setProducts(prevProducts => [...prevProducts, productWithQuantity]);
    } else {
      console.error("Invalid data received", data);
    }
  };

  const updateQuantity = (searchId, newQuantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.searchId === searchId 
          ? { ...product, quantity: newQuantity } 
          : product
      )
    );
  };

  return (
    <>
      <div className=" max-w-8xl w-full flex flex-col justify-center  p-4 sm:p-8  md:p-12 lg:p-20 mt-12">
        <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-4">

          <div className="">
            {products.length > 0 ? (
              <ul className="flex justify-center flex-wrap">
                {products.map((product) => (
                 <li key={product.searchId}>
                 <div className="m-8" key={product.searchId}>
                   <Card 
                     product={product} 
                     value={value} 
                     setValue={setValue} 
                     quantity={product.quantity}
                     onQuantityChange={(newQty) => updateQuantity(product.searchId, newQty)}
                   />
                 </div>
               </li>
                ))}
              </ul>
            ) : (
              <p>No products found</p>
            )}
          </div>
            </div>
      </div>
    </>
  );
};

export default ProductSearchPage;
