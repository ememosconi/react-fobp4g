import React,{Component}from 'react';
import ProductDetails from '../ProductDetails'
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {products} from '../products';
import {addToCart} from '../actions'

class ProductDetailsContainer extends Component{
  
  

  handleBuyClick = (product) =>{
    this.props.addToCart(product);
    

  }

  render(){
    const productId = this.props.match.params.productId;
    const product = products[productId];
    console.log (product)

    return <div>{
      product&&<ProductDetails product={product} handleBuyClick={()=>this.handleBuyClick(product)}> </ProductDetails>
    }
    </div>
    
  }





}

const mapDispatchToProps = dispatch =>({
  addToCart: item =>dispatch(addToCart(item))
});

export default compose(
withRouter,
connect(null,mapDispatchToProps)
)(ProductDetailsContainer);