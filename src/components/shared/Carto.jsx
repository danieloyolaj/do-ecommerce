import axios from "axios"
import React, { useState, useEffect } from "react"
import getConfig from "../../utils/getConfig"
import ProductCartInfo from "../cart/ProductCartInfo"
import '../shared/styles/cart.css'

const Carto = () => {

  const [cartProducts, setCartProducts] = useState()

  const getAllProductsCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
        .then(res => console.log(res.data.data.cart.products))
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
        getAllProductsCart()
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <>
    <div className="nav-modal">
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
        <p className="cart__total-global">Total: </p>
        <p className="cart__total-global-value">1350</p>
      </div>
      <button onClick={handleCheckout} className="cart__checkout-btn">Checkout</button>
    </div>
    </div>
    </>
  );
};

export default Carto
