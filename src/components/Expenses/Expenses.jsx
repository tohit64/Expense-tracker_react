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
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChange={yearChangeHandler} />
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}
