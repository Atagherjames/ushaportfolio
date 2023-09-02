import React from 'react'
import './animation.css'

const Animation = ({FirstIcon, SecondIcon}) => {
  return (
    <div className='animation'>
<h2 className='animate' style={{'color':'blue'}}><FirstIcon /></h2>
<h2 className='animate' style={{'color':'green'}}><SecondIcon /></h2>
    </div>
  )
}

export default Animation