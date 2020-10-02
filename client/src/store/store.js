import { combineReducers } from 'redux'

import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'

export const configureStore = combineReducers({
    cart: cartReducer,
    product: productReducer
})