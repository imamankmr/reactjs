
import './App.css';
import { useState } from 'react';
function App() {
  const [counter, setCounter]  = useState(15)

  // let Counter=15
  const addValue=()=>{
    setCounter(prevCounter => prevCounter + 1)
  }
  const removeValue =()=>{
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Counter Value :{counter}</h1>
      <button onClick={addValue}>Add Value </button>
    <button onClick={removeValue}> Decrease Value</button>
    </>
  );
}

export default App;
