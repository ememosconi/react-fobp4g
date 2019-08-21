import React from 'react';
import Icon from '@material-ui/core/Icon';
import '../style.css'

const TopBar =()=> (
  <div class="app-top-bar">
    <a >
      <h1>My Store</h1>
    </a>
    <a  class="button fancy-button"><Icon class="material-icons">shopping_cart</Icon>Checkout</a>
  </div>
  
  );

export default TopBar;