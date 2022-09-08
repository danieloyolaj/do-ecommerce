import React from "react"
import Cart from '../routes/Cart'
import { NavLink } from "react-router-dom"
import LoggedIn from '../routes/Login'
import '../shared/styles/cart.css'

const Header = ({ setIsLogged }) => {

  const openCart = e => {
    if(setIsLogged){
      const modal = document.getElementById("modal")
      if(modal.style.display == "none"){
        modal.style.display = "block"
      }else{
        modal.style.display = "none"
      }
    }
  }

  return (
    <>
    <header className="header">
      <NavLink to="/">
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <button className="header__item">
          <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/login">
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </button>
        <button className="header__item">
          <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="/purchases">
            <i className="fa-solid fa-box-archive"></i>
          </NavLink>
        </button>
        <button onClick={openCart} className="header__item">
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </button>
      </nav>
    </header>
    </>
  );
};

export default Header;
