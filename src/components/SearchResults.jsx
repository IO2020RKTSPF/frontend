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
