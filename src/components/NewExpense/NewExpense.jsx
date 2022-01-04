import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function sumbitDataHandler(expenseData) {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onSaveDataHandler(newExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSumbitData={sumbitDataHandler} />
    </div>
  );
}

export default NewExpense;
