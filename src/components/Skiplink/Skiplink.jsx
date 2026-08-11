import "./skiplink.css";

const Skiplink = ({ text, href }) => {
  return (
    <a href={href} class="skip">
      {text}
    </a>
  );
};

export default Skiplink;
