import "./cart.css";
import Link from "../../components/Link/Link";
import CardProductList from "../../components/CardProductList/CardProductList";
import Header from "../../components/Header/Header";
import LeftArrow from "../../assets/icons/arrow-left.svg";
import Button from "../../components/Button/Button";
import CartProduct from "../../components/CartProduct/CartProduct";

import Pagos from "../../assets/footer-icons/Métodos de pago.png";

import { useCart } from "../../context/CartContext.jsx";
import { useEffect, useState, useRef } from "react";

const Cart = () => {
  const { data, getCartPrice } = useCart();
  const [total, setTotal] = useState(3.99);

  const [cupon, setCupon] = useState("");
  const cuponRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    let isValidFormat = /^[a-zA-Z0-9]+$/.test(cupon);
    if (cupon === "DESC25") {
      setError("");
    } else if (!isValidFormat) {
      setError("El cupón no es válido.");
      cuponRef.current?.focus();
    } else {
      setError("El cupón introducido no existe.");
      cuponRef.current?.focus();
    }
  };

  const totalCount = data.reduce((s, p) => s + (p.count || 1), 0);

  useEffect(() => {
    document.title = "Mi cesta - Paso 1 de 3 | Carrefour";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTotal(getCartPrice() + 3.99);
    }, 0);
  }, [getCartPrice, setTotal, data]);

  return (
    <>
      <Header headerType="cart" />
      <div className="cart-container">
        <main className="cart">
          <Link
            href="/"
            name="Seguir comprando"
            linkClass="cart-link"
            icon={LeftArrow}
          ></Link>
          <section aria-labelledby="cart-title">
            <h1 id="cart-title">Mi cesta ({totalCount} productos)</h1>
            <section aria-labelledby="cart-products-title">
              <h2 className="visually-hidden" id="cart-products-title">
                Productos
              </h2>
              <ul className="cart-product-list" aria-label="Mis productos">
                {data.length === 0 ? (
                  <li>Tu cesta está vacía</li>
                ) : (
                  data.map((p) => (
                    <li key={p.id}>
                      <CartProduct product={p} isCart={true} />
                    </li>
                  ))
                )}
              </ul>
            </section>

            <section aria-labelledby="cart-reminder-title">
              <h2 id="cart-reminder-title">Que no se te olvide</h2>
              <div className="cart-product-list">
                <CardProductList productType="cartForget" />
              </div>
            </section>
          </section>
          <section aria-labelledby="cart-sponsored-title">
            <h2 id="cart-sponsored-title">Productos patrocinados</h2>
            <div className="cart-product-list">
              <CardProductList productType="cartSponsored" />
            </div>
          </section>
        </main>
        <aside className="cart-summary" aria-label="Resumen de la compra">
          <section
            aria-labelledby="cart-coupon-title"
            className="cart-coupon-section"
          >
            <h2 id="cart-coupon-title">¿Quieres introducir un cupón?</h2>
            <div className="cart-coupon">
              <form
                aria-label="Introducir cupón"
                onSubmit={(e) => {
                  handleSubmit();
                  e.preventDefault();
                }}
              >
                <div className="cart-coupon-input">
                  <label htmlFor="cupon">Cupón</label>
                  <span id="ayuda-cupon" className="texto-ayuda">
                    Introduce solo letras y números.
                  </span>
                  <input
                    name="cupon"
                    type="text"
                    id="cupon"
                    ref={cuponRef}
                    onChange={() => {
                      setCupon(event.target.value);
                    }}
                    placeholder="Ej: DESC25"
                    aria-describedby={`ayuda-cupon ${error ? "cupon-error" : ""}`}
                    aria-invalid={error ? "true" : "false"}
                    pattern="[a-zA-Z0-9]+"
                  ></input>
                  {error && (
                    <p className="cupon-error" id="cupon-error">
                      {error}
                    </p>
                  )}

                  {cupon === "DESC25" && (
                    <p className="cupon-valid" id="cupon-valid">
                      {cupon === "DESC25"}
                    </p>
                  )}
                </div>

                <Button
                  ariaLabel="Validar cupón"
                  type="submit"
                  classStyles="primary"
                  text="Validar"
                />
              </form>
            </div>
          </section>

          <section
            aria-labelledby="cart-summary-title"
            className="cart-summary-section"
          >
            <h2 id="cart-summary-title" className="visually-hidden">
              Resumen de la compra
            </h2>
            <ul className="cart-summary-list" aria-label="Resumen de la compra">
              <li>
                <span>Supermercado</span>
                <span>{getCartPrice().toFixed(2)} €</span>
              </li>
              <li>
                <span>Descuentos</span>
                <span>0.00€</span>
              </li>
              <li>
                <span>Gastos de envío</span>
                <span>3.99€</span>
              </li>
              <li>
                <span>Total:</span>
                <span>{total.toFixed(2)} €</span>
              </li>
            </ul>

            <Button
              type="button"
              classStyles="cart-button"
              text="Continuar a entrega"
            />
          </section>
        </aside>
      </div>
      <footer className="cart-footer">
        <section aria-labelledby="cart-payment-title" className="cart-payment">
          <h3 id="cart-payment-title" className="visually-hidden">
            Métodos de pago
          </h3>
          <span>100% Seguro</span>
          <a href="#">
            <img
              src={Pagos}
              alt="Métodos aceptados: PASS, Mastercard, Visa, American Express y PayPal"
              title="PASS, Mastercard, Visa, American Express y PayPal"
            />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Cart;
