import "./header.css";
import carrefourLogo from "../../assets/logo-carrefour.svg";
import questionIcon from "../../assets/icons/question-circle.svg";
import heart from "../../assets/icons/heart.svg";
import user from "../../assets/icons/person.svg";
import cartIcon from "../../assets/icons/cart.svg";
import searchIcon from "../../assets/icons/search.svg";
import Link from "../Link/Link";

const Header = ({ headerType = "classic" }) => {
  return (
    <>
      {headerType === "classic" ? (
        <header className="header-container">
          <img src={carrefourLogo} className="logo" alt="Carrefour logo" />

          <p>Menú</p>

          <Link href="/folletos" name="Folletos" />

          <div className="search">
            <form
              aria-label="Buscador de productos"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="buscador" className="visually-hidden">
                Buscador
              </label>
              <input
                name="buscador"
                type="search"
                id="buscador"
                placeholder="Buscar en todo Carrefour"
              ></input>
              <button type="submit">
                <img src={searchIcon} alt="Buscar" />
                <span className="visually-hidden">Enviar búsqueda</span>
              </button>
            </form>
          </div>
          <nav
            className="global-nav"
            aria-label="Navegación global, búsqueda y carrito"
          >
            <ul>
              <li>
                <Link
                  href="/folletos"
                  name="Ayuda y contacto"
                  icon={questionIcon}
                />
              </li>
              <li>
                <Link href="/folletos" name="Mis favoritos" icon={heart} />
              </li>
              <li>
                <Link href="/folletos" name="Mi cuenta" icon={user} />
              </li>
              <li>
                <Link
                  href="/carrito"
                  name="Cesta"
                  icon={cartIcon}
                  className="button-cart"
                >
                  {/* <img src={cartIcon} alt="" aria-hidden="true" /> */}
                  Cesta
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className="header-container-cart">
          <img src={carrefourLogo} className="logo" alt="Carrefour logo" />
          <ol class="stepper-step-list">
            <li
              aria-current="true"
              className="stepper-step-list-item stepper-step-list-item-active"
            >
              <span className="stepper-number">1</span>
              <span id="4f61510a-1a5a-4cf2-9a91-b578339e782f">Mi cesta</span>
            </li>
            <li className="stepper-connector"></li>
            <li className="stepper-step-list-item">
              <span className="stepper-number">2</span>
              <span id="3ee642d6-e66c-4511-8cd0-4a920a9056c3">
                Entrega y horario
              </span>
            </li>
            <li className="stepper-connector"></li>
            <li className="stepper-step-list-item">
              <span className="stepper-number">3</span>
              <span id="bf273867-8734-4d0a-bcf1-4f95068d1ad3">Pago</span>
            </li>
          </ol>
          <p>Pago 100% seguro</p>
        </header>
      )}
    </>
  );
};

export default Header;
