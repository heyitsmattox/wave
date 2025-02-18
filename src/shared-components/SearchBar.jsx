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
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </>
  )

};

export default SearchBar;