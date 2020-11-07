function SearchBar() {
  return (
    <form action="" className="search-bar">
      <input
        type="text"
        placeholder="Tytuł książki, autro itp."
        className="search-term"
      />
      <input type="text" value="Cała Polska" className="search-location" />
      <button>Szukaj</button>
    </form>
  );
}
export default SearchBar;
