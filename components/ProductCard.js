import Image from "next/dist/client/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({product}) => {
    
  const dispatch = useDispatch();

    return(
        <div className={styles}>
          <h5 className={styles.category}>{product.category}</h5>
         <div className={styles.pimage}>
         <Image src={product.image} height={300} width={320} alt={''}/>
         </div>
          <h4 className={styles.title}>{product.product}</h4>
          
          <p> &#x20A6; {product.price}</p>
          <button className={styles.button} type="submit"
          onClick={() => dispatch(addToCart(product))} >
            Add To Cart
          </button>
        </div>
    );

};

export default ProductCard;