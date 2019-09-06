import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TopBar from './TopBar';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
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
    return <ProductDetails></ProductDetails>
  }
  

  render() {
    return (
      <Router> 
      <div>
          <TopBar></TopBar>
          <div className="container">
            <Route exact path='/' component={this.renderHome} ></Route>
            <Route exact path='/products/:productId' component={this.renderDetails} ></Route>
          </div>
          
        </div>
      </Router>
        
      
    );
  }
}

render(<App />, document.getElementById('root'));
