const ADD_TO_CART = 'ADD_TO_CART';
const CHECK_OUT_CART ='CHECK_KOUT_CART';

export function addToCart(item){
  return { type:ADD_TO_CART, item}
}

export function checkOutCart(cart){
  return {type: CHECK_OUT_CART, cart}
}