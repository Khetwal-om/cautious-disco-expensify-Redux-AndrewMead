








import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        <h4>{props.name}</h4>
    </div>

);


const ConnectedExpenseList = connect(() => {
    return {
        name: 'Ava'
    }
})(ExpenseList);



export default ConnectedExpenseList;