import { useEffect, useState } from "react";
import Api from "../services/Api";
import Tooltip from "./Tooltip";
import Book from "../assets/images/default-book.jpg";

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

  const results = () => {
    return searchResults.map((item) => (
      <div key={item.id} className="result">
        <div className="result-header">
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
    ));
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
      {results()}
    </div>
  );
}
export default SearchResults;
