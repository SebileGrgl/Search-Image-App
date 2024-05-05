import "./ShowImages.css";

function ShowImages({ images, setSelectedImage, setShowSelectedImage }) {
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowSelectedImage(true);
  };

  return (
    <>
      <div className="images-container">
        {images.map((image) => (
          <div className="image-card" key={image.id}>
            <img
              onDoubleClick={() => handleImageClick(image)}
              className="image"
              src={image.urls.regular}
              alt={image.alt_description}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ShowImages;
