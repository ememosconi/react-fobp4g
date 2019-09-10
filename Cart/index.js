import React from 'react'


const Cart = ({items}) =>(
  <div>
    <h3>Cart</h3>
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
  
