import React from 'react'
import Form from './Form.jsx'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'
function ExpenseContainer() {


const [expenses, setExpenses] = React.useState([]);

console.log(expenses);

  async function addExpense(title , amount){
    try{
      const newExpense = await fetch("http://localhost:5000/post",
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
    const response = await fetch ("http://localhost:5000/get")
    const data = await response.json()
    setExpenses(data.expenses)
  }


  React.useEffect(()=>{
    getExpense()
  },[])

  async function deleteExpense(id) {
    await fetch(`http://localhost:5000/delete/${id}`, {
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