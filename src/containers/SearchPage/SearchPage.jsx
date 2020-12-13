import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import Header from "../../components/Header/Header";
import "./SearchPage.scss";

function SearchPage() {
  return (
    <div className="shearch-page universal-background">
      <div className="container">
        <Header
          title="Poszukaj książki w swojej okolicy"
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste. W których inni użytkownicy mogą odnaleźć
          interesujące ich tytuły. Każdy czytający książki wie, że zdobycie."
        />
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}
export default SearchPage;
