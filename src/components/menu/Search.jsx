import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement the search functionality here
    console.log('Searching for:', searchTerm);
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
