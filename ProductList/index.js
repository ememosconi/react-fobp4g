import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'

const ProductList=({products})=>{
  return (
    <div>
      <h2>Products</h2>
      {products.map(product => 
      <div>
        <h3>
          <Link title={`${product.name} details`}>{product.name}</Link>
        </h3>
        {product.description&&<p>{`Descripcion: ${product.description}`}</p>}
        <button>
          Share
        </button>
      </div>
        
      )}
    </div>
    
)};

export default ProductList;