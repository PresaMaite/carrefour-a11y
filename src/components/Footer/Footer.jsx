import ConfianzaOnline from "../../assets/footer-icons/Confianza online.png";
import UnionEuropea from "../../assets/footer-icons/Litigios de la Unión Europea.png";
import ADigital from "../../assets/footer-icons/ADigital.png";
import Pagos from "../../assets/footer-icons/Métodos de pago.png";
import Premios from "../../assets/footer-icons/Premios y reconocimientos.png";

import YouTube from "../../assets/social/youtube.svg";
import Facebook from "../../assets/social/facebook.svg";
import Twitter from "../../assets/social/twitter-x.svg";
import Linkedin from "../../assets/social/linkedin.svg";
import Pinterest from "../../assets/social/pinterest.svg";
import Instagram from "../../assets/social/instagram.svg";

import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* Versión Mobile */}
      <footer className="footer-mobile">
        <h2 className="visually-hidden">Enlaces de pie de página</h2>
        <div className="footer-container">
          <ul>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Grupo Carrefour</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Carrefour en España</a>
                    </li>
                    <li>
                      <a href="#">Trabaja con nosotros</a>
                    </li>
                    <li>
                      <a href="#">Tarjeta ClubPASS</a>
                    </li>
                    <li>
                      <a href="#">Abre tu franquicia</a>
                    </li>
                    <li>
                      <a href="#">Club Carrefour</a>
                    </li>
                    <li>
                      <a href="#">Nuestros compromisos</a>
                    </li>
                    <li>
                      <a href="#">Nuestras marcas</a>
                    </li>
                    <li>
                      <a href="#">Act for Food</a>
                    </li>
                    <li>
                      <a href="#">Seguros Carrefour</a>
                    </li>
                    <li>
                      <a href="#">Viajes Carrefour</a>
                    </li>
                    <li>
                      <a href="#">Carrefour Links</a>
                    </li>
                    <li>
                      <a href="#">Responsabilidad Social corporativa</a>
                    </li>
                    <li>
                      <a href="#">Premios y reconocimientos</a>
                    </li>
                    <li>
                      <a href="#">Derechos de protección de datos</a>
                    </li>
                    <li>
                      <a href="#">Línea de ética y cumplimiento normativo</a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Atención al cliente</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Contacto</a>
                    </li>
                    <li>
                      <a href="#">Preguntas frecuentes</a>
                    </li>
                    <li>
                      <a href="#">Facturas</a>
                    </li>
                    <li>
                      <a href="#">Mapa web</a>
                    </li>
                    <li>
                      <a href="#">Suscríbete a nuestra newsletter</a>
                    </li>
                    <li>
                      <a href="#">Alerta de seguridad</a>
                    </li>
                    <li>
                      <a href="#">
                        Quejas, reclamaciones y denuncia de contenidos ilícitos
                        de terceros
                      </a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Tiendas</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Localiza tu tienda</a>
                    </li>
                    <li>
                      <a href="#">Supermercados cerca de ti</a>
                    </li>
                    <li>
                      <a href="#">Hipermercados</a>
                    </li>
                    <li>
                      <a href="#">Carrefour Market</a>
                    </li>
                    <li>
                      <a href="#">Carrefour Express</a>
                    </li>
                    <li>
                      <a href="#">Folletos</a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Carrefour Empresas</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Contacta con nosotros</a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Carrefour.es</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Quienes somos</a>
                    </li>
                    <li>
                      <a href="#">Entrega y recogida de pedidos</a>
                    </li>
                    <li>
                      <a href="#">Carrefour Drive</a>
                    </li>
                    <li>
                      <a href="#">Click&Collect</a>
                    </li>
                    <li>
                      <a href="#">Estado del pedido</a>
                    </li>
                    <li>
                      <a href="#">Devoluciones</a>
                    </li>
                    <li>
                      <a href="#">Garantía de frescura</a>
                    </li>
                    <li>
                      <a href="#">Vender en marketplace</a>
                    </li>
                    <li>
                      <a href="#">Productos vendidos por terceros</a>
                    </li>
                    <li>
                      <a href="#">Outlet</a>
                    </li>
                    <li>
                      <a href="#">Calendario promocional</a>
                    </li>
                    <li>
                      <a href="#">Consejos, ideas y trucos</a>
                    </li>
                    <li>
                      <a href="#">Nuestras recetas</a>
                    </li>
                    <li>
                      <a href="#">Condiciones de compra</a>
                    </li>
                    <li>
                      <a href="#">Instalación electrodomésticos</a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
            <li>
              <details className="desplegable-accesible">
                <summary>
                  <h3>Ofertas y campañas</h3>
                </summary>
                <nav className="contenido">
                  <ul>
                    <li>
                      <a href="#">Ofertas supermercado online</a>
                    </li>
                    <li>
                      <a href="#">Cupón descuento súper online</a>
                    </li>
                    <li>
                      <a href="#">Precios imbatibles</a>
                    </li>
                    <li>
                      <a href="#">Aire acondicionado split</a>
                    </li>
                    <li>
                      <a href="#">Aire acondicionado portátil</a>
                    </li>
                    <li>
                      <a href="#">
                        Aire acondicionado con instalación básica incluida
                      </a>
                    </li>
                    <li>
                      <a href="#">Ventiladores</a>
                    </li>
                    <li>
                      <a href="#">Conjuntos de jardín</a>
                    </li>
                    <li>
                      <a href="#">Muebles de jardín</a>
                    </li>
                    <li>
                      <a href="#">Piscinas</a>
                    </li>
                    <li>
                      <a href="#">Envío gratis de bebé desde 29€</a>
                    </li>
                    <li>
                      <a href="#">Sillas de coche de bebé</a>
                    </li>
                    <li>
                      <a href="#">Carritos de bebé</a>
                    </li>
                    <li>
                      <a href="#">Stock fuera -40% de descuento</a>
                    </li>
                    <li>
                      <a href="#">Ofertas exclusivas online</a>
                    </li>
                    <li>
                      <a href="#">Móviles y Smartphones</a>
                    </li>
                    <li>
                      <a href="#">PlayStation 5</a>
                    </li>
                    <li>
                      <a href="#">iPhone 17</a>
                    </li>
                  </ul>
                </nav>
              </details>
            </li>
          </ul>
        </div>
      </footer>

      {/* Versión Desktop */}
      <footer className="footer-desktop">
        <h2 className="visually-hidden">Enlaces de interés</h2>
        <ul className="footer-container">
          <li className="footer-section">
            <h3>Grupo Carrefour</h3>

            <ul>
              <li>
                <a href="#">Carrefour en España</a>
              </li>
              <li>
                <a href="#">Trabaja con nosotros</a>
              </li>
              <li>
                <a href="#">Tarjeta ClubPASS</a>
              </li>
              <li>
                <a href="#">Abre tu franquicia</a>
              </li>
              <li>
                <a href="#">Club Carrefour</a>
              </li>
              <li>
                <a href="#">Nuestros compromisos</a>
              </li>
              <li>
                <a href="#">Nuestras marcas</a>
              </li>
              <li>
                <a href="#">Act for Food</a>
              </li>
              <li>
                <a href="#">Seguros Carrefour</a>
              </li>
              <li>
                <a href="#">Viajes Carrefour</a>
              </li>
              <li>
                <a href="#">Carrefour Links</a>
              </li>
              <li>
                <a href="#">Responsabilidad Social corporativa</a>
              </li>
              <li>
                <a href="#">Premios y reconocimientos</a>
              </li>
              <li>
                <a href="#">Derechos de protección de datos</a>
              </li>
              <li>
                <a href="#">Línea de ética y cumplimiento normativo</a>
              </li>
            </ul>
          </li>

          <li className="footer-section">
            <h3>Atención al cliente</h3>

            <ul>
              <li>
                <a href="#">Contacto</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Facturas</a>
              </li>
              <li>
                <a href="#">Mapa web</a>
              </li>
              <li>
                <a href="#">Suscríbete a nuestra newsletter</a>
              </li>
              <li>
                <a href="#">Alerta de seguridad</a>
              </li>
              <li>
                <a href="#">
                  Quejas, reclamaciones y denuncia de contenidos ilícitos de
                  terceros
                </a>
              </li>
            </ul>
          </li>

          <li className="footer-section">
            <h3>Tiendas</h3>

            <ul>
              <li>
                <a href="#">Localiza tu tienda</a>
              </li>
              <li>
                <a href="#">Supermercados cerca de ti</a>
              </li>
              <li>
                <a href="#">Hipermercados</a>
              </li>
              <li>
                <a href="#">Carrefour Market</a>
              </li>
              <li>
                <a href="#">Carrefour Express</a>
              </li>
              <li>
                <a href="#">Folletos</a>
              </li>
            </ul>
          </li>

          <li className="footer-section">
            <h3>Carrefour Empresas</h3>

            <ul>
              <li>
                <a href="#">Contacta con nosotros</a>
              </li>
            </ul>
          </li>

          <li className="footer-section">
            <h3>Carrefour.es</h3>

            <ul>
              <li>
                <a href="#">Quienes somos</a>
              </li>
              <li>
                <a href="#">Entrega y recogida de pedidos</a>
              </li>
              <li>
                <a href="#">Carrefour Drive</a>
              </li>
              <li>
                <a href="#">Click&Collect</a>
              </li>
              <li>
                <a href="#">Estado del pedido</a>
              </li>
              <li>
                <a href="#">Devoluciones</a>
              </li>
              <li>
                <a href="#">Garantía de frescura</a>
              </li>
              <li>
                <a href="#">Vender en marketplace</a>
              </li>
              <li>
                <a href="#">Productos vendidos por terceros</a>
              </li>
              <li>
                <a href="#">Outlet</a>
              </li>
              <li>
                <a href="#">Calendario promocional</a>
              </li>
              <li>
                <a href="#">Consejos, ideas y trucos</a>
              </li>
              <li>
                <a href="#">Nuestras recetas</a>
              </li>
              <li>
                <a href="#">Condiciones de compra</a>
              </li>
              <li>
                <a href="#">Instalación electrodomésticos</a>
              </li>
            </ul>
          </li>

          <li className="footer-section">
            <h3>Ofertas y campañas</h3>

            <ul>
              <li>
                <a href="#">Ofertas supermercado online</a>
              </li>
              <li>
                <a href="#">Cupón descuento súper online</a>
              </li>
              <li>
                <a href="#">Precios imbatibles</a>
              </li>
              <li>
                <a href="#">Aire acondicionado split</a>
              </li>
              <li>
                <a href="#">Aire acondicionado portátil</a>
              </li>
              <li>
                <a href="#">
                  Aire acondicionado con instalación básica incluida
                </a>
              </li>
              <li>
                <a href="#">Ventiladores</a>
              </li>
              <li>
                <a href="#">Conjuntos de jardín</a>
              </li>
              <li>
                <a href="#">Muebles de jardín</a>
              </li>
              <li>
                <a href="#">Piscinas</a>
              </li>
              <li>
                <a href="#">Envío gratis de bebé desde 29€</a>
              </li>
              <li>
                <a href="#">Sillas de coche de bebé</a>
              </li>
              <li>
                <a href="#">Carritos de bebé</a>
              </li>
              <li>
                <a href="#">Stock fuera -40% de descuento</a>
              </li>
              <li>
                <a href="#">Ofertas exclusivas online</a>
              </li>
              <li>
                <a href="#">Móviles y Smartphones</a>
              </li>
              <li>
                <a href="#">PlayStation 5</a>
              </li>
              <li>
                <a href="#">iPhone 17</a>
              </li>
            </ul>
          </li>
          <li className="footer-section">
            <h3>Garantía de Carrefour</h3>

            <ul>
              <li>
                <a href="#">
                  <img
                    src={ConfianzaOnline}
                    alt="Confianza Online"
                    title="Confianza Online"
                  />
                </a>
              </li>
              <li>
                <img src={ADigital} alt="ADigital" title="ADigital" />
              </li>
              <li>
                <img
                  src={UnionEuropea}
                  alt="Litigios de la Unión Europea"
                  title="Litigios de la Unión Europea"
                />
              </li>
            </ul>
          </li>
          <li className="footer-section">
            <h3>Métodos de pago</h3>
            <ul>
              <li>
                <a href="#">
                  <img
                    src={Pagos}
                    alt="Métodos aceptados: PASS, Mastercard, Visa, American Express y PayPal"
                    title="PASS, Mastercard, Visa, American Express y PayPal"
                  />
                </a>
              </li>
            </ul>
          </li>
          <li className="footer-section">
            <h3>Premios y reconocimientos</h3>
            <ul>
              <li>
                <a href="#">
                  <img
                    src={Premios}
                    alt="Premios y reconocimientos"
                    title="Premios y reconocimientos"
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="footer-bottom">
          <span>© CENTROS COMERCIALES CARREFOUR, S.A.</span>

          <h3 className="visually-hidden">Enlaces de pie de página</h3>
          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Aviso legal</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>{" "}
            <li>
              <a href="#">Accesibilidad</a>
            </li>
          </ul>

          <h3 id="social-media" className="visually-hidden">
            Nuestras redes sociales
          </h3>
          <ul className="social-media" aria-labelledby="social-media">
            <li>
              <a href="#">
                <img src={YouTube} alt="YouTube" title="YouTube" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Facebook} alt="Facebook" title="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Twitter} alt="Twitter" title="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Linkedin} alt="LinkedIn" title="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Pinterest} alt="Pinterest" title="Pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Instagram} alt="Instagram" title="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
