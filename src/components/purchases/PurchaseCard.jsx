import React from 'react'
import ProductPurchased from './ProductPurchased';

const PurchaseCard = ({ purchase }) => {

    // let date = new Date(purchase.createdAt)
    // date.toLocaleString('en-US').toString()

    // console.log(date);
    // console.log(purchase);
  return (
    <div>
        <article className='card-purchase-container'>
            <h3 className='card-purchase__date'>{
                purchase.createdAt
            }</h3>
            
            <ul className="card-purchase__body">
                {
                    purchase.cart.products.map(product => (
                        <ProductPurchased 
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </ul>
        </article>
    </div>
  )
}

export default PurchaseCard
