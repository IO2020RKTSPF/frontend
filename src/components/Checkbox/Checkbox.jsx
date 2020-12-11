import { useState, useEffect } from "react";
import "./Checkbox.scss";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  //   setIsChecked(props.isChecked);
  useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);
  return (
    <button
      className={isChecked ? "checkbox checked" : "checkbox"}
      onClick={(e) => {
        setIsChecked(!isChecked);
        props.onCheck();
      }}
    ></button>
  );
}
export default Checkbox;
