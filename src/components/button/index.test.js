import React from "react";
import {findByAttr ,checkProps} from "./../../utils";
import  {shallow} from "enzyme"
import SharedButton from "./index"


describe('shareButton Component', () => {
    
describe('checking PropTypes', () => {
    

    it('should  NOT Throw a Warning ', () => {
        
        const expectedProps= {
            buttonText:"Example Button Text",
            emitEvent :() => {

            }

        };
        const propsError= checkProps(SharedButton ,expectedProps)
        expect(propsError).toBeUndefined();


    });

    
});

describe('Renders', () => {
    let Wrapper ;
    beforeEach(() => {
        const props={
            buttonText:"Example Button Text",
            emitEvent: () =>{

            }
        };
        Wrapper = shallow(<SharedButton {...props} />);
        
    });
    it('should render a button  ', () => {
      
       
        const button = findByAttr(Wrapper, 'buttonComponent');
        
         expect(button.length).toBe(1)
    
        
    });
    
});

});
