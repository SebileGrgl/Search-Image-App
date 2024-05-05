import "./HistoryTags.css";
function HistoryTags({ history, setSearchValue, setInputValue }) {
  const updatedHistory = history.slice(0, 13);
  const handleTagClick = (item) => {
    setSearchValue(item);
    setInputValue(item);
  };
  return (
    <>
      <ul className="history-tags">
        {updatedHistory.map((item, index) => (
          <li
            onClick={() => {
              handleTagClick(item);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default HistoryTags;
