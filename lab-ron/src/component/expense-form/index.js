import React from 'react'

let emptyState = {
  name: '',
  amount: 0,
}

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.expense || emptyState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let { value, name, type } = e.target
    value = type === 'number' ? Number(value) : value
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let categoryID = this.props.category ?
      this.props.category.id :
      this.props.expense.categoryID

    this.props.onComplete({
      ...this.state,
      categoryID,
    })

    this.setState(emptyState)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense)
      this.setState(nextProps.expense)
  }

  render() {
    let buttonText = this.props.expense ? 'update' : 'create'
    return (
      <form className='expense-form'
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='name'
          placeholder='Expense Name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='number'
          name='amount'
          placeholder='amount'
          value={this.state.amount}
          onChange={this.handleChange}
        />


        <button type='submit'>{buttonText}</button>
      </form>
    )

  }

}

export default ExpenseForm