import React from 'react'
import Form from './Form.jsx'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'
function ExpenseContainer() {


const [expenses, setExpenses] = React.useState([]);

console.log(expenses);

  async function addExpense(title , amount){
    try{
      const newExpense = await fetch("https://expensetracker-backend-rh66.onrender.com/post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, amount })
      }
    )
    await newExpense.json();
    getExpense();
    }catch(err){
      console.log(err);
    }
  }


  async function getExpense()
  {
    const response = await fetch ("https://expensetracker-backend-rh66.onrender.com/get")
    const data = await response.json()
    setExpenses(data.expenses)
  }


  React.useEffect(()=>{
    getExpense()
  },[])

  async function deleteExpense(id) {
    await fetch(`https://expensetracker-backend-rh66.onrender.com/delete/${id}`, {
      method: "DELETE"
    });
    getExpense();
  }



  return (
    <div className="expense-container">
      <BalanceContainer expense={expenses} />
      <Form addExpense={addExpense} />
      <History expense={expenses} deleteExpense={deleteExpense}/>
    </div>
  )
}

export default ExpenseContainer