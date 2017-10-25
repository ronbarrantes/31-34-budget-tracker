import uuid from 'uuid/v1'

export const create = ({budget, content, expenseID }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    budget,
    content,
    expenseID,
    id: uuid(),
  },
})

export const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const destroy = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
})
