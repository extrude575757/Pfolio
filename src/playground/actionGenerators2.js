import {createStore} from 'redux';

 const incrementCount = (payload={}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1

});
const incrementCount2 = (incrementBy) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ?incrementBy : 1

});
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
// Example of a Not pure functions: It depends on something from outside the functions scope (global a)
let a = 10;
const add = (b) => {
    return a + b;
}
// Reducers : Are pure functions
// 1. Do not mutate objects or change values outside the reducers scope must rely on state & action params
// 2. Never directly change the value of either parameters ( state or action) you must mutate them to create a new object on thefly
// what it returns is only determined by what is passed in
// It does not use anything from outside the functions scope &
// It does not change anything from outside the functions scope either
const countReducer = ((state = {count: 1}, action) => {
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
        return state; 
    }  
}); 

const store  = createStore((state = {count: 1}, action) => {
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
        return state; 
    }  
}); 


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); 
store.dispatch(incrementCount3({incrementBy: 52}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 2500}));
unsubscribe();
 const add = (data) => {
    return data.a  + data.b
};
console.log("Data A"+ add({a:57,b:12}))  ;
 const add2 = ({a,b},c) => {
    return a  + b *c
};
console.log("Data A"+ add2({a:557,b:512},100)) ;  