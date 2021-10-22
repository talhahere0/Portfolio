import React from 'react'
import './Product.css'


const Product = ({img}) => {
    return (
        <>
         <div className="product">
         <div className="product-browser">
         <div className="product-circle"></div>
         <div className="product-circle"></div>
         <div className="product-circle"></div>
         </div>
         <img src={img} alt="" className="product-img"/>
         </div>   
        </>
    )
}

export default Product
