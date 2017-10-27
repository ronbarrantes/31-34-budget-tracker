import './_landing.scss'
import React from 'react'
import faker from 'faker'

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h2>Budget Tracker</h2>
        <p>{faker.lorem.words(100)}</p>
        <p>{faker.lorem.words(100)}</p>
      </div>

    )
  }
}


export default Landing