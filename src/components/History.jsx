import ExpenseItem from './ExpenseItem.jsx'
function History(props) {

  return (
    <div className="history" >
      <h1>History</h1>
      
      
      {props.expense.map((item) => (
        <ExpenseItem key={item._id} expense={item} deleteExpense={props.deleteExpense} />
      ))}
    </div>
  )
}

export default History