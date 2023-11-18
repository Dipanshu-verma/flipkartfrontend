import {createStore,combineReducers,applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { getCategoryReducer, getProductReducer, productDetailReducer } from "./reducers/productReducer.js"
import { cartReducer } from "./reducers/cartreducer.js"
const reducers =  combineReducers({
    allproducts:getProductReducer,
    categoryproducts:getCategoryReducer,
    detailproduct:productDetailReducer,
    cart:cartReducer
})
const store =  createStore(reducers,composeWithDevTools(applyMiddleware(thunk)) )

export default store