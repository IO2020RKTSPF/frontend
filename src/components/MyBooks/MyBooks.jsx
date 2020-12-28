import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../services/Context";
import Api from "../../services/Api";
import Book from "../../assets/images/default-book.jpg";
import ManageBookButton from "./components/ManageBookButton";
import "./MyBooks.scss";
import Results from "../Results/Results";

function MyBooks() {
  const { userData } = useContext(UserContext);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Api.get(`/api/users/${userData.userId}`)
        .then((res) => {
          console.log("MyBooks", res);
          setMyBooks(res.data.books);
        })
        .catch((err) => console.error("Api call", err));
    };
    fetchData();
  }, [userData]);

  const bookStatus = (isAvaible) => {
    return isAvaible ? "Niewypożyczona" : "Wypożyczona";
  };

  const resultHeaderText = (item) => {
    return (
      <>
        <i className="arrow-icon"></i>
        <img src={Book} alt="Book" className="image" />
        <span className="title">{item.title}</span>
        <span className="author">{item.author}</span>
        <span className="book-status">{bookStatus(item.isAvaible)}</span>
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

  return (
    <div className="my-books search-results">
      <div className="results-header">
        <span className="image">Zdjęcie</span>
        <span className="title">Tytuł</span>
        <span className="author">Autor</span>
        <span className="book-status">Status</span>
      </div>
      <Results
        searchResults={myBooks}
        resultHeaderText={resultHeaderText}
        resultHeaderAction={(e) => <ManageBookButton />}
        resultDetails={resultDetails}
      />
    </div>
  );
}
export default MyBooks;
