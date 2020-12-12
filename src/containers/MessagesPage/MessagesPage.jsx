import Messages from "../../components/Messages/Messages";
import "./MessagesPage.scss";

function MessagesPage() {
  return (
    <div className="message-page universal-background">
      <div className="container">
        <h1>Wiadomości</h1>
        <p>
          Poniżej znajdziesz wiadomości odnośnie wypożyczonych książek przez lub
          od Ciebie. Porozumiej się z innymi użytkownikami i uzgodnij szczegóły.
        </p>
        <Messages />
      </div>
    </div>
  );
}
export default MessagesPage;
