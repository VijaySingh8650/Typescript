import React from 'react'
import Button from './button';

type propsType = {
    count: number;
    addCount: ()=>void;
}

const Count:React.FC<propsType> = (props) => {
  return (
    <div>
       <p>{props.count}</p>
       <Button addCount={props.addCount}>Click ME</Button>
    </div>
  )
}

export default Count
