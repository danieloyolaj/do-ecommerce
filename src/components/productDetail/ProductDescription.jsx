import axios from "axios";
import React, { useState } from "react";
import getConfig from "../../utils/getConfig";
import "../shared/styles/productDetail.css";
import SimilarProducts from "./SimilarProducts";

const ProductDescription = ({ productInfo }) => {
  const [counter, setCounter] = useState(1);

  const handlePlus = () => setCounter(counter + 1);
  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1);
    }
  };
  // console.log(productInfo)

  const handleAtCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: productInfo.id,
      quantity: counter
    }

    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }


  return (
    <div className="product-description-container">
      <section className="product-description">
        <div className="breadcrum">
          <a className="breadcrum__link" href="#">
            Home
          </a>
          <div className="breadcrum__separator"></div>
          <span className="breadcrum__product">{productInfo?.title}</span>
        </div>
        <div className="product-description__sub-container">
          <div className="col">
            <div className="images-gallery">
              <div className="gallery">
                <div className="gallery-btn-left">
                  <button className="gallery-btn-left-icon"><i className=" fa-solid fa-chevron-left"></i></button>
                </div>
                <div className="images-list">
                <ul className="images-list">
                  <li>
                    <img src={productInfo?.productImgs[0]} alt=""  />
                    </li>
                  <li>
                    <img src={productInfo?.productImgs[1]} alt=""  />
                    </li>
                  <li>
                    <img src={productInfo?.productImgs[2]} alt=""  />
                    </li>
                </ul>
                </div>
                <div className="gallery-btn-right">
                  <button className='gallery-btn-right-icon'><i className=" fa-solid fa-chevron-right"></i></button>
                </div>
              </div>
                <div className="gallery-slider">
                  <ul className="images-preview">
                    <li className='selected'>
                    <img className="selected-image" src={productInfo?.productImgs[0]} alt="" />
                    </li>
                    <li className='img-prev'>
                    <img src={productInfo?.productImgs[0]} alt="" />
                    </li>
                    <li className='img-prev'>
                    <img src={productInfo?.productImgs[0]} alt="" />
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col">
            <h2 className="product-description__name">{productInfo?.title}</h2>
            <p className="product-info__description">
              {productInfo?.description}
            </p>
            <div className="product-info__body">

              <article className="product-info__price">

                <div className="product-info__price-container">
                  <h3 className="product-info__price-label">Price</h3>
                  <span className="product-info__price-value">
                    ${" " + productInfo?.price}
                  </span>
                </div>
              </article>

              <article className="product-info__quantity">

                <div className="product-info__quantity-container">
                  <h3 className="product-info__quantity-label">Quantity</h3>
                  <div className="product-info__quantity-product">
                    <button className="minus-btn" onClick={handleMinus}>-</button>
                    <div className='counter-value'>{counter}</div>
                    <button className="plus-btn" onClick={handlePlus}>+</button>
                  </div>
                </div>

              </article>
            </div>{" "}
                <div className="add-to-cart-btn-container">
                  <button onClick={handleAtCart} className="add-to-cart-btn">Add to cart</button>
                </div>
            {/* end div col*/}
          </div>{" "}
          {/* end div product-info__body*/}
        </div>{" "}
        {/* end div product-description__sub-container*/}
      <div className="similar-items__container">
        <h3>Discover similar items</h3>
        
      </div>

      </section>


    </div>
  );
};

export default ProductDescription;
