import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
     
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <div>
          <button onClick ={()=>console.log("Expense Deleted")}>Delete Expense</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
