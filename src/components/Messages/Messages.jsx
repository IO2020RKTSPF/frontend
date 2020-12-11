import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Messages.scss";

function Messages() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  // const onScroll = (e) => {
  //   e.scrollIntoView();
  //   e.classList.add("highlight");
  // };

  const onCheck = (e) => {
    console.log(e);
  };
  return (
    <div className="messages search-results">
      <div className="results-header">
        <Checkbox onCheck={() => setIsCheckedAll(!isCheckedAll)} />
        <span className="owner">Użytkownik</span>
        <span className="title">Książka</span>
        <span className="last-activity">Ostatnia aktywność</span>
      </div>
      <div className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox onCheck={onCheck} isChecked={isCheckedAll} />
            <span className="author">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
          <span className="last-activity">21.11.2020, 19:20</span>
        </div>
      </div>
      <div className="message result">
        <div className="message-header result-header">
          <div className="short-details">
            <Checkbox onCheck={onCheck} isChecked={isCheckedAll} />
            <span className="author">Jan Kowalski</span>
            <span className="title">Hrabia Monte Christo</span>
          </div>
          <span className="last-activity">21.11.2020, 19:20</span>
        </div>
      </div>
    </div>
  );
}
export default Messages;
