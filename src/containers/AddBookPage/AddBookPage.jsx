import Api from "../../services/Api";
import { UserContext } from "../../services/Context";
import { useContext, useState } from "react";
import BookForm from "../../components/BookForm/BookForm";
import { errorMessage, message } from "./components/SubmitMessage";
import Header from "../../components/Header/Header";
import "./AddBookPage.scss";

function AddBookPage() {
  const { userData } = useContext(UserContext);

  const [toggleMessage, setToggleMessage] = useState();
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    await Api.post("api/books", {
      title: data.title,
      author: data.author,
      isbn: data.isbn,
      description: data.description,
      imgUrl: "/url/jakis/testowy",
      userId: userData.userId,
    })
      .then((res) => {
        setToggleMessage(!toggleMessage);
        setIsError(false);
      })
      .catch((err) => {
        setToggleMessage(!toggleMessage);
        setIsError(true);
      });
  };

  return (
    <div className="add-book-page">
      <div className="container">
        <Header
          title="Dodaj własną książkę"
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste."
        />
        <BookForm
          onSubmit={onSubmit}
          toggleMessage={toggleMessage}
          message={isError ? errorMessage() : message()}
        />
      </div>
    </div>
  );
}
export default AddBookPage;
