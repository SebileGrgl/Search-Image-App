import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ShowImages from "./components/ShowImages/ShowImages";
import Buttons from "./components/Buttons/Buttons";
import ZoomImage from "./components/ZoomImage/ZoomImage";
import Loading from "./components/Loading/Loading";
import HistoryTags from "./components/HistoryTags/HistoryTags";
import tags from "./db/Tags";

function App() {
  const URL = "https://api.unsplash.com/search/photos";
  const apiKey = "rnBk8CnOp16BzyxoNS1UlnUCqz8_4vLIYKvlSLUaafw";
  const apiKey2 = "B4va8gaXuhTq6Vs-Y3cuNxBu5nURckc-yx5U5h0amPU";
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSelectedImage, setShowSelectedImage] = useState(false);
  const [history, setHistory] = useState(tags);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=28&page=${page}&client_id=${apiKey2}`
        );

        setImages(response.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomImages();
  }, []);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get(
          `${URL}?query=${searchValue}&page=${page}&per_page=28`,
          {
            headers: {
              Authorization: `Client-ID ${apiKey}`,
            },
          }
        );
        setImages(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (searchValue !== "") {
      getImages();
      if (page === 1) {
        handleHistory();
      }
    }
  }, [searchValue, page]);

  const handleHistory = () => {
    const sameTags = history.filter((item) => item === searchValue);
    if (sameTags.length === 0) {
      setHistory([...history, searchValue].slice(-14));
    }
  };

  const handleCloseImage = () => {
    setShowSelectedImage(false);
  };
  return (
    <>
      <SearchBar
        setSearchValue={setSearchValue}
        setPage={setPage}
        searchValue={searchValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <div className="main-container">
        {loading && <Loading />}
        {!loading && (
          <HistoryTags
            history={history}
            setSearchValue={setSearchValue}
            setInputValue={setInputValue}
          />
        )}
        <ShowImages
          images={images}
          setSelectedImage={setSelectedImage}
          setShowSelectedImage={setShowSelectedImage}
        />
        {searchValue !== "" && <Buttons page={page} setPage={setPage} />}
        {showSelectedImage && (
          <ZoomImage
            handleCloseImage={handleCloseImage}
            selectedImage={selectedImage}
          />
        )}
      </div>
    </>
  );
}

export default App;
