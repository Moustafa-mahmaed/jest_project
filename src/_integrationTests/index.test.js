import moxios from "moxios"
import { testStore } from "./../utils";
import {  fetchPosts } from "./../action";

describe(' fetchposts Action ', () => {
    beforeEach(() => {
        moxios.install()
    });

    afterEach(() => {
        moxios.uninstall()
        
    });

    test('store is updated correctly  ', () => {
        const expectprops=[
            {
                title:"ex title",
                body:"some text"
            },
            {
                title:"ex title",
                body:"some text"
            },
            {
                title:"ex title",
                body:"some text"
            },
            {
                title:"ex title",
                body:"some text"
            },
            {
                title:"ex title",
                body:"some text"
            },
        ]
        
            const store =testStore()
            moxios.wait(()=>{
                const request=moxios.requests.mostRecent();
                request.respondWith({
                    status:200,
                    response:expectprops
                })
            })
            return store.dispatch(fetchPosts()).then(
                ()=>{
                    const newState =store.getState()
                    expect(expectprops).toBe(newState.posts);
                }
            )
    });
    
});