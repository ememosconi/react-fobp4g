import {createStore} from 'redux';
import {cart} from '../reducers/cart'


export const store = createStore(cart,{});