import React, { useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar({ setSearchValue, setPage, inputValue, setInputValue }) {
  const [shakeInput, setShakeInput] = useState(false);
  const handleSetInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSetSearchValue = () => {
    if (inputValue === "") {
      setShakeInput(true);
      setTimeout(() => {
        setShakeInput(false);
      }, 500);
    }
    setSearchValue(inputValue);
    setPage(1);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      handleSetSearchValue();
    }
  };

  return (
    <>
      <div
        className={shakeInput ? "shake search-container" : "search-container"}
      >
        <input
          onChange={handleSetInputValue}
          onKeyDown={(e) => {
            handleEnterClick(e);
          }}
          value={inputValue}
          type="search"
          placeholder="Enter keywords... "
        />
        <button
          onClick={() => {
            handleSetSearchValue();
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
