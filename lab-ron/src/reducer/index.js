import { combineReducers } from 'redux'

import expenses from './expenses.js'
import categories from './categories.js'

export default combineReducers({
  expenses,
  categories,
})