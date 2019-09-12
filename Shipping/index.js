import React,{Component}from 'react';
import {withRouter} from 'react-router-dom';

class Shipping extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shippingCosts: [],
    };
  }

  componentDidMount(){
    fetch('./shipping.json')
  .then((res) => res.json())
  .then((data) => {
    console.log('data:', data);

  })
    
  }

  render(){
    const{shippingCosts} = this.state
    return(
      <div> 
      <h3>Shipping Prices</h3>
      {shippingCosts&&
      shippingCosts.map(item =>(
        <div className="shipping-item">
          <span>{ shipping.type }</span>
          <span>{ shipping.price}</span>
        </div>
      ))}
      
      </div>
    )
  }

}

export default withRouter(Shipping)