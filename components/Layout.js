import React from 'react'
import Footer from './Footer';
import styles from '../styles/Layout.module.css'
import Header from './Header';

const Layout = ({children}) => {
    return (
        <>
            
            <Header/>
            <div div className={styles.wrapper}>
            {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;
