import React from 'react';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import '../style.css'

const TopBar =()=> (
  <div class="app-top-bar">
    <Link to={'/'}>
      <h1>My Store</h1>
     </Link> 
    
    <Link class="button fancy-button" to={'/cart'}><Icon class="material-icons">shopping_cart</Icon>Checkout</Link>
  </div>
  
  );

export default TopBar;