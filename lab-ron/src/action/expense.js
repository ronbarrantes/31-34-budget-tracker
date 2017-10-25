import uuid from 'uuid/v1'

export const create = ({ name, amount }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    amount,
    id: uuid(),
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