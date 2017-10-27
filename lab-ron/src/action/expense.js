import uuid from 'uuid/v1'

export const create = ({ name, amount, categoryID }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    amount,
    id: uuid(),
    categoryID,
    created: new Date(),
  },
})

export const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
})

export const destroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
})

export const updateCategoryID = (expense, categoryID) => ({
  type: 'EXPENSE_UPDATE_CATEGORY_ID',
  payload: { expense, categoryID },
})

