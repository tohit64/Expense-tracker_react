import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function yearChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  const expenses = props.expenses;

  const filteredExpepenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpepenses.length > 0) {
    expensesContent = filteredExpepenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChange={yearChangeHandler} />
      {expensesContent}
    </Card>
  );
}
