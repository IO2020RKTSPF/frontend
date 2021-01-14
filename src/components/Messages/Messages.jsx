import React from "react";
import { useHistory } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import Moment from "react-moment";
import { useUserData } from "../../services/hooks";

function Messages(props) {
  const history = useHistory();
  const { userId } = useUserData();

  const onMessageClick = (item) => {
    history.push(`/message/${item.id}`);
  };

  return props.messages.map((item) => (
    <div
      id={item.id}
      key={item.id}
      onClick={() => onMessageClick(item)}
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
            <Moment date={item.dateTimeStart} format="DD.MM.YYYY, HH:mm" />
          </span>
          <span className="owner">
            {item.customer.id === userId
              ? item.book.owner.name
              : item.customer.name}
          </span>
          <span className="title">{item.book.title}</span>
          <span className="title">{item.status}</span>
        </div>
      </div>
    </div>
  ));
}
export default Messages;
