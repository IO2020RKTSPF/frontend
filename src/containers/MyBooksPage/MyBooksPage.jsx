import MyBooks from "../../components/MyBooks/MyBooks";
import Header from "../../components/Header/Header";
import "./MyBooksPage.scss";

function MyBooksPage() {
  return (
    <div className="my-books-page universal-background">
      <div className="container">
        <Header
          title="Moje książki"
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste."
        />
        <MyBooks />
      </div>
    </div>
  );
}
export default MyBooksPage;
