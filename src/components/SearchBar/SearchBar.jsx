import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setSearchValue, setPage, inputValue, setInputValue }) {
  const handleSetInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSetSearchValue = () => {
    setSearchValue(inputValue);
    setPage(1);
  };

  return (
    <>
      <div className="search-container">
        <input
          onChange={handleSetInputValue}
          value={inputValue}
          type="search"
        />
        <button onClick={handleSetSearchValue}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
