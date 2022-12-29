import React from 'react'
import OneSlope from './OneSlope'

const Slopes = ({slopes, onAdd, onRemove, onSet}) => {
    
    
  return (
    <div className='all-slopes'>
            {slopes.map((slope)=>(
            <OneSlope slope={slope} key={slope.id} />
        ))}
        <br></br>
  </div>
  )
}

export default Slopes