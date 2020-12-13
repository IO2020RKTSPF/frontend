import { useState } from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import "./Messages.scss";

function Messages() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedMessages, setCheckedMessages] = useState([]);
  const history = useHistory();

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

  const onMessageClick = (messageId) => {
    history.push(`/message/${messageId}`);
  };

  const messages = (onCheck, onUncheck, isChecked) => {
    return (
      <div onClick={() => onMessageClick(123)} className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox
              onCheck={onCheck}
              onUncheck={onUncheck}
              isChecked={isChecked}
            />
            <span className="last-activity">21.11.2020, 19:20</span>
            <span className="owner">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="messages search-results">
      {resultsHeader()}
      {messages(onCheck, onUncheck, isCheckedAll)}
      <div id="2" className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox
              onCheck={onCheck}
              onUncheck={onUncheck}
              isChecked={isCheckedAll}
            />
            <span className="last-activity">21.11.2020, 19:20</span>
            <span className="owner">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messages;
