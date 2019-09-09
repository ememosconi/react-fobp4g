
import {ADD_TO_CART}from'../actions'

export const cart = (state={},action) =>{
  switch(action.type){
     case ADD_TO_CART:{
       return {...state,items:state.items.concat(action.item)}
    }
    default: return state;
  }
 

}