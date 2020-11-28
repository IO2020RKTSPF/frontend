import Messages from "../../components/Messages/Messages";
import "./MessagesPage.scss";

function MessagesPage() {
  return (
    <div className="message-page universal-background">
      <div className="container">
        <h1>Wiadomości</h1>
        <p>
          Każdy czytający książki wie, że zdobycie interesującej go pozycji nie
          zawsze jest proste.
        </p>
        <Messages />
      </div>
    </div>
  );
}
export default MessagesPage;
