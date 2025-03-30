import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex justify-center">
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
        onClick={handleSearch}
        disabled={loading}
        className="flex bg-blue-400 p-2 px-4 rounded-lg ml-6 hover:bg-blue-500"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default ProductSearch;
