import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardProductList from "./components/CardProductList/CardProductList";
import FeaturedCards from "./components/FeaturedCards/FeaturedCards";
import Header from "./components/Header/Header";
import Marketing from "./components/Marketing/Marketing";
import ServicesCards from "./components/ServicesCards/ServicesCards";
import Footer from "./components/Footer/Footer";

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

  const servicesCards = [
    {
      title: "El Club Carrefour",
      links: [
        { link: "Hazte socio" },
        { link: "Ventajas ChequeAhorro" },
        { link: "Conoce nuestros partners" },
        { link: "Comunidades privadas" },
      ],
      imgUrl: new URL(
        "./assets/services/club-carrefour-vienes__ts1750237872955.png.png",
        import.meta.url,
      ).href,
    },
    {
      title: "Tarjeta ClubPASS",
      links: [
        { link: "Solicítala ahora" },
        { link: "Préstamos" },
        { link: "Financiación" },
        { link: "Acumula en ChequeAhorro" },
      ],
      imgUrl: new URL(
        "./assets/services/tarjetapassvertical__ts1751965025409.png.png",
        import.meta.url,
      ).href,
    },
    {
      title: "Envíos y devoluciones",
      links: [
        { link: "Envío a domicilio" },
        { link: "Recógelo en tienda gratis" },
        { link: "Click & Collect" },
        { link: "Devolución gratuita flexible" },
      ],
      imgUrl: new URL(
        "./assets/services/devoluciones__ts1750241491309.png.png",
        import.meta.url,
      ).href,
    },
    {
      title: "Viajes",
      links: [
        { link: "Viajes organizados" },
        { link: "Vuelos" },
        { link: "Hoteles" },
        { link: "Entradas" },
      ],
      imgUrl: new URL(
        "./assets/services/viajes__ts1750241490670.png.png",
        import.meta.url,
      ).href,
    },
    {
      title: "Seguros",
      links: [
        { link: "Hogar" },
        { link: "Mascotas" },
        { link: "Compra protegida" },
        { link: "Salud" },
      ],
      imgUrl: new URL(
        "./assets/services/seguro__ts1750241492680.png.png",
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
      <main id="main-content" tabIndex="-1">
        <h1 className="visually-hidden">Carrefour, tu supermercado online.</h1>
        <Marketing />

        <section
          aria-labelledby="my-products-title"
          className="my-products-title-section"
          id="marketing-end"
          tabIndex="-1"
        >
          <div className="my-products-title-card">
            <div className="my-products-title">
              <div className="title-wrapper">
                <h2 id="my-products-title">Mis productos</h2>
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

        <section aria-labelledby="forgot-items" className="forgot-items">
          <h2 id="forgot-items">¿Se te ha olvidado algo?</h2>
          <p className="forgot-items-text">
            <a href="#">
              Haz otro pedido en la misma franja de entrega en
              carrefour.es/supermercado.
            </a>{" "}
            ¡Con gastos de envío gratis!{" "}
            <span>
              Válido hasta 24h antes de la entrega del pedido principal. Límite
              de 6 artículos.
            </span>
          </p>
        </section>

        <section aria-labelledby="services" className="services">
          <h2 id="services" className="visually-hidden">
            Servicios Carrefour
          </h2>
          <ul className="services-list">
            {servicesCards.map(({ title, links, imgUrl }) => (
              <li className="services-list-items" key={title}>
                <ServicesCards title={title} links={links} icon={imgUrl} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="discovered-categories"
          className="discovered-categories"
        >
          <h2 id="discovered-categories">Descubre más...</h2>
          <ul className="discovered-categories-list">
            <li className="discovered-categories-list-items">
              <a href="#">Televisores y Smart TV</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Telefonía y Smartwatches</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Colchones y artículos para el descanso</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Consolas y Videojuegos</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Muebles de jardín</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Portátiles y Monitores</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Bebé y Mamá</a>
            </li>
            <li className="discovered-categories-list-items">
              <a href="#">Aire acondicionado</a>
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="online-supermarket"
          className="online-supermarket"
        >
          <h2 id="online-supermarket">
            Carrefour Online: Tu Supermercado, a tu manera, ¡más fácil y rápido
            que nunca!
          </h2>
          <p className="online-supermarket-text">
            ¿Cansado de las colas y de cargar con las bolsas? En Carrefour.es,
            encuentra todo lo que necesitas, desde productos frescos y
            alimentación hasta electrónica y hogar, ¡sin moverte del sofá! Elige
            cómo recibir tu compra: <a href="#">Entrega a domicilio</a>: recibe
            tu compra en 24 horas con un coste de envío de 3,99€, pero es GRATIS
            para compras superiores a 140€. Recogida GRATIS en{" "}
            <a href="#">Carrefour Drive</a>: recoge tu compra en tu Carrefour
            más cercano ¡sin bajarte del coche! <a href="#">Click & Collect</a>:
            recoge tu pedido en 2 horas en el punto de recogida que elijas.
          </p>
          <p className="online-supermarket-text">
            Además, disfruta de ofertas exclusivas online y un{" "}
            <a href="#">cupón de bienvenida para tu primera compra</a>.
            ¡Descubre la comodidad, el ahorro y la variedad de Carrefour Online!
            ¡Compra Ahora!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
