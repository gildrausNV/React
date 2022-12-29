import React, { useState } from 'react'

function OneSlope({slope, onAdd, inFnc, onRemove, onSet}) {
  let [snow, setSnow]=useState(null)
  function set(val){
    setSnow(val.target.value)
  }
  return (
    <div className="ski">
        <img className="slope-img" src="KaramanGreben.jpg" alt="" />
        <div className="body">
            <h3 className="title">{slope.title}</h3>
            <p className="text">Difficulty: {slope.difficulty}</p>
    </div>
    </div>  
  )
}

export default OneSlope