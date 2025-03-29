import { useState, useEffect } from "react";
import axios from "axios";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    console.log("Making request with query:", searchQuery); // Log the query before making the request
    try {
      const response = await axios.get(`/api/products/search?q=${searchQuery}`);
      console.log("Received response:", response.data); // Log the response data

      setSearchResults(response.data);
    } catch (error) {
      console.error("Search request failed:", error); // Log any errors here
      setError("Failed to fetch search results");
    } finally {
      setLoading(false);
    }
  };

  // Log search results after they are updated


  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a product"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <div className="error">{error}</div>}

      <ul>
        {Object.entries(searchResults).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> ${value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;

// const ProductSearchPage = (props) => {

//   const [products, setProducts] = useState([]);
//   const { value, setValue } = props;
//   const [searchQuery, setSearchQuery ] = useState("");

//   const handleSearchQuery = async (searchQuery) => {
//     try {
//       const response = await axios.get(`/api/products/search?q=${searchQuery}`);
//       console.log(response)
//       setSearchQuery(response.data);

//       if (data) {
//             const productWithQuantity = {
//               ...data,
//               quantity: 0,
//               searchId: Date.now(),
//             }
//             setProducts(prevProducts => [...prevProducts, productWithQuantity]);
//           } else {
//             console.error("Invalid data received", data);
//           }

//     } catch (error) {
//       console.log("error from setting the state");
//     }
//   }

//   // const handleSearch = async (query) => {
//   //   console.log("search button was clicked with query", query);

//   //   if (!query) {
//   //     setProducts([]);
//   //     return;
//   //   }

//   //   const data = await apiFetch(query);
//   //   console.log("API response inside ProductSearchPage component", data);

//   //   if (data) {
//   //     const productWithQuantity = {
//   //       ...data,
//   //       quantity: 0,
//   //       searchId: Date.now(),
//   //     }
//   //     setProducts(prevProducts => [...prevProducts, productWithQuantity]);
//   //   } else {
//   //     console.error("Invalid data received", data);
//   //   }
//   // };

//   // const updateQuantity = (searchId, newQuantity) => {
//   //   setProducts(prevProducts =>
//   //     prevProducts.map(product =>
//   //       product.searchId === searchId
//   //         ? { ...product, quantity: newQuantity }
//   //         : product
//   //     )
//   //   );
//   // };

//   return (
//     <>
//       <div className=" max-w-8xl w-full flex flex-col justify-center  p-4 sm:p-8  md:p-12 lg:p-20 mt-12">
//         <div className="flex justify-center">
//         {/* <SearchBar onSearch={handleSearchQuery} searchQuery={searchQuery}/> */}
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for a product"
//         />
//         <button
//         onClick={handleSearchQuery}
//         disabled={loading}
//         className="bg-emerald-200 p-2 rounded-lg"
//         >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//         </div>
//         <ul>
//         {searchResults.map((product, index) => (
//           <li key={index}>{product.name}</li> // Adjust based on API response structure
//         ))}
//       </ul>
//         {/* <div className="mt-4">

//           <div className="">
//             {products.length > 0 ? (
//               <ul className="flex justify-center flex-wrap">
//                 {products.map((product) => (
//                  <li key={product.searchId}>
//                  <div className="m-8" key={product.searchId}>
//                    <Card
//                      product={product}
//                      value={value}
//                      setValue={setValue}
//                      quantity={product.quantity}
//                      onQuantityChange={(newQty) => updateQuantity(product.searchId, newQty)}
//                    />
//                  </div>
//                </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No products found</p>
//             )}
//           </div>
//             </div> */}
//       </div>
//     </>
//   );
// };

// export default ProductSearchPage;
