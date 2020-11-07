import SearchBar from "../components/SearchBar";

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
      </div>
    </div>
  );
}
export default SearchPage;
