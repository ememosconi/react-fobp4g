import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css'


const ProductAlert = ({product, handleClick}) =>{
  return (
    <div>
     {product.price>700 && 
          <p>
            <button onClick = {handleClick}>Notify Me</button>
          </p>
        }
    </div>
    
  );
};


export default ProductAlert