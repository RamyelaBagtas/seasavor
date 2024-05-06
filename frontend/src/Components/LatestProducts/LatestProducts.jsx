import React, { useEffect, useState } from 'react'
import './LatestProducts.css'
import Item from '../Item/Item'

const LatestProducts = () => {

  const[latest_products,setLatest_products] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:4000/latestproducts')
      .then((response)=>response.json())
      .then((data)=>setLatest_products(data));
    },[])
  return (
    <div className='latest-products'>
        <h1>Latest Products</h1>
        <hr />
        <div className="products">
            {latest_products.map((item,i)=>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default LatestProducts