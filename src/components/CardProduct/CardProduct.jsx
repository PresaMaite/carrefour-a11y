import { useState } from "react";
import Button from "../Button/Button";
import heart from "../../assets/icons/heart.svg";
import heartFill from "../../assets/icons/heart-fill.svg";
import "./cardProduct.css";
import { useCart } from "../../context/CartContext.jsx";
import CartActions from "../CartActions/CartActions";
const CardProduct = ({
  id,
  description,
  image,
  link,
  price,
  kgPrice,
  discount,
  productType,
}) => {
  const productToSave = {
    id,
    description,
    image,
    price,
    kgPrice,
    discount,
    link,
    productType,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const { getItemCount } = useCart();
  const productCount = getItemCount(productToSave);

  let applyDiscount = (price, discount) => {
    return (Number(price) - Number(price) * (Number(discount) / 100)).toFixed(
      2,
    );
  };

  return (
    <article className="card-product" aria-labelledby={`product-${id}-title`}>
      <Button
        classStyles="icon-heart"
        icon={isFavorite ? heartFill : heart}
        ariaLabel={`Añadir ${description} a favoritos`}
        pressed={isFavorite}
        onClick={() => {
          setIsFavorite(!isFavorite);
          setLiveMessage(
            isFavorite ? `Eliminado de favoritos` : `Añadido a favoritos`,
          );
        }}
      ></Button>
      <span aria-live="polite" className="visually-hidden">
        {liveMessage}
      </span>

      <img
        className="card-image"
        src={image}
        alt=""
        style={{ maxWidth: productType === "products" ? "210px" : "180px" }}
      />

      <div className="card-content">
        <p className="card-price">
          <span className={`${discount && "original-price-with-discount"}`}>
            {price.toFixed(2)} €{" "}
          </span>
          {discount && (
            <span className="card-discount">{`${applyDiscount(price, discount)}€`}</span>
          )}
        </p>
        <p className="card-price-kg">
          <span className={`${discount && "original-price-with-discount"}`}>
            {kgPrice.toFixed(2)} €/kg
          </span>

          {discount && (
            <span className="card-discount-kg">{`${applyDiscount(kgPrice, discount)} €/kg `}</span>
          )}
        </p>

        <a href={link} className="card-link" aria-hidden="true">
          {productType === "products" ? (
            <h2 className="card-description" id={`product-${id}-title`}>
              {description}
            </h2>
          ) : (
            <h3 className="card-description" id={`product-${id}-title`}>
              {description}
            </h3>
          )}
        </a>
      </div>
      <CartActions
        id={id}
        productName={description}
        quantity={productCount}
        product={productToSave}
      />
    </article>
  );
};
export default CardProduct;
