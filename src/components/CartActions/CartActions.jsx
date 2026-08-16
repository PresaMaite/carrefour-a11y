import { useState, useEffect } from "react";
import "./cartActions.css";

import Button from "../Button/Button";
import Trash from "../../assets/icons/trash3.svg";
import Plus from "../../assets/icons/plus-lg.svg";
import Minus from "../../assets/icons/dash-lg.svg";
import { useCart } from "../../context/CartContext.jsx";

const CartActions = ({ productName = "Producto", product, isCart = false }) => {
  const {
    addItem,
    decrementItem,
    setItemCount,
    showDeleteConfirm,
    getItemCount,
  } = useCart();

  const [liveMessage, setLiveMessage] = useState("");
  const count = getItemCount(product);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => {
        setLiveMessage(`${productName} eliminado de la cesta`);
      }, 0);
    }
  }, [count, productName]);

  const handleIncrement = () => {
    addItem(product);
    setLiveMessage(`${productName} cantidad ${count + 1}`);
  };

  const handleDecrement = () => {
    if (count <= 1) {
      showDeleteConfirm(product.id || product.description);
    } else {
      decrementItem(product);
      setLiveMessage(`${productName} cantidad ${count - 1}`);
    }
  };

  const handleQuantityChange = (e) => {
    const val = Number(e.target.value);
    if (val === 0) {
      showDeleteConfirm(product.id || product.description);
    } else {
      setItemCount(product, val);
      setLiveMessage(`${productName} cantidad ${val}`);
    }
  };

  const handleRemove = () => {
    showDeleteConfirm(product.id || product.description);
  };

  return (
    <div className="cart-product-actions">
      {count === 0 ? (
        <Button
          classStyles="primary"
          text="Añadir"
          ariaLabel={`Añadir ${productName} al carrito`}
          onClick={() => {
            addItem(product);
            setLiveMessage(`${productName} añadido a la cesta`);
          }}
        />
      ) : (
        <>
          <div className="cart-product-quantity">
            <Button
              type="button"
              classStyles="primary"
              icon={Minus}
              onClick={handleDecrement}
              ariaLabel={`Disminuir cantidad de ${productName}`}
            />
            <label
              htmlFor={`${isCart ? "cart" : "product"}-${product.id}`}
              className="visually-hidden"
            >
              Cantidad {productName}:
            </label>
            <input
              type="number"
              id={`${isCart ? "cart" : "product"}-${product.id}`}
              name={`${isCart ? "cart" : "product"}-${product.id}`}
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
        </>
      )}

      <div aria-live="assertive" aria-atomic="true" className="visually-hidden">
        {liveMessage}
      </div>
    </div>
  );
};

export default CartActions;
