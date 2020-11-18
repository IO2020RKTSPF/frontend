import { useEffect, useState } from "react";
import Api from "../services/Api";
import Results from "./Results/Results";

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
      <Results searchResults={searchResults} />
    </div>
  );
}
export default SearchResults;
