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
        {page > 1 && <button onClick={handlePrevButton}>Prev</button>}
        <button onClick={handleNextButton}>Next</button>
      </div>
    </>
  );
}
export default Buttons;
