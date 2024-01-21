import React from 'react'

type propsType = {
    count: number;
    addCount: ()=>void;
}

const Count:React.FC<propsType> = (props) => {
  return (
    <div>
       <p>{props.count}</p>
       <button onClick={props.addCount}>Click Me</button>
    </div>
  )
}

export default Count
