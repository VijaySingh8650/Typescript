import React, { useState } from 'react'
import Count from './count';

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () =>{
    setCount(count+1);
  }
  return (
    <div>
      {process.env.REACT_APP_HELLO}
      <Count count={count} addCount={addCount}/>
    </div>
  )
}

export default App;
