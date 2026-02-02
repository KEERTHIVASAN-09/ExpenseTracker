import React from "react";
import Expenseitem from "./Expenseitem";

function History({ expense, deleteExpense }) {
  return (
    <div className="history">
      <h1>History</h1>
      {expense.length === 0 ? (
        <p>No history yet</p>
      ) : (
        expense.map((item) => (
          <Expenseitem 
            key={item.id} 
            expense={item} 
            deleteExpense={deleteExpense} 
          />
        ))
      )}
    </div>
  );
}

export default History;
