import "./cartProduct.css";

import CartActions from "../CartActions/CartActions";

const CartProduct = ({ product, isCart = false }) => {
  const { description: productName = "Producto", image: imgSrc = "" } =
    product || {};

  const count = product.count || 1;
  const price = Number(product.price || 0);
  const priceDisplay = (count * price).toFixed(2);
  return (
    <div className="cart-product">
      <img
        className="cart-product-image"
        src={imgSrc}
        alt=""
        aria-hidden="true"
      ></img>

      <div className="cart-product-info">
        <h2>{productName}</h2>
        <CartActions
          productName={productName}
          product={product}
          isCart={isCart}
        />
        <div className="cart-product-price">{priceDisplay}€</div>
      </div>
    </div>
  );
};

export default CartProduct;
