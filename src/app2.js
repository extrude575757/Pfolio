
import {uuid} from 'uuid';


 





store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expense1 = store.dispatch(addExpense({description: 'Rent',amount:300, createdAt: -1000}));
const expense2 = store.dispatch(addExpense({description: 'Tits',amount:100, createdAt:-2100}));
 store.dispatch(sortByAmount());
// const expense3  = store.dispatch(addExpense({description: 'Pussy',amount:100})); 
// //console.log(store.getState());
// store.dispatch(removeExpense({id: expense2.expense.id}));
// store.dispatch(removeExpense({id: expense3.expense.id}));
// store.dispatch(editExpense(expense2.expense.id, {amount:1}));

// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());