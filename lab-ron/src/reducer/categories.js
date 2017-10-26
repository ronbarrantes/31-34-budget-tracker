export const validateCategory = (category) => {
  if (!category.name)
    throw new Error('category expected a name')
}

export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      validateCategory(payload)
      return [...state, payload]

    case 'CATEGORY_UPDATE':
      validateCategory(payload)
      return state.map(item => item.id === payload.id ? payload : item)

    case 'CATEGORY_DESTROY':
      return state.filter(item => item.id !== payload.id)

    default:
      return state
  }
}
