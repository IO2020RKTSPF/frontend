import { useState } from "react";
import "./Results.scss";

function Results(props) {
  const [clickedResultId, setClickedResultId] = useState();

  const handleShowMore = (index) => {
    index !== clickedResultId
      ? setClickedResultId(index)
      : setClickedResultId(null);
  };

  const resultHeader = (item, index) => {
    return (
      <div className="result-header" onClick={() => handleShowMore(index)}>
        <div className="short-details">{props.resultHeaderText(item)}</div>
        {props.resultHeaderAction}
      </div>
    );
  };

  const results = () => {
    return props.searchResults.map((item, index) => (
      <div
        id={index}
        key={index}
        className={clickedResultId === index ? "result show-details" : "result"}
      >
        {resultHeader(item, index)}
        {props.resultDetails(item)}
      </div>
    ));
  };

  return results();
}
export default Results;
