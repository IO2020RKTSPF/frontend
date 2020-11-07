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
    <ul>
      {searchResults.map((item) => (
        <li key={item.id}>
          <span>{`${item.title}, ${item.author}, ${item.owner.name}`}</span>
        </li>
      ))}
    </ul>
  );
}
export default SearchResults;
