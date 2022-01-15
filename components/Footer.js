import styles from '../styles/Footer.module.css';
import Image from 'next/dist/client/image'; 

const Footer = () =>{
    return (
        <>
        <div className={styles.container}>   
            <div className={styles.item}>
              <Image src="/fotos/restaurant-logo.jpg" alt="" layout="fill" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>At Restaurant,  We Are Always At Your Service!!!</h2>
                    <p className={styles.text}>Visit our nearest location close to you or place a phone call ...</p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1654 R. Fegge Road #304.
                        <br />
                        Onitsha, 85022
                        <br /> (080) 123-45-678
                    </p>
                    <p className={styles.text}> 
                        2848 A. Ojodu berger #883
                        <br /> Port-harcourt
                        <br /> (080) 123-45-678
                    </p>
                    <p className={styles.text}>
                        28 Core Area 
                        <br /> Okpanam
                        <br /> (080) 123-45-678
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> WORKING HOURS</h1>
                    <p className={styles.text}>
                        MON - FRI
                        <br/> 8:00am - 22:00pm
                    </p>
                    <p className={styles.text}>
                        SAT - SUN
                        <br /> 12:00noon - 24:00pm

                    </p>

                </div>
            </div>
            </div>
            <footer className={styles.footer}>
            Copyright <span className={styles.brand}>Foodie </span>{''}
            {new Date().getFullYear()}
            </footer>
            </>
       
    );
};

export default Footer;