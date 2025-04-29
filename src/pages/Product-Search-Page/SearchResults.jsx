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
  const [portfolioValue, setPortfolioValue] = useState(0)





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
    <div className="bg-slate-900 opacity-80">
    <Navbar />
      <div className="p-8 flex justify-center">
      <div className="relative flex items-center text-gray-400">
        <i className="ml-2 absolute fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a product"
          className="w-96 p-2 pl-8 rounded-md border border-slate-700 bg-slate-800 text-gray-100"
          />
        <i
          onClick={() => setSearchQuery("")}
          className="absolute right-4 fa-solid fa-circle-xmark  hover:text-red-300"
          ></i>
      </div>

      <button
        onClick={handleNewSearch}
        disabled={loading}
        className="flex bg-indigo-500 p-2 px-4 rounded-lg ml-6 hover:bg-indigo-700 text-white"
        >
        {loading ?  <LoadingSpinner /> : "Search"}
      </button>
    </div>
      {/* Area where value of portfolio section */}
      <div className="px-4 sm:px-8 lg:px-10">
      <div className="flex bg-slate-800 p-4 max-w-64 rounded-xl  border border-slate-700">
        <span className="text-xl text-gray-400">
        <i className="fa-solid fa-bolt text-indigo-400 mr-1"></i>
          Portfolio Value</span>
        <div className="text-emerald-400 text-lg ml-2">${`${portfolioValue.toFixed(2)}`}</div>
      </div>
      </div>
    <div className="flex justify-center py-24">
      <div className="w-full max-w-5xl">

       {
         
         <h2 className="text-3xl font-playfair text-emerald-400">Search Results for &quot;{searchQuery}&quot;</h2>
         
        }

        <div className="flex flex-wrap justify-center">
          {products.length > 0 ? (
            products.map((product) => <Card key={product.id} product={product} portfolioValue={portfolioValue} setPortfolioValue={setPortfolioValue} />)
          ) : (
            null
          )}
        </div>
      </div>
    </div>
          </div>
    </>

  );
};

export default SearchResults;
