import { useState, useEffect } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import "./Inbox.scss";
import Messages from "../Messages/Messages";
import Api from "../../services/Api";

function Inbox() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedMessages, setCheckedMessages] = useState([]);
  const [messages, setMessages] = useState([]);

  const onCheck = (message) => {
    message.stopPropagation();
    setCheckedMessages([...checkedMessages, message.target]);
  };

  const onUncheck = (message) => {
    message.stopPropagation();
    setCheckedMessages(checkedMessages.filter((e) => e !== message.target));
  };

  const onUnCheckAll = () => {
    setIsCheckedAll(!isCheckedAll);
    setCheckedMessages([]);
  };

  const resultsHeader = () => {
    return (
      <div className="results-header">
        <Checkbox
          onCheck={() => setIsCheckedAll(!isCheckedAll)}
          onUncheck={onUnCheckAll}
        />
        {checkedMessages.length || isCheckedAll ? (
          <Button text="Uzuń zaznaczone" className="delete-selected" />
        ) : (
          <>
            <span className="last-activity">Ostatnia aktywność</span>
            <span className="owner">Użytkownik</span>
            <span className="title">Książka</span>
          </>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      await Api.get("/api/transactions")
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => console.error("Api call", err));
    };
    fetchData();
  }, []);

  console.log("Transactions", messages);

  return (
    <div className="inbox search-results">
      {resultsHeader()}
      <Messages
        messages={messages}
        onCheck={onCheck}
        onUncheck={onUncheck}
        isChecked={isCheckedAll}
      />
    </div>
  );
}
export default Inbox;
