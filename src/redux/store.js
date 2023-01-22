
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {getproductsreducer,getproductdetailsreducer} from './reducers/productreducer'
import {cartreducer} from './reducers/cartreducer';
import thunk from 'redux-thunk';
const reducer=combineReducers({
       getproducts:getproductsreducer,
       getproductdetails:getproductdetailsreducer,
       cart:cartreducer
})
const middleware=[thunk];
const store=createStore(
       reducer,
       composeWithDevTools(applyMiddleware(...middleware))
)

export default store;