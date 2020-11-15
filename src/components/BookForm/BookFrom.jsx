import { useForm } from "react-hook-form";
import Tooltip from "../Tooltip";
import "./BookFrom.scss";

function BookFrom() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="book-form">
      <div className="form-section">
        <label>
          <span>Tytuł</span>
          <input type="text" name="title" ref={register} />
        </label>
        <label>
          <span>Autor</span>
          <input type="text" name="author" ref={register} />
        </label>
        <label>
          <span>Numer ISBN</span>
          <Tooltip text="Niepowtarzalny 13-cyfrowy (kiedyś 10-cyforwy) identyfikator książki." />
          <input type="text" name="isbn" ref={register} />
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Zdjęcie</span>
          <input type="file" name="photo" ref={register} />
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Opis</span>
          <input type="text" name="description" ref={register} />
        </label>
      </div>
      <button className="accent-button">Dodaj</button>
    </form>
  );
}
export default BookFrom;
