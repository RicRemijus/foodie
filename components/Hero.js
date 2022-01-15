import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../styles/Hero.module.css'

const Intro = () => {
    return (
        <>
        <div className={styles.heroContainer}>
               <div className={styles.introBody}>
               <h2 className={styles.introHeading}>Home-cooked delights at your Fingertips!</h2>
                <p className={styles.introText}>Freshly cooked with love from passionate chefs in our team. we aim to provide you with nutritious and healthy meals that are fulfilling, tasty and light on your pocket</p>
                <button type="submit" className={styles.btn}>Place your Order Now <br />&#x1f4de; 08012345768</button>
               </div>
                <div className={styles.introImage}>
                    <Image src='/fotos/variety.png'alt=""  width={700} height={500}/>
                </div>
        </div>
        <div className={styles.container}>
            <div className={styles.content}> 
            <div className={styles.textBody}>
                <h1 className={styles.text}>Greatest Cuisine Ever Made</h1>
                <p className={styles.time}>Ready In 60seconds</p>
                 <button type="submit" className={styles.btn}>Place your Order Now <br/>
                  &#x1f4de; 08012345768
                 </button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Intro;
