import "./servicesCards.css";

const ServicesCards = ({ title, links, icon }) => {
  return (
    <>
      <div className="services-card-top">
        <div
          className="services-card-icon"
          style={{ backgroundImage: `url(${icon})` }}
        ></div>
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="services-card-bottom">
        <ul>
          {links.map(({ link }) => (
            <li className="services-card-bottom-items">
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServicesCards;
