import { useForm } from "react-hook-form";
import Tooltip from "../Tooltip";
import "./BookFrom.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  validationSchema,
  errorMessage,
} from "../../services/ValidationSchema";

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
          <input
            type="text"
            name="title"
            ref={register}
            className={errors.title && "error"}
          />
          {errors.title && errorMessage(errors.title.message)}
        </label>
        <label>
          <span>Autor</span>
          <input
            type="text"
            name="author"
            ref={register}
            className={errors.author && "error"}
          />
          {errors.author && errorMessage(errors.author.message)}
        </label>
        <label>
          <span>Numer ISBN</span>
          <Tooltip text="Niepowtarzalny 13-cyfrowy (kiedyś 10-cyforwy) identyfikator książki." />
          <input
            type="text"
            name="isbn"
            ref={register}
            className={errors.isbn && "error"}
          />
          {errors.isbn && errorMessage(errors.isbn.message)}
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Zdjęcie</span>
          <input
            type="file"
            name="photo"
            ref={register}
            className={errors.photo && "error"}
          />
          {errors.photo && errorMessage(errors.photo.message)}
        </label>
      </div>
      <div className="form-section">
        <label>
          <span>Opis</span>
          <input
            type="text"
            name="description"
            ref={register}
            className={errors.description && "error"}
          />
          {errors.description && errorMessage(errors.description.message)}
        </label>
      </div>
      <button className="accent-button">Dodaj</button>
    </form>
  );
}
export default BookFrom;
