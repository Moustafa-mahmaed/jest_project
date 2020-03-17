import React from "react"
import Enzyme,{shallow} from 'enzyme';

import Headerline from "./index"
import {findByAttr ,checkProps} from "../../utils"
const setUp=(props={})=>{
 const componet =shallow(<Headerline {...props} />);
return componet;
}

describe('headerline component', () => {

describe('checking proptypes', () => {
    it('should not throw awarning  ', () => {
        const expectedprops={
            header:"test header",
            desc:"test desc",
            tempArr:[
                {
                    fName:"test fName",
                    lName:"test fName",
                    age:23,
                    email:"test@gmail.com",
                    onlinestatus:true
               
               
                }
            ]
        };
        const propsErr =checkProps(Headerline ,  expectedprops)
        
        expect(propsErr).toBeUndefined();
        
    });
    
});


    describe('have props ', () => {

    let wrapper;
        beforeEach(()=>{
            const props={
                header:'test header',
                desc:"desc test"

            }
            wrapper=setUp(props)
        })
        it('should run with out error ', () => {
            const component= findByAttr(wrapper ,"headerlinecomponent")
            expect(component.length).toBe(1)
            
        });
        it('should run with header ', () => {
            const component= findByAttr(wrapper ,"header")
            expect(component.length).toBe(1)
            
        });
        it('should run with desc ', () => {
            const component= findByAttr(wrapper ,"desc")
            expect(component.length).toBe(1)
            
        });
        
    });
    describe('have not props', () => {
      let wrapper;
      beforeEach(()=>{
          wrapper=setUp()

      }) 
      it('should not run if no props ', () => {
            const component= findByAttr(wrapper ,"headerlinecomponent")
            expect(component.length).toBe(0)
            
        }); 
    });
    
});



