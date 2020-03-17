export const findByAttr=(componet ,attr)=>{
    const wrapper =componet.find(`[data-test='${attr}']`)
    return wrapper;
}