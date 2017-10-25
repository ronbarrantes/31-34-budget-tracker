import React from 'react'
import { connect } from 'react-redux'

import Expense from '../expense'
import ExpenseForm from '../expense-form'
import CategoryForm from '../category-form'
import * as expense from '../../action/expenses.js'
import * as category from '../../action/categories.js'

class Category extends React.Component {
  render() {
    let {
      expenses,
      category,
      expenseCreate,
      categoryUpdate,
      categoryDestroy,
    } = this.props

    let categoryExpenses = expense[category.id]

    return (
      <div className='category'>
        <h2>{category.name}</h2>
        <button onClick={() => { categoryDestroy }}>delete</button>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        {categoryExpenses.map((expense, i) =>
          <Expense expense={expense} key={i} />
        )}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  expenses: state.expenses,
})

let mapDispatchToProps = dispatch => ({
  expenseCreate: data => dispatch(expense.create(data)),
  categoryUpdate: data => dispatch(category.update(data)),
  categoryDestroy: data => dispatch(category.destroy(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)