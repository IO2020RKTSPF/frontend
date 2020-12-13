import Header from "../../components/Header/Header";
function MessagePage(props) {
  const { messageId } = props.match.params;

  return (
    <div className="message-page universal-background">
      <div className="container">
        <Header
          title={`Wiadomośc od ${messageId}`}
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie zawsze jest proste."
        />
      </div>
    </div>
  );
}
export default MessagePage;
