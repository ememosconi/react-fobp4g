const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(item){
  return { type:ADD_TO_CART, item}
}