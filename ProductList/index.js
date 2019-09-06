import React from 'react';
import {Link} from 'react-router-dom';
import ProductAlert from '../ProductAlert'
import '../style.css'

const ProductList=({products})=>{


  const shareHandler = () =>{
    window.alert('The product has been shared!');
  }

  const notifyAlert = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => 
      <div>
        <h3>
          <Link title={`${product.name} details`}>{product.name}</Link>
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

export default ProductList;