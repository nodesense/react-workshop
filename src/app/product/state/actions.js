import * as ActionTypes from "./ActionTypes";
import * as service from "./Service";


export function initProducts(products) {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}

export function loading (status) {
    return {
        type: ActionTypes.LOADING,
        payload: {
            loading: status
        }
    }
}


export function initError(error) {
    return {
        type: ActionTypes.INIT_ERROR,
        payload: {
            error: error
        }
    }
}


//thunk async functions

export function fetchProducts() {
    //thunk shall pass the dispatch
    return function(dispatch, getState) {

        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        service.getProducts()
        .then ( products => {
            //keep the data in redux
            dispatch(initProducts(products));
            dispatch(loading(false));
        })
        .catch ( error => {
            dispatch(loading(false));
            dispatch(initError(error.toString()));
        })
    }
}

//Thunk, Alternative implementation using ES2017 (ES8)

export function fetchProductsAsync() {
    //thunk shall pass the dispatch
    return async function(dispatch, getState) {
        //no error
        dispatch(initError(false));
        dispatch(loading(true));

        try {
            let products = await service.getProducts();
            dispatch(initProducts(products));
            dispatch(loading(false));
        }catch (error){
            dispatch(loading(false));
            dispatch(initError(error.toString()));
        }
    }
}

