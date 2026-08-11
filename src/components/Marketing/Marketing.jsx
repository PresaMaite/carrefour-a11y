import "./marketing.css";
import banner1 from "../../assets/marketing/cintillo_desktop_descuentos__ts1778483578318.jpg";
import banner2 from "../../assets/marketing/megabanner-1__ts1778485062687.jpg";
import banner3 from "../../assets/marketing/20260515-mega-banner-envio-mayo__ts1778765426283.jpg";
import banner4 from "../../assets/marketing/unnamed-8__ts1778754327706.jpg";
import banner5 from "../../assets/marketing/herobanner_food_imbatible_jamones_15mayo__ts1778754570830.jpg";
import banner6 from "../../assets/marketing/20260428-hero-banner-aire__ts1778773661486.webp";
import banner7 from "../../assets/marketing/20260515-hero-banner-piscinas__ts1778759491633.jpg";
import banner8 from "../../assets/marketing/20261205-mega-banner-superchollos-tv__ts1778506350929.jpg";
import banner9 from "../../assets/marketing/20260506-mega-banner-semana-de-internet__ts1777994298145.webp";
import banner10 from "../../assets/marketing/servicio-drive__ts1740997408526.jpg";
import banner11 from "../../assets/marketing/banners-ecommerce-crf-1280x111__ts1776678154072.png";
import banner12 from "../../assets/marketing/cintillo_deskimbatible_lomo_15mayo__ts1778754970278.jpg";
import Skiplink from "../Skiplink/Skiplink";

const Marketing = () => {
  return (
    <section aria-labelledby="marketing-title">
      <Skiplink text="Saltar promociones" href="#marketing-end" />
      <h2 id="marketing-title" className="visually-hidden">
        Promociones
      </h2>
      <div className="grid-container">
        <div className="grid-item one">
          <a href="#">
            <span className="visually-hidden">
              Descuentos del 30 y 50% hasta el 25 de mayo.
            </span>
            <img src={banner1} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item two">
          <a href="#">
            <span className="visually-hidden">
              El 50% que vuelve, en más de mil productos hasta el 25 de mayo.
            </span>
            <img src={banner2} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item three">
          <a href="#">
            <span className="visually-hidden">
              Envío gratis en toda la moda hasta el 17 de mayo.
            </span>
            <img src={banner3} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item four">
          <a href="#">
            <span className="visually-hidden">
              10€ de descuento en tu compra online con el código SUPER26MAY (en
              mayúsculas).
            </span>
            <img src={banner4} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item five">
          <a href="#">
            <span className="visually-hidden">
              20% de descuento en todos los jamones y paletas hasta el 17 de
              mayo.
            </span>
            <img src={banner5} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item six">
          <a href="#">
            <span className="visually-hidden">
              Descuentos en aire acondicionado hasta el 24 de mayo.
            </span>
            <img src={banner6} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item seven">
          <a href="#">
            <span className="visually-hidden">
              Descuento en piscinas hasta el 18 de junio.
            </span>
            <img src={banner7} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item eight">
          <a href="#">
            <span className="visually-hidden">
              Superchollos en televisores con envío gratis hasta el 25 de mayo.
            </span>
            <img src={banner8} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item nine">
          <a href="#">
            <span className="visually-hidden">
              Semana de internet hasta 60% de descuento exclusivo online hasta
              el 17 de mayo.
            </span>
            <img src={banner9} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item ten">
          <button type="button" aria-haspopup="dialog">
            <span className="visually-hidden">
              Servicio Drive gratis y en 24 horas a partir de 30€.
            </span>

            <img src={banner10} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className="grid-item eleven">
          <a href="#">
            <span className="visually-hidden">
              Solicita tu Tarjeta Clubpass y consigue 20€ de descuento.
            </span>
            <img src={banner11} alt="" aria-hidden="true" />
          </a>
        </div>

        <div className="grid-item twelve">
          <a href="#">
            <span className="visually-hidden">
              Precios imbatibles hasta el 17 de mayo.
            </span>
            <img src={banner12} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
