import axios from "axios";
import { useEffect, useState } from "react";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/api/books");
      setSearchResults(result.data);
    };
    fetchData();
  }, []);

  console.log(searchResults);

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
