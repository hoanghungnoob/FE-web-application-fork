import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`http://127.0.0.1:8000/api/user/product/search?search=${searchTerm}`)
      .then((response) => {
        console.log("Response data:", response.data);
        setSearchResults(response.data);
        setSearched(true);
      })
      .catch((error) => {
        console.error("Error searching for products:", error);
        setSearchResults([]);
        setSearched(true);
      });
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
