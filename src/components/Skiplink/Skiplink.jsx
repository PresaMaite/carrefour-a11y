import "./skiplink.css";

const Skiplink = ({ text, href }) => {
  return (
    <a href={href} className="skip">
      {text}
    </a>
  );
};

export default Skiplink;
