import OneSlope from "./OneSlope"

const FncSlope = ({slopes, onRemove}) => {
    
    return (
        <div >
        {slopes.map((slope)=>(
          <OneSlope slope={slope} key={slope.id} inFnc={1} onRemove={onRemove}/>
      ))}
    </div>
    )
  }
  
  export default FncSlope