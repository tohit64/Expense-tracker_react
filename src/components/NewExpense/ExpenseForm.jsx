import React from "react";

function ExpenseForm() {
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Amount</label>
          <input type="number" min="0.01" max="0.01" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-12" />
        </div>
      </div>
      <div>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
