import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Cart from '../Cart';
import {checkOutCart} from '../actions'


class CartContainer extends Component{
  
handleSubmmit = (event)=>{
  this.props.checkOutCart(event);
  event.preventDefault();
  
}



render(){
return (<Cart items ={this.props.items} submitEvent={this.handleSubmmit}></Cart>);
}



}

const getItems =state => {
  console.log(state);
  return state
  };

const mapStateToProps = state =>({
  items: getItems(state)
})
 const dispatchToProps = dispatch =>({
   checkOutCart:item => dispatch(checkOutCart(item))

 });





export default compose(
withRouter,
connect(mapStateToProps,dispatchToProps)
)(CartContainer);