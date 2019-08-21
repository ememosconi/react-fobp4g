import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TopBar from './TopBar';
import ProductList from './ProductList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <TopBar></TopBar>
        <div class="container">
          <ProductList></ProductList>
        </div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
