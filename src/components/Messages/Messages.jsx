import React from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import Moment from "react-moment";

function Messages(props) {
  const history = useHistory();

  const onMessageClick = (messageId) => {
    history.push(`/message/${messageId}`);
  };

  return props.messages.map((item) => (
    <div
      id={item.id}
      key={item.id}
      onClick={() => onMessageClick(123)}
      className="message result"
    >
      <div className="message-header result-header">
        <div className="short-details">
          <Checkbox
            onCheck={props.onCheck}
            onUncheck={props.onUncheck}
            isChecked={props.isChecked}
          />
          <span className="last-activity">
            <Moment date={item.dateTimeStart} format="DD.MM.YYYY" />
          </span>
          <span className="owner">{item.customer.name}</span>
          <span className="title">{item.book.title}</span>
        </div>
      </div>
    </div>
  ));
}
export default Messages;
