import {createStore, 
    combineReducers, 
    applyMiddleware} from "redux";

import thunk from "redux-thunk";
 
import cartReducer from "./cart/state/reducer";
import productReducer from "./product/state/reducer";
import authReducer from "./auth/state/reducer";

let rootReducer = combineReducers({
    //stateName: reducer fn
    cartItems: cartReducer,
    productState: productReducer,
    authState: authReducer
//
})
 
function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log('logger dispatching', action)

            let result = next(action)
            
            console.log('logger next state', store.getState())
            return result
        }
    }
}


let store = createStore(rootReducer, 
                    applyMiddleware(loggerMiddleware, thunk));


export default store;