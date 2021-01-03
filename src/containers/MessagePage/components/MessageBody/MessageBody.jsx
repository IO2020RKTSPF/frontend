import Results from "../../../../components/Results/Results";
import "./MessageBody.scss";
import Button from "../../../../components/Button/Button";
import {
  resultsHeader,
  resultHeaderText,
  resultDetails,
} from "./ResultsFunctions";

function MessageBody(props) {
  console.log("MessageBody", props.message);
  const message = props.message;

  const status = (isOwner) => ({
    Pending: isOwner && (
      <div className="result-button">
        <Button
          className="accent-button"
          text="Akceptuj"
          onClick={(e) => handleClick(e, "Accepted")}
        />
        <Button
          className="disable"
          text="Odrzuć"
          onClick={(e) => handleClick(e, "Declined")}
        />
      </div>
    ),
    Accepted: isOwner && (
      <div className="result-button">
        <Button
          className="accent-button"
          text="Wypożyczona"
          onClick={(e) => handleClick(e, "Rented")}
        />
      </div>
    ),
  });

  const handleClick = (e, status) => {
    e.stopPropagation();
    props.handleStatus(status);
  };

  return (
    <div className="message-body search-results">
      {resultsHeader()}
      <Results
        searchResults={message}
        resultHeaderText={resultHeaderText}
        resultHeaderAction={() =>
          status(true)[message.length && message[0].status]
        }
        resultDetails={resultDetails}
      />
    </div>
  );
}
export default MessageBody;
