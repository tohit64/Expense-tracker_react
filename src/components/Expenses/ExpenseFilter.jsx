import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter() {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select>
          <option value="2019">2010</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
