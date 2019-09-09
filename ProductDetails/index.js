import React, {Component} from 'react';
import {products} from '../products'
import '../style.css'

const  ProductDetails = ({product,handleBuyClick}) =>
  (
    
        <div>
          <h3>{ product.name }</h3>
          <h4>{ product.price  }</h4>
          <p>{ product.description }</p>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
    );
  


export default ProductDetails;