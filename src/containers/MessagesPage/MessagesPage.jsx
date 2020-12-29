import Inbox from "../../components/Inbox/Inbox";
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
        <Inbox />
      </div>
    </div>
  );
}
export default MessagesPage;
