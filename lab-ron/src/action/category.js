import uuid from 'uuid/v1'

export const create = ({ title }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: uuid(),
    created: new Date(),
  },
})

export const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const remove = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
})
