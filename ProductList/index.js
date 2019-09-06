import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import ProductAlert from '../ProductAlert'
import '../style.css'

const ProductList=({products,baseurl})=>{


  const shareHandler = () =>{
    window.alert('The product has been shared!');
  }

  const notifyAlert = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  const handleTo = () =>{
    this.props.history.push('/products/1')
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => 
      <div>
        <h3>
          <Link title={`${product.name} details`} to={`/products/${index}`}>{product.name}</Link>
        </h3>
        {product.description&&<p>{`Descripcion: ${product.description}`}</p>}
        <button onClick={shareHandler}>
          Share
        </button>
        <ProductAlert product ={product} handleClick={notifyAlert} >
        </ProductAlert>
      </div>
        
      )}
    </div>
    
)};

export default withRouter(ProductList);