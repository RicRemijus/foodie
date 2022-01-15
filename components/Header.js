import React, {useState} from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/dist/client/image';
import {FiMenu, FiX, FiPhone} from 'react-icons/fi'
import {GrCart} from 'react-icons/gr'
const Header = () => {
    const [open, setOpen] = useState(false);
    //selecting cart from global state
    const cart = useSelector((state) => state.cart);
    //Getting counts of items
    const getItemsCount = () => {
        return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

    return (
        <div>
            <nav className="navbar">
              <Link href="/">
                  <a className="navLogo" onClick={() => setOpen(false)}>
                  <Image src='/fotos/restaurant-logo.jpg' alt="" width={150} height={100} />
                  </a>
              </Link>
              <ul className={open ? 'navLinks active' : 'navLinks'}>
                  <li className="navItem">
                      <Link href='/'>
                          <a className="navLink" onClick={() => setOpen(false)}>Home</a>
                      </Link>
                      </li>
                      <li className="navItem">
                      <Link href='/menu'>
                          <a className="navLink" onClick={() => setOpen(false)}>Menu</a>
                      </Link>
                  </li>
                  <li className="navItem">
                      <Link href='/cart'>
                          <a className="navLink" onClick={() => setOpen(false)}>
                              <GrCart style={{color:'red'}} size={'1.5rem'} /> ({getItemsCount()})<br/> MyCart
                          </a>
                      </Link>
                  </li>
                  <li className="navItem">
                      <Link href='/contact'>
                          <a className="navLink" onClick={() => setOpen(false)}> 
                          <FiPhone style={{color:'green'}} size={'1.2rem'} /> 08012345678 
                          </a>
                      </Link>
                  </li>
              </ul>
              <div onClick = {() => setOpen(!open)} className='navIcon'>
                {open ? <FiX/> : <FiMenu/>}
            </div>
            </nav>
            <style jsx>{`
                .navbar{
                    height:100px;
                    width:100%;
                    color:black;
                    position:fixed;
                    z-index:2;
                    display : flex;
                    padding : 0 2rem;
                    background: ghostwhite;
                    font-size: 1.2rem;
                    align-items:center;
                    justify-content : space-between;
                }
                .navLogo{
                    margin-top:auto;
                    text-decoration:none;
                    color:black;
                }
                .navLinks{
                    display:grid;
                    grid-gap:20px;
                    list-style:none;
                    grid-template-columns:repeat(4, auto);
                }
                .navLink{
                    color:black;
                    text-decoration:none;
                    transition : 0.3s all;
                }
                .navLink:hover{
                    color:red;
                }
                .navIcon{
                    display:none;
                   
                }
                @media (max-width:500px){
                    .navbar{
                        position:fixed;
                        z-index:2;
                    }
                    .navLinks{
                        display:flex;
                        flex-direction:column;
                        position:absolute;
                        text-align:center;
                        width:100%;
                        top:80px;
                        left:100%;
                        transition: 0.5s all;
                    }
                    .navLinks.active{
                        background:darkgrey;
                        left:0
                    }
                    .navItem{
                        padding:10px 0;
                        border-bottom:1px solid red
                    }
                    .navIcon{
                        display:flex;
                        font-size:3rem;
                        cursor:pointer;
                    }
                }

            `}</style>
            
        </div>
    )
}

export default Header;
