import CardProduct from "../CardProduct/CardProduct";
import { useData } from "../../context/DataContext";
import "./cardProductList.css";


let CardProductList = ({ productType }) => {
  let {data} = useData();


  return (
    <ul className={`card-${productType}-list`} aria-label="Mis productos">
      {data[productType]?.map((product) => (
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
