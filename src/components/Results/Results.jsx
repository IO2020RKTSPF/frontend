import { useState } from "react";
import Tooltip from "../Tooltip";
import Book from "../../assets/images/default-book.jpg";
import "./Results.scss";

function Results(props) {
  const [clickedResultId, setClickedResultId] = useState();

  const handleClick = (index) => {
    index !== clickedResultId
      ? setClickedResultId(index)
      : setClickedResultId(null);
  };

  const results = () => {
    return props.searchResults.map((item, index) => (
      <div
        key={index}
        className={clickedResultId === index ? "result show-details" : "result"}
      >
        <div className="result-header">
          <div className="short-details" onClick={() => handleClick(index)}>
            <img src={Book} alt="Book" className="image" />
            <span className="title">{item.title}</span>
            <span className="author">{item.author}</span>
            <span className="location">
              <i className="location-icon"></i>Bielsko-Biała
            </span>
            <span className="owner">{item.owner.name}</span>
          </div>
          <div className="result-button">
            <button className="accent-button">Wypożycz</button>
            <Tooltip text="Wysłanie prośby o wypożyczenie książki do właściciela." />
          </div>
        </div>
        <div className="details">
          <span className="title">{item.title}</span>
          <span className="author">{item.author}</span>
        </div>
      </div>
    ));
  };

  return results();
}
export default Results;
