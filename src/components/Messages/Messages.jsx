import { HashLink } from "react-router-hash-link";
import "./Messages.scss";

function Messages() {
  const onScroll = (e) => {
    e.scrollIntoView();
    e.classList.add("highlight");
  };
  return (
    <div className="messages search-results">
      <div className="results-header">
        <span className="owner">Użytkownik</span>
        <span className="title">Książka</span>
      </div>
      <HashLink to="/my-books#1" scroll={(e) => onScroll(e)}>
        Książka 1
      </HashLink>
      <HashLink to="/my-books#2" scroll={(e) => onScroll(e)}>
        Książka 2
      </HashLink>
      <HashLink to="/my-books#3" scroll={(e) => onScroll(e)}>
        Książka 3
      </HashLink>
      <HashLink to="/my-books#4" scroll={(e) => onScroll(e)}>
        Książka 4
      </HashLink>
    </div>
  );
}
export default Messages;
