import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MessageBody from "./components/MessageBody/MessageBody";
import Api from "../../services/Api";

function MessagePage(props) {
  const { messageId } = props.match.params;
  const [message, setMessage] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await Api.get(`/api/transactions/${messageId}`)
        .then((res) => {
          setMessage([res.data]);
        })
        .catch((err) => console.error("Api call", err));
    };
    fetchData();
  }, [messageId, toggleUpdate]);

  const handleStatus = async (messageStatus) => {
    await Api.patch(
      `api/transactions/${messageId}`,
      {
        status: messageStatus,
      },
      {
        accept: "text/plain",
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        setToggleUpdate(!toggleUpdate);
        console.log("Status Changed", res);
      })
      .catch((err) => {
        console.log("Status Changed", err);
      });
  };

  console.log(message);
  return (
    <div className="message-page universal-background">
      <div className="container">
        <Header
          title={`Wiadomość od ${message.length && message[0].customer.name}`}
          subtitle="Każdy czytający książki wie, że zdobycie interesującej go pozycji nie zawsze jest proste."
        />
        <MessageBody message={message} handleStatus={handleStatus} />
      </div>
    </div>
  );
}
export default MessagePage;
