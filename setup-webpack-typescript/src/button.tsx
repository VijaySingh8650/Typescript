import React from 'react'

interface BtnType {
    addCount : () =>void;
    children: string;
}
const Button:React.FC<BtnType> = (props) => {

  return (
    <button onClick={props.addCount}>
      {props.children}
    </button>
  )
}

export default Button
