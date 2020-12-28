import { useContext } from "react";
import { UserContext } from "../../../services/Context";
import Tooltip from "../../Tooltip";
import Button from "../../Button/Button";
import Api from "../../../services/Api";

function BorrowButton(props) {
  const { userData } = useContext(UserContext);
  const bookOwnerId = props.book.owner.id;

  // Tymczasowo tutaj
  const handleBorrow = async (e) => {
    e.stopPropagation();
    await Api.post("api/transactions", {
      bookId: props.book.id,
      daysOfRentalTime: 10,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const activeButton = () => {
    return (
      <div className="result-button">
        <Button
          onClick={handleBorrow}
          className="accent-button"
          text="Wypożycz"
        />
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

  return userData.userId !== bookOwnerId ? button() : null;
}

export default BorrowButton;
