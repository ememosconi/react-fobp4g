import React from 'react';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';
import '../style.css'

const TopBar =()=> (
  <div class="app-top-bar">
    <Link to={'/'}>
      <h1>My Store</h1>
     </Link> 
    
    <a  class="button fancy-button"><Icon class="material-icons">shopping_cart</Icon>Checkout</a>
  </div>
  
  );

export default TopBar;