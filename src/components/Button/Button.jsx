import "./button.css";

const Button = ({
  text,
  classStyles = "primary",
  icon,
  ariaLabel = null,
  onClick = null,
}) => {
  return (
    <button
      className={`${classStyles}`}
      aria-label={ariaLabel}
      onClick={onClick}
      aria-haspopup={null}
    >
      {icon && <img src={icon} alt="" />} {text}
    </button>
  );
};

export default Button;
