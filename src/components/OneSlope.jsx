import React, { useState } from 'react'

function OneSlope({ slope, onAdd, inFnc, onRemove, onSet }) {
  let [snow, setSnow] = useState(null)
  function set(val) {
    setSnow(val.target.value)
  }
  return (
    <div className="ski">
      <div className="slope-header">
        <img className="slope-img" src="KaramanGreben.jpg" alt="" />
        <div className="slope-info">
          <h3 className="title">{slope.title}</h3>
          <p className="text">Difficulty: {slope.difficulty}</p>
          {inFnc === 1 ? <p className="text">Snow: {slope.snow}cm</p> : (
            <div className="snow-input">
              <label>cm of snow:</label>
              <input type="text" onChange={set} />
              <button onClick={() => onSet(slope.id, snow)}>Submit</button>
            </div>
          )}
        </div>
      </div>
      <div className="slope-actions">
        {inFnc === 1 ? (
          <button className="btnRemove" onClick={() => onRemove(slope.title, slope.id)}>Close slope</button>
        ) : (
          <button className="btn" onClick={() => onAdd(slope.title, slope.id)}>Open slope</button>
        )}
      </div>
    </div>
  )
}

export default OneSlope