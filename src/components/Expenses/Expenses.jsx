import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

export function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  function yearChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpepenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onYearChange={yearChangeHandler} />
      <ExpensesList items={filteredExpepenses} />
    </Card>
  );
}
