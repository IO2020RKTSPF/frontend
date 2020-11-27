import { useEffect, useState } from "react";
import Api from "../../services/Api";
import MyResults from "../MyResults/MyResults";
import "./MyBooks.scss";

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Api.get("/api/books")
        .then((res) => {
          console.log("MyBooks", res);
          setMyBooks(res.data);
        })
        .catch((err) => console.error("Api call", err));
    };
    fetchData();
  }, []);

  return (
    <div className="my-books search-results">
      <div className="results-header">
        <span className="image">Zdjęcie</span>
        <span className="title">Tytuł</span>
        <span className="author">Autor</span>
        <span className="book-status">Status</span>
      </div>
      <MyResults searchResults={myBooks} />
    </div>
  );
}
export default MyBooks;
