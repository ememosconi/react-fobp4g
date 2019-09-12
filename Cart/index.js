import React from 'react'
import {Link} from 'react-router-dom';


const Cart = ({items,submitEvent}) =>{
  let name;
  let address;
  return (
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
    <div>
      <form onSubmit={submitEvent}>
      <div>
       <label>
          name
        </label>
        <input
            name="name"
            type="text"
            />
        <br />
        <label>
          address
        </label>
        <input
            name="address"
            type="text"
             />
    </div>
    <button type="submit">Purchase</button>
      </form>
    </div>

  </div>);
;}

export default Cart;
  
