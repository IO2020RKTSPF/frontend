import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import "./SearchPage.scss";

function SearchPage() {
  return (
    <div className="shearch-page">
      <div className="container">
        <h1>Poszukaj książki w swojej okolicy</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste. W których inni użytkownicy mogą odnaleźć
          interesujące ich tytuły. Każdy czytający książki wie, że zdobycie.
        </p>
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}
export default SearchPage;
