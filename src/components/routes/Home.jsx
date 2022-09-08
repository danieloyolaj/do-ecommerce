import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from "../home/CardHome";
import "../shared/styles/home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.products);
  // console.log(products);

  return (
    <div className="home">
      <div className="home__sidebar">
        <div className="home__sidebar-item">
          <h3>Price</h3>
          <hr />
          <form className="home__sidebar-form">
            <label className="home__sidebar-label" htmlFor="from">
              From
            </label>
            <input className="home__sidebar-input" type="number" />
            <label className="home__sidebar-label" htmlFor="to">
              To
            </label>
            <input className="home__sidebar-input" type="number" />
            <div className="home__sidebar-btn-container">
              <button className="home__sidebar-btn">Filter price</button>
            </div>
          </form>
        </div>
        <div className="home__sidebar-item">
          <h3 className="home__sidebar-filter">Category</h3>
          <hr />
          <p>Smart TV</p>
          <p>Computers</p>
          <p>Smartphones</p>
        </div>
      </div>

      <div className="home__main-container">
  
        <div className="home__search-container">
          <input className='home__search-input' type="text" placeholder="What are you looking for?" />
          <button className='home__search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className="home__container-card">
          {products?.map((product) => (
            <CardHome key={product.id} product={product} />
          ))}
        </div>
        </div>{/* end of home__main-container */}
        
    </div>
  );
};

export default Home;
