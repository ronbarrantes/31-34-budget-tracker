import uuid from 'uuid/v1'

export const create = ({ budget, name }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    created: new Date(),
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
