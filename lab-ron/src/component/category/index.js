import './_category.scss'

import React from 'react'
import { connect } from 'react-redux'

import faker from 'faker'
import Expense from '../expense'
import DropZone from '../drop-zone'
import ExpenseForm from '../expense-form'
import CategoryForm from '../category-form'
import * as expense from '../../action/expense.js'
import * as category from '../../action/category.js'
import { renderIf } from '../../lib/util.js'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = { edit: false }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(category) {
    this.props.categoryUpdate(category)
    // sets the state of edit back to false
    this.setState({ edit: false })
  }

  componentWillMount() {
    for (let i = 0; i < 3; i++) {
      this.props.expenseCreate({
        name: faker.lorem.words(4),
        amount: Math.floor(Math.random() * 300),
        categoryID: this.props.category.id,
      })
    }
  }

  render() {
    let {
      expenses,
      category,
      expenseCreate,
      categoryUpdate,
      categoryDestroy,
      expenseUpdateCategory,
    } = this.props

    let { edit } = this.state
    let categoryExpenses = expenses[category.id]

    return (
      <div className='category'>

        <DropZone onComplete={(expense) => expenseUpdateCategory(expense, category.id)}>
          {renderIf(!edit,
            <div className='receipt-head'>

              <h2 onDoubleClick={() => this.setState({ edit: true })} >
                {category.name} :: ${category.budget}
              </h2>

              <button onClick={() => {
                categoryDestroy(category)
                this.setState({ edit: false })
              }}>delete</button>
            </div>
          )}

          {renderIf(edit,
            <div className='receipt-head'>
              <CategoryForm category={category} onComplete={this.handleUpdate} />
            </div>
          )}

          <ExpenseForm category={category} onComplete={expenseCreate} />
          {categoryExpenses.map((expense, i) =>
            <Expense expense={expense} key={i} />
          )}
        </DropZone>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  expenses: state.expenses,
})

let mapDispatchToProps = (dispatch) => ({
  expenseCreate: (data) => dispatch(expense.create(data)),
  expenseUpdateCategory: (data, categoryID) => dispatch(expense.updateCategoryID(data, categoryID)),
  categoryUpdate: (data) => dispatch(category.update(data)),
  categoryDestroy: (data) => dispatch(category.destroy(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
