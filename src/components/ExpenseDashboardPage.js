import React from 'react';

import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';



function ExpenseDashboardPage(props) {
  return <div>THis is the expensedashboard page

    <ExpenseListFilters />
    <ExpenseList />


  </div>;
}



export default ExpenseDashboardPage;