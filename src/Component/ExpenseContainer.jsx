import React, { useEffect, useState } from 'react'
import Form from './Form'
import { v4 as uid } from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'

function ExpenseContainer() {


  const [expense, setExpense] = useState([])
  console.log(expense)
  async function addExpense(title,amount) {
    

    try {
      const response = await fetch("https://expensetrackerbackend-42hc.onrender.com/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title,amount })
      })

      const result = await response.json()
      console.log("API Response:", result)
    } catch (error) {
      console.error("Error saving expense:", error)
    }
    
  }  
async function getExpense(){
  try {
      const response = await fetch("https://expensetrackerbackend-42hc.onrender.com")
       

      const result = await response.json()
      console.log(result)
      setExpense(result)
    } catch (error) {
      console.error("Error saving expense:", error)
    }
}
useEffect(()=>{
  getExpense()
},[])
  async function deleteExpense(id) {
    setExpense(expense.filter((item) => item.id !== id))
    
    try {
      const response = await fetch(`https://expensetrackerbackend-42hc.onrender.com/delete/${id}`, {
        method: "DELETE",
       
      })
 getExpense()
   
    } catch (error) {
      console.error("Error saving expense:", error)
    }
  }

  return (
    <div className='expense-container'>
      <BalanceContainer expense={expense} />
      <Form addExpense={addExpense} />
      <History expense={expense} deleteExpense={deleteExpense} />
    </div>
  )
}

export default ExpenseContainer
