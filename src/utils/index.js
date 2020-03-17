import checkPropTypes from "check-prop-types";

export const findByAttr=(componet ,attr)=>{
    const wrapper =componet.find(`[data-test='${attr}']`)
    return wrapper;
}


export const checkProps =(componet ,expectedProps )=>{
    const propsErr= checkPropTypes(componet.propTypes ,expectedProps,"props" , componet.propTypes)
    return propsErr
}