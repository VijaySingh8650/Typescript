import React, { useState } from 'react'
import Count from './count';
import "./style/app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () =>{
    setCount(count+1);
  }
  return (
    <div className='color'>
      {process.env.REACT_APP_HELLO}
      <Count count={count} addCount={addCount}/>
    </div>
  )
}

export default App;
