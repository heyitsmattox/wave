import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBarV2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder ] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("handle search btn clicked")
    setLoading(true);
    if (!searchQuery.trim()) return;
    // navigate(`/cards?q${encodeURIComponent(searchQuery)}`);
    console.log(searchQuery)
    navigate(`/cards?q=${encodeURIComponent(searchQuery)}`);

  };


  useEffect(() => {
    const handleResize = () => {
     if(window.innerWidth < 750) {
       setPlaceholder("Search")
     } else {
       setPlaceholder("Search for a product")
     }
    } 
    handleResize();
 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
 
   }, [])

  return (
    <div className="flex justify-center p-8">
      <div className="relative flex items-center">
        <i className="ml-2 absolute fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className="max-md:!w-full shadow-lg max-w-96 p-2 pl-8 rounded-md border border-slate-40 focus:outline-indigo-400"
        />
        <i
          onClick={() => setSearchQuery("")}
          className="absolute right-4 fa-solid fa-circle-xmark text-slate-400 hover:text-red-300"
        ></i>
      </div>

      <button
        onClick={handleSearch}
        disabled={loading}
        className="flex bg-indigo-300 p-2 px-4 rounded-lg ml-6 hover:bg-indigo-400"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );

};

export default SearchBarV2;

