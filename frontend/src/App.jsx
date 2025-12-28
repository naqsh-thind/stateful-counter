import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Initialize count from localStorage, or default to 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('counterValue')
    return savedCount !== null ? parseInt(savedCount) : 0
  })

  // Save to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('counterValue', count)
  }, [count])

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Stateful Counter</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
