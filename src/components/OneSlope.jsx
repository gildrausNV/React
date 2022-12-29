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
            {inFnc === 1 ? <><p className="text">Open: 9-15</p>
        </> : <><p className="text">Slope closed</p></>}
            {inFnc === 1 ? <><p className="text">Snow: {slope.snow}cm</p>
        </> : <><p>cm of snow:</p><input type="text" onChange={set}/> <button onClick={()=>onSet(slope.id, snow)}>submit</button></>}
        </div>
        {inFnc === 1 ? <><button className="btnRemove" onClick={()=>onRemove(slope.title, slope.id)}>Close slope</button>
        </> : <><button className="btn" onClick={()=>onAdd(slope.title, slope.id)}>Open slope</button></>}
    <br></br>
    </div>
  )
}

export default OneSlope