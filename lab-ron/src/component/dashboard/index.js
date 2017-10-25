import React from 'react'
import { connect } from 'react-redux'

import Category from '../category'
import CategoryForm from '../category-form'
import * as category from '../../action/category.js'

class Dashboard extends React.Component {
  render() {
    let {
      categories,
      categoryCreate,
    } = this.props

    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />

        {categories.map((category, i) =>
          <Category key={i} category={category} />
        )}

      </div>
    )
  }
}

let mapStateToProps = state => ({
  categories: state.categories,
})


let mapDispatchToProps = dispatch => ({
  categoryCreate: (data) => dispatch(category.create(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)