import {createStore} from 'redux';

// Action Generators - Functions that reutrn action objects
const incrementCount = (payload={}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1

});
// OR Without payload you can do this with incrementBy
const incrementCount2 = (incrementBy) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ?incrementBy : 1

});
// OR Without payload you can do this with incrementBy
const incrementCount3 = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy

});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({count } ) => ({
    type: 'SET',
    count 
});
const setReset = () => ({
    type: 'RESET'
});
// Whence creating the store first arg is value of state, 2nd arg is an Action (which is what we shall do with the state yonigger)
const store  = createStore((state = {count: 1}, action) => {
    // Console log running will get  call twice with store.dispatch. Once when the store is created
    console.log("running");

    switch(action.type){
        case 'INCREMENT': 
        return {
            count: state.count +action.incrementBy
        };
        case 'DECREMENT': 
        return {
            count: state.count - action.decrementBy
        };
        case 'SET': 
        return {
            count: action.count    
        };
        case 'RESET': 
        return {
            count: 0
        };
        default:
        return state;////////////////
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
//store.dispatch(incrementCount({incrementBy: 1}));
//store.dispatch(incrementCount2(1));
store.dispatch(incrementCount3({incrementBy: 52}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 2500}));
//store.dispatch(setReset());

// Very first one should be a type  & uppercase unscore lettering is common practice 
 
// Once called the subscription is cancelled & money is returned with no satisfaction guaranteed for the summertimes wammeies with their mammies. 
unsubscribe();
//==========================================================================
 // We can manupilate data strings like this
 const add = (data) => {
    return data.a  + data.b
};
console.log("Data A"+ add({a:57,b:12}))  
 // OR We can manupilate data strings like this
 const add2 = ({a,b},c) => {
    return a  + b *c
};
console.log("Data A"+ add2({a:557,b:512},100))   ;