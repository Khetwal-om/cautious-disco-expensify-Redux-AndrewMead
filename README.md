


### After initial commit

1.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';


import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



// addExpense->  water bill
// add Expense ->gas bill
//setTextFilter -> bill ( 2items)->water(1 item)
// getVisibleExpenses ->print visibles ones to screen

const store = configureStore();


store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());









ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```




---

## Higher order component

---


1. 

```js
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <h2>Why this ain't printing </h2>
        <p>the info is: {props.info}</p>
    </div>
);



const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>private  one</p>}
            <WrappedComponent {...props} />
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} />, document.getElementById('root'));

serviceWorker.unregister();

```