import Messages from "../../components/Messages/Messages";
import Header from "../../components/Header/Header";
import "./MessagesPage.scss";

function MessagesPage() {
  return (
    <div className="message-page universal-background">
      <div className="container">
        <Header
          title="Wiadomości"
          subtitle="Poniżej znajdziesz wiadomości odnośnie wypożyczonych książek przez lub
          od Ciebie. Porozumiej się z innymi użytkownikami i uzgodnij szczegóły."
        />
        <Messages />
      </div>
    </div>
  );
}
export default MessagesPage;
