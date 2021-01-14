import { useContext } from "react";
import { UserContext } from "../../../services/Context";
import Tooltip from "../../Tooltip";
import Spacer from "../../Spacer/Spacer";
import Button from "../../Button/Button";

function BorrowButton(props) {
  const { userData } = useContext(UserContext);
  const bookOwnerId = props.book.owner.id;

  const onClick = (e) => {
    e.stopPropagation();
    props.onClick(props.book.id);
  };

  const activeButton = () => {
    return (
      <div className="result-button">
        <Button onClick={onClick} className="accent-button" text="Wypożycz" />
        <Tooltip text="Wysłanie prośby o wypożyczenie książki do właściciela." />
      </div>
    );
  };

  const disableButton = () => {
    return (
      <div className="result-button">
        <Button className="disable" disabled={true} text="Wypożycz" />
        <Tooltip
          text="Zaloguj się aby móc wypożyczyć."
          textStyle={{ width: "6.7rem" }}
        />
      </div>
    );
  };

  const button = () => {
    return userData.isLogged ? activeButton() : disableButton();
  };

  return userData.userId !== bookOwnerId ? button() : <Spacer width="8rem" />;
}
export default BorrowButton;
