import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../../shared-components/Card";
import LoadingSpinner from "../../shared-components/LoadingSpinner";
import Navbar from "../Navbar";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const handleNewSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/cards?q=name:"${searchQuery}"`);
      console.log("✅ API response:", response.data);
      setProducts(response.data.data || []);
    } catch (error) {
      console.error("❌ Search request failed:", error);
      console.error("Search request failed:", error);
      setError("Failed to fetch search results");
    } finally {
      setLoading(false);
    }

  }


  useEffect(() => {
    if (!searchQuery) return;
    //console.log('use effect hook ran')
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/cards?q=name:"${searchQuery}"`);
        setProducts(response.data.data || []); 
      } catch (error) {
        console.error("Search request failed:", error);
        setError("Failed to fetch search results");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
    <Navbar />
      <div className="p-8 flex justify-center">
      <div className="relative flex items-center">
        <i className="ml-2 absolute fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a product"
          className="w-96 p-2 pl-8 rounded-md border border-slate-400"
        />
        <i
          onClick={() => setSearchQuery("")}
          className="absolute right-4 fa-solid fa-circle-xmark text-slate-400 hover:text-red-300"
        ></i>
      </div>

      <button
        onClick={handleNewSearch}
        disabled={loading}
        className="flex bg-indigo-300 p-2 px-4 rounded-lg ml-6 hover:bg-indigo-400 text-white"
      >
        {loading ?  <LoadingSpinner /> : "Search"}
      </button>
    </div>

    <div className="flex justify-center py-24">
      <div className="w-full max-w-5xl">
       {
     
            <h2 className="text-3xl font-playfair text-emerald-500">Search Results for &quot;{searchQuery}&quot;</h2>
   
       }

        <div className="flex flex-wrap justify-center">
          {
            //console.log('product value', products)
          }
          {products.length > 0 ? (
            products.map((product) => <Card key={product.id} product={product} />)
          ) : (
            null
          )}
        </div>
      </div>
    </div>
    </>

  );
};

export default SearchResults;
