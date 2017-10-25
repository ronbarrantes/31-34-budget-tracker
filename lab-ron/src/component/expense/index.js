import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../expense-form'
import * as expense from '../../action/expenses.js'

class Expense extends React.Component {
  render() {
    let {
      expense,
      expenseDestroy,
      expenseUpdate,
    } = this.props
    return (
      <div className='expense'>
        <p>{expense.name}</p>
        <button onClick={() => expenseDestroy(expense)}>delete</button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate} />
      </div>
    )
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expense.destroy(data)),
  expenseUpdate: data => dispatch(expense.update(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Expense)