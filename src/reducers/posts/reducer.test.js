import { types } from "./../../action/types";
import  postReducers from "./reducer"
describe(' posts Reducers', () => {
    it('should return default state', () => {
        const newState= postReducers(undefined , {} )
       expect(newState).toEqual([]);
        
    });
    it('should return new state if received type ', () => {
        const posts=[{title:'test 1'},{title:'test 2'},{title:'test 3'},{title:'test 4'}]
        const newState =postReducers(undefined ,{
            type:types.GET_POSTS,
            payload:posts
        });
      
        expect(newState).toEqual(posts);
        
    });
    
});
