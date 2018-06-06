import {createStore} from 'redux';
// Whence creating the store first arg is value of state, 2nd arg is an Action (which is what we shall do with the state yonigger)
const store = createStore((state = {count: 10}, action) => {
    // Console log running will get  call twice with store.dispatch. Once when the store is created
    console.log("running");

    switch(action.type){
        case 'INCREMENT':
        const incBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + incBy
        };
        case 'DECREMENT':
        const dncBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - dncBy
        };
        case 'RESET': 
        return {
            count: 0
        };
        default:
        return state;
    }  
}); 

// Actions  - are nothing more than objects that get sent to the store
// Build object & increment 
// & its called again a 2nd time when dispatch is created so the same function runs twice with two different object functions yo. 
// Subscribe will notify us every time the store has a dispatch with an action type 
// You can run subscribe by refering to store.subscribe inline function 
/*
    store.subscribe(() => {
    console.log(store.getState());
});
*/// But if you want to unsubscribe one day you must throw it in a const & call the var name as a function
// Increase one
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT', 
    incrementBy: 5
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});
store.dispatch({
    type: 'RESET'
})
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 8
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});
unsubscribe();
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'RESET'
});

 // A redux store we can read from & change.  
 