import axios from 'axios'
import React from 'react' 
import getConfig from '../../utils/getConfig'
import '../shared/styles/cart.css'

const ProductCartInfo = ({ product, getAllProductsCart }) => {

  //Deletes item from cart
  const handleDeleteItem = () => {
    URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => getAllProductsCart())
      .catch(err => console.log(err))
  }

  return (
    <div className='cart__item'>
        <header className='cart__item-header'>
        <h4 className='cart__category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
        </header>
        <div className="cart__trash-qty-container">
          <span className='cart__quantity'>{product.productsInCart.quantity}</span>
          <button className='cart__delete-btn'>
            <i onClick={handleDeleteItem} className="cart__trash fa-regular fa-trash-can"></i>
          </button>
        </div>
        <div className='cart__item-footer'>
            <p className='cart__total-label'>Total: </p>
            <p className='cart__total-amount'>{product.price}</p>
        </div>
    </div>
  )
}

export default ProductCartInfo