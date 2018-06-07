import {createStore} from 'redux';
// Action Generators - Functions that reutrn action objects
const incrementCount = (payload={}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1

});
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
        case 'SET':
        const setit = typeof action.count === 'number' ? action.count : 1;
        return {
            count: setit
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
store.dispatch(incrementCount({incrementBy: 40}));
// Very first one should be a type  & uppercase unscore lettering is common practice 
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

store.dispatch({
    type:'INCREMENT'
});
store.dispatch({
    type: 'SET',
    count: 22
});
// Once called the subscription is cancelled & money is returned with no satisfaction guaranteed for the summertimes wammeies with their mammies. 
unsubscribe();
store.dispatch({
    type:'INCREMENT'
});
 // A redux store we can read from & change.  
 