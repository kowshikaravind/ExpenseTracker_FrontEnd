import React from 'react'
import CurrentItem from './CurrentItem';

function BalanceContainer(props) {
  let income = 0;
  let expenses = 0;
  console.log(props.expense)
  props.expense.forEach((item) => {
      if(item.amount > 0) {
          income += parseInt(item.amount);
      } else {
          expenses += parseInt(item.amount);
      }
  }) 
  console.log(`Income: ${income}, Expenses: ${expenses}`);  
  return (
    <div className='balance-container'>
      <CurrentItem title="income" amount={income} type="income"/>
      <CurrentItem title="expenses" amount={expenses} type="expense"/>
      <CurrentItem title="total" amount={income + expenses} type="balance"/>
    </div>
  )
}

export default BalanceContainer