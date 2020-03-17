import React from "react"
import Enzyme,{shallow} from 'enzyme';
import Header from "./index"
import {findByAttr} from "../../utils"
const setUp=(props={})=>{
 const componet =shallow(<Header {...props} />);
return componet;
}


describe('header componet', () => {

let componet;
beforeEach(()=>{
    componet=setUp()
})


   it(' it should render header without error', () => {
    //    const componet =shallow(<Header />);
    // const componet=setUp()
       
    //    console.log(componet.debug())
    //    const wrapper =componet.find(`[data-test='headerComponent']`)
    const wrapper= findByAttr(componet, "headerComponent")

       expect(wrapper.length).toBe(1)
   });

   it('should render logo ', () => {
    //    const componet=shallow(<Header />)
    // const componet=setUp()

    //    const logo =componet.find(`[data-test='logocomponent']`)
    const logo= findByAttr(componet, "logocomponent")

       expect(logo.length).toBe(1);
   });
    
});



// asmaazain1@outlook.com
// Asmaa2020
// it@edu.suezuni.edu.eg
