import "./cartActions.css";

import Button from "../Button/Button";
import Trash from "../../assets/icons/trash3.svg";
import Plus from "../../assets/icons/plus-lg.svg";
import Minus from "../../assets/icons/dash-lg.svg";
import { useCart } from "../../context/CartContext.jsx";

const CartActions = ({ productName = "Producto", product }) => {
  const {
    addItem,
    decrementItem,
    setItemCount,
    showDeleteConfirm,
    showAdded,
    getItemCount,
  } = useCart();

  const count = getItemCount(product);

  const handleIncrement = () => addItem(product);
  const handleDecrement = () => {
    if (count <= 1) {
      showDeleteConfirm(product.id || product.description);
    } else {
      decrementItem(product);
    }
  };
  const handleQuantityChange = (e) => {
    const val = Number(e.target.value);
    if (val === 0) {
      showDeleteConfirm(product.id || product.description);
    } else {
      setItemCount(product, val);
    }
  };
  const handleRemove = () =>
    showDeleteConfirm(product.id || product.description);

  // If not in cart, show a single Add button
  if (count === 0) {
    return (
      <div className="cart-product-actions">
        <Button
          classStyles="primary"
          text="Añadir"
          ariaLabel={`Añadir ${productName} al carrito`}
          onClick={() => {
            addItem(product);
            showAdded(product);
          }}
        />
      </div>
    );
  }

  // Otherwise show increment/decrement/quantity/remove controls
  return (
    <div className="cart-product-actions">
      <div className="cart-product-quantity">
        <Button
          type="button"
          classStyles="primary"
          icon={Minus}
          onClick={handleDecrement}
          ariaLabel={`Disminuir cantidad de ${productName}`}
        />
        <label htmlFor={`quantity-${product.id}`} className="visually-hidden">
          Cantidad {productName}:
        </label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          name={`quantity-${product.id}`}
          min="1"
          value={count}
          onChange={handleQuantityChange}
        />
        <Button
          type="button"
          classStyles="primary"
          icon={Plus}
          onClick={handleIncrement}
          ariaLabel={`Aumentar cantidad de ${productName}`}
        />
      </div>

      <Button
        type="button"
        buttonType="secondary"
        ariaLabel={`Eliminar ${productName}`}
        classStyles="secondary"
        icon={Trash}
        onClick={handleRemove}
      />
    </div>
  );
};

export default CartActions;
