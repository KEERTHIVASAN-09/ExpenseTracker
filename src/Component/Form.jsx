import React, { useState } from "react";

function Form(props) {
  const [title, settitle] = useState("");
  const[amount,setamount]=useState(0)

  function handleTitleChange(e){
    settitle(e.target.value)

  }
  function handleAmountChange(e){
    setamount(e.target.value)
  }
  function HandleSubmit(e){
    e.preventDefault();
    props.addExpense(title,amount)
    settitle("");
    setamount("")

  }
  return (
    <div className="expense-form">
      <h1>Add Income / Expense</h1>
      <form onSubmit={HandleSubmit}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
          <label className="form-label">Amount</label>
          <input 
          className="form-input"
          type="number" 
          value={amount}
          onChange={handleAmountChange}
          />
        </div>
        <button type="submit">Add Amount</button>
      </form>
    </div>
  );
}

export default Form;
