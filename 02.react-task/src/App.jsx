import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1)
    };
    const decrementCount = () => {
      setCount(count - 1)
    };

    const resetCount  = () => {
      setCount(0)
    }
  
  

  return (
    <>
    <div className="btns">
    <button onClick={incrementCount}>Increment</button>
    <button onClick={decrementCount}>Decrement</button>
    <button onClick={resetCount}>Reset</button>
    </div>
    <div className="text">
      <h1>{count}</h1>
    </div>
    </>
  )
}

export default App
