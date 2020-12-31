import Header from "../../components/Header/Header";
import MessageBody from "./components/MessageBody/MessageBody";

function MessagePage(props) {
  const { message } = props.location.state;

  return (
    <div className="message-page universal-background">
      <div className="container">
        <Header
          title={`Wiadomość od ${message.customer.name}`}
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie zawsze jest proste."
        />
        <MessageBody message={message} />
      </div>
    </div>
  );
}
export default MessagePage;
