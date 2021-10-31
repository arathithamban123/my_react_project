import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //props : we can give any name instead of props, but commonly we are using props

  const onExpenceItenClick = () => {
    console.log("Clicked!!!");
  };

  return (
    <div className="expense_item_main_container">
      <ExpenseDate date={props.expense.date} />
      <div className="expense_name">{props.expense.title}</div>
      <div className="expense_amount">${props.expense.amount}</div>
      <button onClick={onExpenceItenClick}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
