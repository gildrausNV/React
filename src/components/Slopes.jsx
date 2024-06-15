import React from 'react'
import OneSlope from './OneSlope'

const Slopes = ({ slopes, onAdd, onRemove, onSet }) => {


  return (
    <div className='all-slopes'>
      {slopes.map((slope) => (
        <OneSlope slope={slope} key={slope.id} onAdd={onAdd} inFnc={0} onRemove={onRemove} onSet={onSet} />
      ))}
      <br></br>
    </div>
  )
}

export default Slopes