import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
      await onSearch(searchTerm);
  };



  return (
    <>
      <div className="relative max-w-md flex ">
        <input
          className="rounded-lg pr-12 p-2 focus:outline-none"
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
        />
        {/* clear button */}
        <button
        className="absolute inset-y-0 right-28"
        onClick={() => setSearchTerm("")}
        >
         <i className="text-white text-small bg-slate-300 rounded-full p-1 fa-solid fa-xmark"></i>
        </button>
        {/* Search button */}
        <button
          className="ml-4 flex items-center rounded-lg bg-blue-700 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-blue-800 focus:shadow-none active:bg-blue-800 hover:bg-blue-800 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleSearch}
        >
          <i className="text-white mr-1 fa-solid fa-magnifying-glass"></i>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
