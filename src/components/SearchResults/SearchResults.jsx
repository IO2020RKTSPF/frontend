import { useEffect, useState } from "react";
import Api from "../../services/Api";
import Results from "../Results/Results";
import "./SearchResults.scss";
import Book from "../../assets/images/default-book.jpg";
import BorrowButton from "./components/BorrowButton";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Api.get("/api/books")
        .then((res) => {
          console.log("Books", res);
          setSearchResults(res.data);
        })
        .catch((err) => console.error("Api call", err));
    };
    fetchData();
  }, []);

  const resultHeaderText = (item) => {
    return (
      <>
        <i className="arrow-icon"></i>
        <img src={Book} alt="Book" className="image" />
        <span className="title">{item.title}</span>
        <span className="author">{item.author}</span>
        <span className="location">
          <i className="location-icon"></i>Bielsko-Biała
        </span>
        <span className="owner">{item.owner.name}</span>
      </>
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
    );
  };

  return (
    <div className="search-results">
      <div className="results-header">
        <span className="image">Zdjęcie</span>
        <span className="title">Tytuł</span>
        <span className="author">Autor</span>
        <span className="location">
          <i className="location-icon"></i>Lokalizacja
        </span>
        <span className="owner">Właściciel</span>
      </div>
      <Results
        searchResults={searchResults}
        resultHeaderText={resultHeaderText}
        resultHeaderAction={(book) => <BorrowButton book={book} />}
        resultDetails={resultDetails}
      />
    </div>
  );
}
export default SearchResults;
