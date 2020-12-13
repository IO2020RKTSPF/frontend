import Api from "../../services/Api";
import { UserContext } from "../../services/Context";
import { useContext } from "react";
import BookForm from "../../components/BookForm/BookForm";
import Header from "../../components/Header/Header";
import "./AddBookPage.scss";

function AddBookPage() {
  const { userData } = useContext(UserContext);
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
        //jakis komunikat o powodzeniu :)
      })
      .catch((err) => {
        //jakis komunikat o niepowodzeniu :(
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
        <BookForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
export default AddBookPage;
