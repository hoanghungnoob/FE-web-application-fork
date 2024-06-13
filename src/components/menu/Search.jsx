import React, { useState, useContext } from "react";
import "./Search.css";
import { SearchContext } from "../../pages/context/SearchContext";

const Search = () => {
  const { searchKeyword, setSearchKeyword } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState(searchKeyword);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    setSearchKeyword(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Typing product to research..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
