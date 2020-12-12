import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Messages.scss";

function Messages() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkedMessages, setCheckedMessages] = useState([]);

  const onCheck = (message) => {
    setCheckedMessages([...checkedMessages, message]);
  };

  const onUncheck = (message) => {
    setCheckedMessages(checkedMessages.filter((e) => e !== message));
  };

  return (
    <div className="messages search-results">
      <div className="results-header">
        <Checkbox
          onCheck={() => setIsCheckedAll(!isCheckedAll)}
          onUncheck={onUncheck}
        />
        <span className="owner">Użytkownik</span>
        <span className="title">Książka</span>
        <span className="last-activity">Ostatnia aktywność</span>
      </div>
      <div className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox
              onCheck={onCheck}
              onUncheck={onUncheck}
              isChecked={isCheckedAll}
            />
            <span className="owner">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
          <span className="last-activity">21.11.2020, 19:20</span>
        </div>
      </div>
      <div id="2" className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox
              onCheck={onCheck}
              onUncheck={onUncheck}
              isChecked={isCheckedAll}
            />
            <span className="owner">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
          <span className="last-activity">21.11.2020, 19:20</span>
        </div>
      </div>
    </div>
  );
}
export default Messages;
