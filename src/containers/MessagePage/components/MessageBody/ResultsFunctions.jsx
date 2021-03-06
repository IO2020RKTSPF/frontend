import Moment from "react-moment";
import Book from "../../../../assets/images/default-book.jpg";

export const resultsHeader = () => {
  return (
    <div className="results-header">
      <span className="last-activity">Ostatnia aktywność</span>
      <span className="owner">Użytkownik</span>
      <span className="title">Tytuł</span>
      <span className="status">Status</span>
    </div>
  );
};

export const resultHeaderText = (item) => {
  return (
    <>
      <i className="arrow-icon"></i>
      <span className="last-activity">
        <Moment date={item.dateTimeStart} format="DD.MM.YYYY, HH:mm" />
      </span>
      <span className="owner">{item.customer.name}</span>
      <span className="title">{item.book.title}</span>
      <span className="status">{item.status}</span>
    </>
  );
};

export const resultDetails = (item) => {
  const book = item.book;
  return (
    <div className="result-details">
      <img src={Book} alt="" />
      <div className="details">
        <div>
          <h4>Ostatnia aktywność</h4>
          <span className="last-activity">
            <Moment date={item.dateTimeStart} format="DD.MM.YYYY, HH:mm" />
          </span>
        </div>
        <div>
          <h4>Użytkownik</h4>
          <span className="owner">{item.customer.name}</span>
        </div>
        <div>
          <h4>Tytuł</h4>
          <span className="title">{book.title}</span>
        </div>
        <div>
          <h4>Status</h4>
          <span className="status">{item.status}</span>
        </div>
      </div>
    </div>
  );
};
