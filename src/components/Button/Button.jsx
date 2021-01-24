function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
export default Button;
