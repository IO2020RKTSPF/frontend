import { useState } from "react";
import Button from "../Button/Button";
import Book from "../../assets/images/default-book.jpg";
import "../MyResults/MyResults.scss";

function MyResults(props) {
  const [clickedResultId, setClickedResultId] = useState();

  const handleShowMore = (index) => {
    index !== clickedResultId
      ? setClickedResultId(index)
      : setClickedResultId(null);
  };

  const bookStatus = (isAvaible) => {
    return isAvaible ? "Niewypożyczona" : "Wypożyczona";
  };

  const resultHeader = (item, index) => {
    return (
      <div className="result-header">
        <div className="short-details" onClick={() => handleShowMore(index)}>
          <i className="arrow-icon"></i>
          <img src={Book} alt="Book" className="image" />
          <span className="title">{item.title}</span>
          <span className="author">{item.author}</span>
          <span className="book-status">{bookStatus(item.isAvaible)}</span>
        </div>
        <div className="result-button">
          <Button className="disable" text="Edytuj" />
          <Button className="disable" text="Usuń" />
        </div>
      </div>
    );
  };

  const resultDetails = (item) => {
    return (
      <div className="result-details">
        <img src={Book} alt="" />
        <div className="details">
          <div>
            <h4>Tytuł</h4>
            <span className="title">{item.title}</span>
          </div>
          <div>
            <h4>Opis</h4>
            <span className="description">{item.description}</span>
          </div>
          <div>
            <h4>Autor</h4>
            <span className="author">{item.author}</span>
          </div>
          <div>
            <h4>Numer ISBN</h4>
            <span className="isbn">{item.isbn}</span>
          </div>
          <div>
            <h4>Status</h4>
            <span className="book-status">{bookStatus(item.isAvaible)}</span>
          </div>
        </div>
      </div>
    );
  };

  const results = () => {
    return props.searchResults.map((item, index) => (
      <div
        key={index}
        className={
          clickedResultId === index
            ? "result show-details my-results"
            : "result my-results"
        }
      >
        {resultHeader(item, index)}
        {resultDetails(item)}
      </div>
    ));
  };

  return results();
}
export default MyResults;
