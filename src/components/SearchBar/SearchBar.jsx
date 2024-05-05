import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({
  setSearchValue,
  setPage,
  inputValue,
  setInputValue,
  searchValue,
}) {
  const [shakeInput, setShakeInput] = useState(false);
  const handleSetInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSetSearchValue = () => {
    setSearchValue(inputValue);
    setPage(1);
    if (searchValue === "") {
      setShakeInput(true);
      setTimeout(() => {
        setShakeInput(false);
      }, 500);
    }
  };
  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      handleSetSearchValue();
    }
  };

  return (
    <>
      <div
        className={
          shakeInput === true ? "shake search-container" : "search-container"
        }
      >
        <input
          onChange={handleSetInputValue}
          onKeyDown={(e) => {
            handleEnterClick(e);
          }}
          value={inputValue}
          type="search"
        />
        <button onClick={handleSetSearchValue}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
