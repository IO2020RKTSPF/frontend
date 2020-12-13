import { useContext } from "react";
import { UserContext } from "../../../services/Context";
import Tooltip from "../../Tooltip";
import Button from "../../Button/Button";

function BorrowButton() {
  const userContext = useContext(UserContext);

  const handleBorrow = (e) => {
    e.stopPropagation();
    console.log("Borrow Button Clicked");
  };

  return userContext.userData.isLogged ? (
    <div className="result-button">
      <Button
        onClick={handleBorrow}
        className="accent-button"
        text="Wypożycz"
      />
      <Tooltip text="Wysłanie prośby o wypożyczenie książki do właściciela." />
    </div>
  ) : (
    <div className="result-button">
      <Button className="disable" disabled={true} text="Wypożycz" />
      <Tooltip
        text="Zaloguj się aby móc wypożyczyć."
        textStyle={{ width: "6.7rem" }}
      />
    </div>
  );
}

export default BorrowButton;
