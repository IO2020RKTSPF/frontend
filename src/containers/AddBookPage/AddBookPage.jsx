import BookForm from "../../components/BookForm/BookForm";
import "./AddBookPage.scss";

function AddBookPage() {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="add-book-page">
      <div className="container">
        <h1>Dodaj własną książkę</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste.
        </p>
        <BookForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
export default AddBookPage;
