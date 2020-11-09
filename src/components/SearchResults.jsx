import { useEffect, useState } from "react";
import Api from "../services/Api";

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
      <div className="search-header">
        <span>Zdjęcie</span>
        <span>Tytuł</span>
        <span>Autor</span>
        <span>Lokalizacja</span>
        <span>Właściciel</span>
      </div>
      {searchResults.map((item) => (
        <div key={item.id}>
          <span>{`${item.title}, ${item.author}, ${item.owner.name}`}</span>
        </div>
      ))}
    </div>
  );
}
export default SearchResults;
