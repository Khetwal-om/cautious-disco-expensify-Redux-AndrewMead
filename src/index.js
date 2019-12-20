import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';


import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



import { Provider } from 'react-redux';

// addExpense->  water bill
// add Expense ->gas bill
//setTextFilter -> bill ( 2items)->water(1 item)
// getVisibleExpenses ->print visibles ones to screen

const store = configureStore();


store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());



const jsx = (
    <Provider store={store}>
        <AppRouter />

    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



