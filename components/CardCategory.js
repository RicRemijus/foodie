import Link from "next/dist/client/link";
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.css';

const CategoryCard = ({ image, name }) => {
    return(
        <div className={styles.card}>
            <Image className={styles.image} src={image} height={700} width={1300} alt={''}/>
            <Link href={`/category/${name.toLowerCase()}`}>
                <div className={styles.info}>
                    <h3>{name} <br /> more details</h3>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;