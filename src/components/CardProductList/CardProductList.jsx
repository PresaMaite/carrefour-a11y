import CardProduct from "../CardProduct/CardProduct";
import "./cardProductList.css";
import productImg1 from "../../assets/products/230466_00_1.webp";
import productImg2 from "../../assets/products/314729_00_1.webp";
import productImg3 from "../../assets/products/352809_00_1.webp";
import productImg4 from "../../assets/products/500749_00_1.webp";
import productImg5 from "../../assets/products/671402_00_1.webp";

import sponsoredImg1 from "../../assets/sponsored-products/026430_00_1.webp";
import sponsoredImg2 from "../../assets/sponsored-products/058404_00_1.webp";
import sponsoredImg3 from "../../assets/sponsored-products/346708_00_1.webp";
import sponsoredImg4 from "../../assets/sponsored-products/354442_00_1.webp";
import sponsoredImg5 from "../../assets/sponsored-products/492621_00_1.webp";
import sponsoredImg6 from "../../assets/sponsored-products/613093_00_1.webp";

import cartSponsoredImg1 from "../../assets/cart-sponsored-products/Café-cápsulas-blonde-espresso-roast.png";
import cartSponsoredImg2 from "../../assets/cart-sponsored-products/Café-cápsulas-Colombia.png";
import cartSponsoredImg3 from "../../assets/cart-sponsored-products/Café-cápsulas-Guatemala.png";
import cartSponsoredImg4 from "../../assets/cart-sponsored-products/Café-espresso-South-Asia.png";

import cartForgetImg1 from "../../assets/cart-forget/Gustosines-Cheetos.png";
import cartForgetImg2 from "../../assets/cart-forget/Cruesli-Quaker.png";
import cartForgetImg3 from "../../assets/cart-forget/Huevos-Camperos.png";
import cartForgetImg4 from "../../assets/cart-forget/Patata-lavada.png";

