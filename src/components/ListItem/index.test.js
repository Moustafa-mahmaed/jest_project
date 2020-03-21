import React from "react";
import {shallow} from "enzyme";
import ListItem from "./index";
import {findByAttr ,checkProps} from "./../../utils";
describe('listItem Componets', () => {
    describe('checking PropTypes', () => {
        it('should Not Throw A Warning', () => {
            const expectedProps={
                title:"example Title",
                desc:"some text"
            };
            const propsError=checkProps(ListItem ,expectedProps)
            expect(propsError).toBeUndefined();
        });
        
    });
    describe('Component Render', () => {
        let wrapper;
        beforeEach(() => {
            const props={
                 title:"example Title",
                desc:"some text"
            }
            wrapper=shallow(<ListItem  {...props}/>)
        });
        it('should render without error', () => {
           const Component =findByAttr(wrapper ,"ListItemComponent");
           expect(Component.length).toBe(1);
        });
        it('should render Tilte', () => {
            const title=findByAttr(wrapper ,"ListItemTitle")
            expect(title.length).toBe(1);
            
        });
         it('should render desc', () => {
            const desc=findByAttr(wrapper ,"ListItemDesc")
            expect(desc.length).toBe(1);
            
        });
        
    });
    describe('should Not  render', () => {
         let wrapper;
        beforeEach(() => {
            const props={
                 title:"example Title",
               
            }
            wrapper=shallow(<ListItem  {...props}/>)
        });
        // it('componet is not render ', () => {
        //    const Component =findByAttr(wrapper ,"ListItemComponent");
        //    expect(Component.length).toBe(0);
        // });
       
        
    });
});

