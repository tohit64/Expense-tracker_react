import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  }
  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  }
  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  }

  function sumbitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSumbitData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-12"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
