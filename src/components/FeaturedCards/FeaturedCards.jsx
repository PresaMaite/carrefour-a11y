import "./featuredCards.css";

const FeaturedCards = ({ href, imgUrl, text }) => {
  return (
    <a href={href} className="featured-categories-cards">
      <div className="featured-categories-background">
        <span
          className="featured-categories-image"
          style={{ backgroundImage: `url('${imgUrl}')` }}
        ></span>
      </div>
      <span>{text}</span>
    </a>
  );
};

export default FeaturedCards;
