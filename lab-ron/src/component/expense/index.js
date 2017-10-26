import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../expense-form'
import { renderIf } from '../../lib/util.js'
import * as expense from '../../action/expense.js'

class Expense extends React.Component {
  constructor(props) {
    super(props)
    this.state = { edit: false }
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(expense) {
    this.props.expenseUpdate(expense)
    this.setState({ edit: false })
  }

  render() {
    let {
      expense,
      expenseUpdate,
      expenseDestroy,
    } = this.props

    let { edit } = this.state

    return (
      <div className='expense'>

        {renderIf(!edit,
          <div onDoubleClick={() => this.setState({ edit: true })}>
            <p>{expense.name} :: ${expense.amount}</p>
            <button onClick={() => expenseDestroy(expense)}>delete</button>
          </div>
        )}

        {renderIf(edit,
          <ExpenseForm expense={expense} onComplete={this.handleUpdate} />
        )}

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