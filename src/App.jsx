import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardProductList from "./components/CardProductList/CardProductList";
import FeaturedCards from "./components/FeaturedCards/FeaturedCards";
import Header from "./components/Header/Header";
import Marketing from "./components/Marketing/Marketing";

function App() {
  const featuredCards = [
    {
      text: "Mis productos",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/misproductos3__ts1651158965692.png",
        import.meta.url,
      ).href,
    },

    {
      text: "Supermercado",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/icon_supermarket__ts1673520990419.png",
        import.meta.url,
      ).href,
    },

    {
      text: "Ofertas",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/ofertas__ts1583427574115-min__ts1658990716502.webp",
        import.meta.url,
      ).href,
    },
    {
      text: "Electrónica",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/04-electronica__ts1649774268620-min__ts1658990777185.png",
        import.meta.url,
      ).href,
    },

    {
      text: "Jardín",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/20260223-categoria-jardin-3__ts1771864938529.png",
        import.meta.url,
      ).href,
    },

    {
      text: "Móvil",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/08-movil-2__ts1771255273676.png",
        import.meta.url,
      ).href,
    },
    {
      text: "Electrodomésticos",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/05-electro__ts1649774269110-min__ts1658990777686.webp",
        import.meta.url,
      ).href,
    },

    {
      text: "Moda",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/002-moda__ts1649774472053-min__ts1658990776156.png",
        import.meta.url,
      ).href,
    },
    {
      text: "Balizas",
      href: "#",
      imgUrl: new URL(
        "./assets/featured-categories/baliza_nueva-1__ts1764243327447.png",
        import.meta.url,
      ).href,
    },
  ];

  useEffect(() => {
    document.title = "Home | Carrefour";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Marketing />

        <section
          aria-labelledby="my-products-title"
          className="my-products-title-section"
        >
          <div className="my-products-title-card">
            <div className="my-products-title">
              <div className="title-wrapper">
                <h1 id="my-products-title">Mis productos</h1>
                <span>
                  Todos los productos comprados en el Supermercado Carrefour
                </span>
              </div>
              <span className="my-products-image"></span>
              <span className="my-products-button">
                <Button text="Ir a Mis productos" />
              </span>
            </div>
          </div>
          <div className="my-products-list">
            <CardProductList productType="products" />
          </div>
        </section>

        <section
          aria-labelledby="featured-categories"
          className="featured-categories"
        >
          <h2 id="featured-categories">Categorías destacadas</h2>
          <ul className="featured-categories-list">
            {featuredCards.map(({ text, href, imgUrl }) => (
              <li className="featured-categories-list-items" key={text}>
                <FeaturedCards text={text} href={href} imgUrl={imgUrl} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="sponsored-categories"
          className="sponsored-title-section"
        >
          <h2 id="sponsored-categories">Productos patrocinados</h2>

          <div className="sponsored-list">
            <CardProductList productType="sponsored" />
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
