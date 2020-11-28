import MyBooks from "../../components/MyBooks/MyBooks";
import "./MyBooksPage.scss";

function MyBooksPage() {
  return (
    <div className="my-books-page universal-background">
      <div className="container">
        <h1>Moje książki</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste.
        </p>
        <MyBooks />
      </div>
    </div>
  );
}
export default MyBooksPage;
