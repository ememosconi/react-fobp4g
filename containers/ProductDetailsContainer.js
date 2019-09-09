import React,{Component}from 'react';
import {ProductDetails} from '../ProductDetails'
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {products} from '../products';
import {addToCart} from '../actions'

class ProductDetailsContainer extends Component{
  
  handleBuyButton(item){
    this.props.addToCart(item)

  }

  render(){
    const productId = this.props.match.params.productId;
    const product = products[productId];

    return <div>{
      product&&<ProductDetails product={product} clickEvent={this.handleBuyButton(product)}> </ProductDetails>
    }
    </div>
    
  }





}

const mapDispatchToProps = dispatch =>({
  addToCart
});

export default compose(
withRouter,
connect(null,mapDispatchToProps)
)(ProductDetailsContainer);