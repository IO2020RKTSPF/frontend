import Help from "../assets/images/help.svg";
import HelpAccent from "../assets/images/help-accent.svg";

function Tooltip(props) {
  return (
    <div className="tooltip">
      <img src={Help} alt="Help" />
      <div className="tooltip-text">
        <p style={props.textStyle}>{props.text}</p>
        <img src={HelpAccent} alt="Help" />
      </div>
    </div>
  );
}

export default Tooltip;
