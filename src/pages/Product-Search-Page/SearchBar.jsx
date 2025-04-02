import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex justify-center p-8">
      <div className="relative flex items-center">
        <i className="ml-2 absolute fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a product"
          className="max-md:!w-full shadow-lg max-w-96 p-2 pl-8 rounded-md border border-slate-400"
        />
        <i
          onClick={() => setSearchQuery("")}
          className="absolute right-4 fa-solid fa-circle-xmark text-slate-400 hover:text-red-300"
        ></i>
      </div>

      <button
        onClick={handleSearch}
        disabled={loading}
        className="flex bg-emerald-300 p-2 px-4 rounded-lg ml-6 hover:bg-emerald-400"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
