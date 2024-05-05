import React from "react";
import "./ZoomImage.css";
function ZoomImage({ selectedImage, handleCloseImage }) {
  return (
    <>
      <div className="big-image-container" onDoubleClick={handleCloseImage}>
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      </div>
    </>
  );
}
export default ZoomImage;
