import {createStore,combineReducers} from 'redux';
// We can create a normal combiend reducer type object like this
const demoState = {
    expenses: [{
        id: 'klfjadlll',
        description: 'January Rent',note: 'This is final Payment',
        amount: 54500, createdAt: 0
    }],
    filters: {
        text: 'rent',sortBy: 'amount',
        startDate: undefined, endDate: undefined
    }
};
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
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        default: 
            return state;
        
    }
};
const store = createStore(combineReducers({expenses:expenseReducer, filters:filterReducer}));
console.log(store.getState());