import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {store} from './store';
import { render } from 'react-dom';
import Hello from './Hello';
import TopBar from './TopBar';
import ProductList from './ProductList';
import CartContainer from './containers/CartContainer';
import Shipping from './Shipping';
import ProductDetailsContainer from './containers/ProductDetailsContainer';
import {products} from './products'
import{Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './style.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  renderHome(){
    return <ProductList products = {products}></ProductList>
  }

  renderDetails(){
    return <ProductDetailsContainer></ProductDetailsContainer>
  }
  renderCart(){
    return <CartContainer> </CartContainer>
  }
  renderShipping(){
    return <Shipping></Shipping>
  }
  

  render() {
    return (
      <Router> 
      <div>
          <TopBar></TopBar>
          <div className="container">
            <Route exact path='/' component={this.renderHome} ></Route>
            <Route exact path='/products/:productId' component={this.renderDetails} ></Route>
            <Route exact path='/cart' component={this.renderCart} ></Route>
            <Route exact path='/shipping' component={this.renderShipping} ></Route>
          </div>
          
        </div>
      </Router>
        
      
    );
  }
}

const rootComponent =(
<Provider store={store}>
    <App />
</Provider>
);

render(rootComponent, document.getElementById('root'));
