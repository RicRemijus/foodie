import { useRouter } from "next/dist/client/router";
import ProductCard from "../../components/ProductCard"; 
import styles from '../../styles/Menu.module.css';
import { getProductsByCategory } from '../api/products/[category]';

const CategoryPage = ({ products }) => {
    const router = useRouter();
    return(
        <div className={styles.container}>
        <h1 className={styles.title}> Our eye-catchy and tasty {router.query.category} Menu</h1>
        <div className={styles.cards}>
           {products.map((product) =>(
           <ProductCard key={product.id} product={product} />
           ))}
        </div>
    </div> 
    );
};
export default CategoryPage;

export async function getServerSideProps(ctx){
     const category = ctx.query.category;
     const products = await getProductsByCategory(category);
     return {props : { products }};
 } 