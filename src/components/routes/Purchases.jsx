import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../purchases/PurchaseCard'
import '../shared/styles/purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  
  }, [])

  // console.log(purchases);
  
  return (
    <div className='purchases-container'>
      <div className="breadcrum">
          <a className="breadcrum__link" href="#">
            Home
          </a>
          <div className="breadcrum__separator"></div>
          <span className="breadcrum__product">Purchases</span>
        </div>


      <h1 className='purchases__title'>My purchases</h1>
      <div className="purchases__cards">
      {
        purchases?.map(purchase => (
          <PurchaseCard 
            key={purchase.id}
            purchase={purchase}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Purchases