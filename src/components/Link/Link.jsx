import "./link.css";

const Link = ({ href, name, icon, linkClass = "link" }) => {
  return (
    <>
      <a href={href} className={`${linkClass}`}>
        {icon && (
          <img src={icon} className="link-icon" alt="" aria-hidden="true" />
        )}
        {name}
      </a>
    </>
  );
};

export default Link;
