import BookFrom from "../../components/BookForm/BookFrom";
import "./AddBookPage.scss";

function AddBookPage() {
  return (
    <div className="add-book-page">
      <div className="container">
        <h1>Dodaj własną książkę</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste.
        </p>
        <BookFrom />
      </div>
    </div>
  );
}
export default AddBookPage;
