import "./cart.css";
import Link from "../../components/Link/Link";
import CardProductList from "../../components/CardProductList/CardProductList";
import Header from "../../components/Header/Header";
import LeftArrow from "../../assets/icons/arrow-left.svg";
import Button from "../../components/Button/Button";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useCart } from "../../context/CartContext.jsx";
import { useEffect } from "react";

const Cart = () => {
  const { data, getCartPrice } = useCart();

  const totalCount = data.reduce((s, p) => s + (p.count || 1), 0);

  useEffect(() => {
    document.title = "Mi cesta - Paso 1 de 3 | Carrefour";
  }, []);
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
            <ul className="cart-product-list" aria-label="Mis productos">
              {data.length === 0 ? (
                <li>Tu cesta está vacía</li>
              ) : (
                data.map((p) => (
                  <li key={p.id}>
                    <CartProduct product={p} />
                  </li>
                ))
              )}
            </ul>

            <section aria-labelledby="cart-reminder-title">
              <h2 id="cart-reminder-title">Que no se te olvide</h2>
              <div className="cart-product-list" aria-label="Mis productos">
                <CardProductList productType="reminder" />
              </div>
            </section>
          </section>
          <section aria-labelledby="cart-sponsored-title">
            <h2 id="cart-sponsored-title">Productos patrocinados</h2>
            <div className="cart-product-list" aria-label="Mis productos">
              <CardProductList productType="reminder" />
            </div>
          </section>
        </main>
        <aside className="cart-summary" aria-label="Resumen de la compra">
          <h2>¿Quieres introducir un cupón?</h2>
          <div className="cart-coupon">
            <form
              aria-label="Introducir cupón"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="cupon" className="visually-hidden">
                Cupón
              </label>
              <input
                name="cupon"
                type="text"
                id="cupon"
                placeholder="Inserta un cupón"
              ></input>
              <button type="submit">
                <span>Validar</span>
              </button>
            </form>
          </div>
          <p>Total: {getCartPrice().toFixed(2)} €</p>
          <Button
            type="button"
            classStyles="cart-button"
            text="Continuar a entrega"
          />
        </aside>
      </div>
    </>
  );
};

export default Cart;
