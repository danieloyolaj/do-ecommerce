import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardHome from "../home/CardHome";

const SimilarProducts = ({ productInfo }) => {
  const [filterProducts, setFilterProducts] = useState();

  const products = useSelector(state => state.products);

  useEffect(() => {
    if (productInfo && products) {
      const filter = products?.filter(
        e => e.category.name === productInfo.category
      )
    }
  }, [productInfo, products]);

  console.log(filterProducts);

  return (
    <div className="similar-products__container">
      {filterProducts?.map((product) => {
        if (product.title !== productInfo.title) {
          return <CardHome key={product.id} product={product} />;
        }
      })}
    </div>
  );
};

export default SimilarProducts;
