import {createStore,combineReducers} from 'redux';
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
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        default: 
            return state;
        
    }
};
const store = createStore(combineReducers({expenses:expenseReducer}));
console.log(store.getState());