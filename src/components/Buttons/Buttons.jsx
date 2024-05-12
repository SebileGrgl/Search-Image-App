import "./Buttons.css";
import React from "react";

function Buttons({ page, setPage }) {
  const handleNextButton = () => {
    setPage(page + 1);
  };
  const handlePrevButton = () => {
    setPage(page - 1);
  };

  return (
    <>
      <div className="buttons-container">
        <button onClick={handlePrevButton} disabled={page < 2 ? true : false}>
          Prev
        </button>

        <button onClick={handleNextButton}>Next</button>
      </div>
    </>
  );
}
export default Buttons;
