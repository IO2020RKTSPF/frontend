import { useForm } from "react-hook-form";
import Tooltip from "../Tooltip";
import "./BookForm.scss";
import Button from "../Button/Button";
import Api from "../../services/Api";
import { UserContext } from "../../services/Context";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  validationSchema,
  errorMessage,
} from "../../services/ValidationSchema";

function BookFrom(props) {
  const {userData} = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (data) => {
    await Api.post('api/books',{
      title: data.title,
      author: data.author,
      isbn: data.isbn,
      isAvaible: true,
      description: data.description,
      imgUrl: "/url/jakis/testowy",
      addedDate: "2020-12-11T14:22:58.275Z",
      userId: userData.userId
    })
    .then((res) =>{
      //jakis komunikat o powodzeniu :)
    })
    .catch((err)=>{
      //jakis komunikat o niepowodzeniu :(
    });
  }

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
          <Tooltip text="Niepowtarzalny 13-cyfrowy (kiedyś 10-cyfrowy) identyfikator książki." />
          <input
            type="text"
            name="isbn"
            aria-label="Numer ISBN"
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
      <Button className="accent-button" text="Dodaj" />
    </form>
  );
}
export default BookFrom;
