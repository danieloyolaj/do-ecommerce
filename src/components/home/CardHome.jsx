import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({ product }) => {
    // console.log(product);

  const navigate = useNavigate()  

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  //Adding items to the shopping cart
  const handleAddItemToCart = e => {
    e.stopPropagation() //prevents propagation to another page if this is a childen function
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: product.id,
      quantity: 1
    }

    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <article onClick={handleClick} className='card-home__container'>
        <header className='card-home__header'>
          <div className="card-home__image-contanier">
            <img className='card-home__img' src={product.productImgs[0]} alt="" />
          </div>
        </header>
        <div className='divider'></div>
        <div className="card-home__body">
            <h3 className='card-home__name'>{product.title}</h3>
            <section className='card-home__price'>
                <h4 className='card-home__price-label'>Price</h4>
                <div className="card-home__price-container">
                <span className='card-home__price-value'>$ {product.price}</span>
              <button onClickCapture={handleAddItemToCart} className='card-home__btn'>
                  <i className='fa-solid fa-cart-plus'></i>
              </button>
              </div>
            </section>
            
        </div>
    </article>
  )
}

export default CardHome