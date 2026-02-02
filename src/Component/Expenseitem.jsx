import React from 'react'

function Expenseitem(props) {
  console.log(props.expense)
    const {_id,title,amount}=props.expense
    const type= (amount>0)? "income":"expense"
            function handleDeleteExpense() {
          props.deleteExpense(_id)
        }

  return (
    <div className={`expense-item ${type}`}>
      
        <div className='expense-title'> 
            {title}
        </div>
        <div className='expense-amount'>
            ${amount}
        </div>
        <div className='delete-button-overlay'>
          <button onClick={handleDeleteExpense}>Delete</button>
        </div>


    </div>
  )
}

export default Expenseitem