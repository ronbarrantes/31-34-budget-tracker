export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload]

    case 'CATEGORY_UPDATE':
      return state.map(item => item.id === payload.id ? payload : item)
    
    case 'CATEGORY_DESTROY':
      return state.filter(item => item.id !== payload.id)
    
    case 'CATEGORY_CLEAR':
      return emptyState
    
    default:
      return state
  }
}
