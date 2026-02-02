import React from "react";
import CurrentItem from "./CurrentItem";

function BalanceContainer(props) {
  let income = 0;
  let expenses = 0;

  props.expense.forEach((item) => {
    const amt = Number(item.amount) || 0;
    if (amt > 0) {
      income += amt;
    } else {
      expenses += amt;
    }
  });

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="balance-container">
        <CurrentItem title="income" amount={income} type="income" />
        <CurrentItem title="expense" amount={expenses} type="expense" />
        <CurrentItem title="balance" amount={income + expenses} type="balance" />
      </div>
    </>
  );
}

export default BalanceContainer;
