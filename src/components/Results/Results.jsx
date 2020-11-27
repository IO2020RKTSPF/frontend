import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../services/Context";
import Tooltip from "../Tooltip";
import Button from "../Button/Button";
import Book from "../../assets/images/default-book.jpg";
import "./Results.scss";

function Results(props) {
  const userContext = useContext(UserContext);
  const [clickedResultId, setClickedResultId] = useState();

  const handleShowMore = (index) => {
    index !== clickedResultId
      ? setClickedResultId(index)
      : setClickedResultId(null);
  };

  const handleBorrow = () => {
    console.log("Borrow Button Clicked");
  };

  const showBorrowButton = () => {
    return userContext.userData.isLogged ? (
      <div className="result-button">
        <Button
          onClick={() => handleBorrow()}
          className="accent-button"
          text="Wypożycz"
        />
        <Tooltip text="Wysłanie prośby o wypożyczenie książki do właściciela." />
      </div>
    ) : (
      <div className="result-button">
        <Button className="disable" disabled={true} text="Wypożycz" />
        <Tooltip
          text="Zaloguj się aby móc wypożyczyć."
          textStyle={{ width: "6.7rem" }}
        />
      </div>
    );
  };

  const results = () => {
    return props.searchResults.map((item, index) => (
      <div
        key={index}
        className={clickedResultId === index ? "result show-details" : "result"}
      >
        <div className="result-header">
          <div className="short-details" onClick={() => handleShowMore(index)}>
            <i className="arrow-icon"></i>
            <img src={Book} alt="Book" className="image" />
            <span className="title">{item.title}</span>
            <span className="author">{item.author}</span>
            <span className="location">
              <i className="location-icon"></i>Bielsko-Biała
            </span>
            <span className="owner">{item.owner.name}</span>
          </div>
          {showBorrowButton()}
        </div>
        <div className="result-details">
          <img src={Book} alt="" />
          <div className="details">
            <div>
              <h4>Tytuł</h4>
              <span className="title">{item.title}</span>
            </div>
            <div>
              <h4>Autor</h4>
              <span className="author">{item.author}</span>
            </div>
            <div>
              <h4>Lokalizacja</h4>
              <span className="location">
                <i className="location-icon"></i>Bielsko-Biała
              </span>
            </div>
            <div>
              <h4>Właściciel</h4>
              <span className="owner">{item.owner.name}</span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return results();
}
export default Results;
