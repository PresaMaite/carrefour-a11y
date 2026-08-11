import "./button.css";

const Button = ({
  text,
  classStyles = "primary",
  icon,
  ariaLabel = null,
  onClick = null,
  pressed = null,
}) => {
  return (
    <button
      className={`${classStyles}`}
      aria-label={ariaLabel}
      onClick={onClick}
      aria-haspopup={null}
      aria-pressed={pressed}
    >
      {icon && <img src={icon} alt="" />} {text}
    </button>
  );
};

export default Button;
