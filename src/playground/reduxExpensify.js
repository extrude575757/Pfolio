import {createStore,combineReducers} from 'redux'; 
import {uuid} from 'uuid';
const uuidv1 = require('uuid/v1');
// We can create a normal combiend reducer type object like this
const demoState = {
    expenses: [{
        id: 'sdffadfsd',
        description: 'January Rent',note: 'This is final Payment',
        amount: 54500, createdAt: 0
    }],
    filters: {
        text: 'rent',sortBy: 'amount',
        startDate: undefined, endDate: undefined
    }
};
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv1(),description,note,amount,createdAt

    }
});
// Or we can do it cleaner like this
const filtersReducerDefaultState = {
    text: '',sortBy: 'date',
        startDate: undefined, endDate: undefined
};
const filterReducer = (state =filtersReducerDefaultState, action) => {
    switch(action.type){
        
        default: 
        return state;
    }
};
 
// Destructure the object if it does not exist destructure an empty object
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        // You may be tempted to use state.push(action.expense) but that will change the value of state which is
        // what we do not want to do. Instead use concat to read off of state. This takes state item & combines it with action.expense item returning a new array. It does not change state at all
       // return state.concat(action.expense);
       // The spread operator ... will do the same thing as concat since it uses an array to create a new one without changing the existing one
       // ... means read in the operator & any thing after get added on to each precending one
       // This is the same as using state.concat
       // All of state an add action.expense
       return [...state,action.expense];
       case 'REMOVE_EXPENSE':
       return state.filter(({id}) => id !== action.id);
        default: 
            return state;
        
    }
};
console.log('LOH'+expenseReducerDefaultState);
const store = createStore(combineReducers({expenses:expenseReducer, filters:filterReducer}));
store.subscribe(() => {
    console.log(store.getState());
});
const expense1 = store.dispatch(addExpense({description: 'Rent',amount:100}));
const expense2 = store.dispatch(addExpense({description: 'Tits',amount:3400}));
const expense3  = store.dispatch(addExpense({description: 'Pussy',amount:100})); 
//console.log(store.getState());
store.dispatch(removeExpense({id: expense2.expense.id}));
store.dispatch(removeExpense({id: expense3.expense.id}));