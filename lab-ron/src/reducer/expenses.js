export const validateExpense = (expense) => {
  if (!expense.name)
    throw new Error('expense expected a name')
}

export default (state = {}, { type, payload }) => {
  let categoryID, categoryExpenses, result

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] }

    case 'CATEGORY_DESTROY':
      return { ...state, [payload.id]: undefined }

    case 'EXPENSE_CREATE':
      validateExpense(payload)
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = [payload, ...categoryExpenses] // adding the expenses bottom to top
      return { ...state, [categoryID]: result }

    case 'EXPENSE_UPDATE':
      validateExpense(payload)
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.map(item =>
        item.id === payload.id ? payload : item)
      return { ...state, [categoryID]: result }

    case 'EXPENSE_DESTROY':
      categoryID = payload.categoryID
      categoryExpenses = state[categoryID]
      result = categoryExpenses.filter(item => item.id !== payload.id)
      return { ...state, [categoryID]: result }
    default:
      return state

  }
}
