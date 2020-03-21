import checkPropTypes from "check-prop-types";
import { createStore ,applyMiddleware } from "redux";
import RootReducer from "./../reducers";
import {middlewares} from "./../createStore"



export const findByAttr=(componet ,attr)=>{
    const wrapper =componet.find(`[data-test='${attr}']`)
    return wrapper;
}


export const checkProps =(componet ,expectedProps )=>{
    const propsErr= checkPropTypes(componet.propTypes ,expectedProps,"props" , componet.propTypes)
    return propsErr
}


export const  testStore = (initialState )=>{
    const createStoreWithMiddleware =applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(RootReducer ,initialState)
}