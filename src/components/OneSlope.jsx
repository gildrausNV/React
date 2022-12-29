import React, { useState } from 'react'

function OneSlope({slope, onAdd, inFnc, onRemove, onSet}) {
  let [snow, setSnow]=useState(null)
  function set(val){
    setSnow(val.target.value)
  }
  return (
    <div className="ski">
        STRANICA ZA STAZU
    </div>
  )
}

export default OneSlope