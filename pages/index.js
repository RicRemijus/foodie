import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import CategoryCard from '../components/CardCategory'
import Intro from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Avenue</title>
        <meta name="description" content="Best restaurant in lagos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      <Intro/>
      
      <div className={styles.small}>
        <CategoryCard image='/../public/fotos/Jollof-Rice-1.jpg' name="Rice" />
        <CategoryCard image='/../public/fotos/beans-with-fried-plantain.webp' name="Beans" />
        <CategoryCard image='/../public/fotos/noodles.png' name="Noodles" />
      </div>
      <div className={styles.large}>
        <CategoryCard image='/../public/fotos/soups.png' name="Soup" />
        <CategoryCard image='/../public/fotos/abacha.jpg' name="Abacha" />
      </div>
    </div>
    </>
  )
}