let CardProductList = ({ productType }) => {
  let products = [
    {
      id: "product-lotus-biscoff",
      description: "Galletas caramelizadas Lotus Biscoff 250gr",
      link: "#",
      image: productImg1,
      price: 2.15,
      kgPrice: 8.6,
      discount: false,
    },
    {
      id: "product-salmon-carrefour",
      description: "Salmón ahumado ecológico Carrefour bio 85gr",
      link: "#",
      image: productImg2,
      price: 4.65,
      kgPrice: 54.71,
      discount: false,
    },
    {
      id: "product-jumpers",
      description: "Aperitivo sabor mantequilla Jumpers 100g",
      link: "#",
      image: productImg3,
      price: 1.3,
      kgPrice: 13.0,
      discount: false,
    },
    {
      id: "product-leche-carrefour",
      description: "Leche entera ecológica Carrefour bio 1l",
      link: "#",
      image: productImg4,
      price: 1.26,
      kgPrice: 1.26,
      discount: false,
    },
    {
      id: "product-pharmaset",
      description: "Solución única Pharmaset pack 2 unidades 500ml",
      link: "#",
      image: productImg5,
      price: 12.99,
      kgPrice: 1.3,
      discount: false,
    },
  ];

  const sponsored = [
    {
      id: "sponsored-agua-solan",
      description: "Agua mineral Solán de Cabras 5l",
      link: "#",
      image: sponsoredImg1,
      price: 2.89,
      kgPrice: 0.58,
      discount: false,
    },
    {
      id: "sponsored-agua-font",
      description: "Agua mineral Font Vella 2l",
      link: "#",
      image: sponsoredImg2,
      price: 0.99,
      kgPrice: 0.49,
      discount: false,
    },
    {
      id: "sponsored-leche-nidina",
      description: "Leche infantil Nidina desde 6 meses 1,2kg",
      link: "#",
      image: sponsoredImg3,
      price: 23.6,
      kgPrice: 19.67,
      discount: false,
    },
    {
      id: "sponsored-actimel",
      description: "Actimel 0% azúcares 6x100g",
      link: "#",
      image: sponsoredImg4,
      price: 4.35,
      kgPrice: 7.25,
      discount: false,
    },
    {
      id: "sponsored-listerine",
      description: "Colutorio Listerine Advance White 500ml",
      link: "#",
      image: sponsoredImg5,
      price: 5.29,
      kgPrice: 1.06,
      discount: false,
    },
    {
      id: "sponsored-agua-bezoya",
      description: "Agua mineral Bezoya con grifo 8l",
      link: "#",
      image: sponsoredImg6,
      price: 3.75,
      kgPrice: 0.47,
      discount: false,
    },
  ];

  const reminder = [
    {
      id: "reminder-agua-solan",
      description: "Agua mineral Solán de Cabras 5l",
      link: "#",
      image: sponsoredImg1,
      price: 2.89,
      kgPrice: 0.58,
      discount: false,
    },
    {
      id: "reminder-agua-font",
      description: "Agua mineral Font Vella 2l",
      link: "#",
      image: sponsoredImg2,
      price: 0.99,
      kgPrice: 0.49,
      discount: false,
    },
    {
      id: "reminder-leche-nidina",
      description: "Leche infantil Nidina desde 6 meses 1,2kg",
      link: "#",
      image: sponsoredImg3,
      price: 23.6,
      kgPrice: 19.67,
      discount: false,
    },
    {
      id: "reminder-actimel",
      description: "Actimel 0% azúcares 6x100g",
      link: "#",
      image: sponsoredImg4,
      price: 4.15,
      kgPrice: 0.42,
      discount: false,
    },
  ];

  const cartSponsored = [
    {
      id: "espresso-south-asia",
      description: "Café cápsulas South Asia Starbucks 18 uds",
      link: "#",
      image: cartSponsoredImg4,
      price: 2.89,
      kgPrice: 0.58,
      discount: false,
    },
    {
      id: "espresso-Colombia",
      description: "Café cápsulas Colombia Starbucks 10 uds",
      link: "#",
      image: cartSponsoredImg2,
      price: 4.49,
      kgPrice: 0.45,
      discount: false,
    },
    {
      id: "espresso-Guatemala",
      description: "Café cápsulas Guatemala Starbucks 10 uds",
      link: "#",
      image: cartSponsoredImg3,
      price: 4.29,
      kgPrice: 0.43,
      discount: false,
    },
    {
      id: "espresso-blonde",
      description: "Café cápsulas blonde Starbucks 18 uds",
      link: "#",
      image: cartSponsoredImg1,
      price: 7.75,
      kgPrice: 0.43,
      discount: false,
    },
  ];

  const cartForget = [
    {
      id: "patata-lavada",
      description: "Patata lavada para todo uso Carrefour El Mercado 3 kg",
      link: "#",
      image: cartForgetImg4,
      price: 4.65,
      kgPrice: 1.55,
      discount: false,
    },
    {
      id: "cereales-cruesli",
      description:
        "Cereales con avena integral y chocolate Cruesli Quaker 375 g.",
      link: "#",
      image: cartForgetImg2,
      price: 5.39,
      kgPrice: 14.37,
      discount: false,
    },
    {
      id: "huevos-camperos",
      description: "Huevos Camperos Círculo de Calidad 12 ud.",
      link: "#",
      image: cartForgetImg3,
      price: 4.05,
      kgPrice: 4.05,
      discount: false,
    },
    {
      id: "gustosines-cheetos",
      description: "Aperitivo de maíz Gustosines Cheetos 75 g.",
      link: "#",
      image: cartForgetImg1,
      price: 1.64,
      kgPrice: 21.87,
      discount: false,
    },
  ];

  const productData = {
    products,
    sponsored,
    reminder,
    cartSponsored,
    cartForget,
  };

  return (
    <ul className={`card-${productType}-list`} aria-label="Mis productos">
      {productData[productType]?.map((product) => (
        <li key={product.id}>
          <CardProduct
            id={product.id}
            description={product.description}
            image={product.image}
            price={product.price}
            kgPrice={product.kgPrice}
            discount={product.discount}
            productType={productType}
          />
        </li>
      ))}
    </ul>
  );
};
export default CardProductList;
