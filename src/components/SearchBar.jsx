import { useForm } from "react-hook-form";

function SearchBar() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-bar">
      <label className="search-term">
        <input
          type="text"
          name="searchTerm"
          placeholder="Tytuł książki, autor itp."
          ref={register}
        />
      </label>
      <label className="search-location">
        <input
          type="text"
          name="searchLocation"
          defaultValue="Cała Polska"
          ref={register}
        />
      </label>
      <button>Szukaj</button>
    </form>
  );
}
export default SearchBar;
