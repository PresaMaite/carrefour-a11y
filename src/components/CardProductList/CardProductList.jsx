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
      price: 4.35,
      kgPrice: 7.25,
      discount: false,
    },
  ];

  const productData = {
    products,
    sponsored,
    reminder,
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
