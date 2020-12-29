import Header from "../../components/Header/Header";

function MessagePage(props) {
  const { message } = props.location.state;

  console.log("Message", message);
  return (
    <div className="message-page universal-background">
      <div className="container">
        <Header
          title={`Wiadomośc od ${message.customer.name}`}
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie zawsze jest proste."
        />
      </div>
    </div>
  );
}
export default MessagePage;
