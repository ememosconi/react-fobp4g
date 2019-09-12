import React from 'react'
import {Link} from 'react-router-dom';


const Cart = ({items}) =>(
  <div>
    <h3>Cart</h3>
    <Link to={'/shipping'}>
      Shipping Prices
    </Link> 
    {
      items.map(item =>(
        <div className="cart-item" >
          <span>{ item.name }</span>
          <span>{ item.price}</span>
        </div>
      ))
    }

  </div>
);

export default Cart;
  
