
import {ADD_TO_CART}from'../actions'

export const cart = (state=[],action) =>{
  console.log( action.type)
  switch(action.type){
     case 'ADD_TO_CART':{
       console.log( action.item)
       return [...state,action.item]
    }
    default: {
      console.log("PASE POR DEFAULT")
      return state
    };
  }
 

}