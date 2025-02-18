import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <div>
        <input
          className="rounded-lg pr-12 p-2" 
          type="text"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleInputChange}
        
        />
        {/* add a new stytle for the x here */}
          <button onClick={() => setSearchTerm("")}>X</button>
      </div>
    </>
  )

};

export default SearchBar;