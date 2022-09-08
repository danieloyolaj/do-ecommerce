import axios from 'axios';
import React, { useState, useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'
import '../shared/styles/cart.css'
import emptyCart from '../../assets/empty-cart.png'


const Cart = () => {

  const [cartProducts, setCartProducts] = useState()
  const [totalPrice, setTotalPrice] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
        .then(res => {
          const products = res.data.data.cart.products
          setCartProducts(products)
          //Getting the total price
          const total = products.reduce((acc, currentValue) => {
            return Number(currentValue.price) * currentValue.productsInCart.quantity + acc 
          }, 0)
          setTotalPrice(total)
        
        })
        .catch(err => setCartProducts())
  }

  useEffect(() => {
    getAllProductsCart()
  }, []);

  // console.log(cartProducts);

  const handleCheckout = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const obj = {
        street: "248 Calle Santa Ana",
        colony: "California",
        zipCode: 12345,
        city: "Santa Cruz",
        references: "Some references"
    }
    axios.post(URL, obj, getConfig())
      .then(res => {
        console.log(res.data)
        getAllProductsCart()
        setTotalPrice(0)
      })
      .catch(err => console.error(err))
  }

  return (
    
  <div className="cart-wrapper">
    <div id="modal" className="nav-modal">
    
    <div className="cart-container">
      <h2 className="cart__title">Shopping Cart</h2>
      
      {
        cartProducts?.map(product => (
          <ProductCartInfo 
            key={product.id}
            product={product}
            getAllProductsCart={getAllProductsCart}
          />
        ))
      }
      <hr className="cart__divider" />
      <div className="cart__footer">
        <p className="cart__total-global">Price: </p>
        <p className="cart__total-global-value">{totalPrice}</p>
      </div>
      <button onClick={handleCheckout} className="cart__checkout-btn">Checkout</button>
    </div>
      </div>
    </div>
    
  );
};

export default Cart