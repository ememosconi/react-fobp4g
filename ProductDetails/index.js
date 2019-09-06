import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import ProductAlert from '../ProductAlert';
import {products} from '../products'
import '../style.css'

class ProductDetails extends Component{
  render(){
    const productId = this.props.match.params.productId;
    const product = products[productId];
    return(
      <div>
      {product &&
      <div>
        <h3>{ product.name }</h3>
        <h4>{ product.price  }</h4>
        <p>{ product.description }</p>
      </div>
      }
      </div>
    );
  }
} 

export default withRouter(ProductDetails);