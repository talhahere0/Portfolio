import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'
import {products} from '../../data'

const ProductList = () => {
    return (
        <>
          <div className="product-list">
          <div className="product-texts">
          <h1 className="product-title">My Projects Demo</h1>
          <p className="product-desc">
          Talha is a Professional Web developer with 3 years of experience
          in many popular framework or library like (React js , express js , node js).

          </p>
          </div>
          <div className="product-projectlist">
          {
            products.map((item) => (
              <Product key={item.id} img={item.img}/>
            ))
          }
          
          
          </div>
          </div>  
        </>
    )
}

export default ProductList
