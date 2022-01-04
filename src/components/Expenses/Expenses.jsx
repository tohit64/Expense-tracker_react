import React from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseFilter />
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}
