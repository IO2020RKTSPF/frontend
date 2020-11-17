import { useForm } from "react-hook-form";
import Tooltip from "../Tooltip";
import "./BookFrom.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../services/ValidationSchema";

function BookFrom() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="book-form">
      <div className="form-section">
        <label>
          <span>Tytuł</span>
          <input type="text" name="title" ref={register} />
          {errors.title && <span>{errors.title.message}</span>}
        </label>
        <label>
          <span>Autor</span>
          <input type="text" name="author" ref={register} />
          {errors.author && <span>{errors.author.message}</span>}
        </label>
        <label>
          <span>Numer ISBN</span>
          <Tooltip text="Niepowtarzalny 13-cyfrowy (kiedyś 10-cyforwy) identyfikator książki." />
          <input type="text" name="isbn" ref={register} />
          {errors.isbn && <span>{errors.isbn.message}</span>}
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Zdjęcie</span>
          <input type="file" name="photo" ref={register} />
          {errors.photo && <span>{errors.photo.message}</span>}
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Opis</span>
          <input type="text" name="description" ref={register} />
          {errors.description && <span>{errors.description.message}</span>}
        </label>
      </div>
      <button className="accent-button">Dodaj</button>
    </form>
  );
}
export default BookFrom;
