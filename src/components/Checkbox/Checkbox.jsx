import { useState, useEffect } from "react";
import "./Checkbox.scss";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

  return (
    <button
      className={isChecked ? "checkbox checked" : "checkbox"}
      onClick={(e) => {
        setIsChecked(!isChecked);
        isChecked ? props.onUncheck(e) : props.onCheck(e);
      }}
    ></button>
  );
}
export default Checkbox;
