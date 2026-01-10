import { useState, useEffect } from 'react'
import './App.css'
import { saveCounter, loadCounter } from './services/storageService'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  // Load initial counter value from backend when component mounts
  useEffect(() => {
    const fetchCounter = async () => {
      setLoading(true)
      const value = await loadCounter()
      setCount(value)
      setLoading(false)
    }
    
    fetchCounter()
  }, [])  // Empty array means this runs once on mount

  // Save counter to backend whenever it changes
  useEffect(() => {
    if (!loading) {  // Don't save during initial load
      saveCounter(count)
    }
  }, [count, loading])

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  if (loading) {
    return (
      <div className="App">
        <h1>Stateful Counter</h1>
        <p>Loading...</p>
      </div>
    )
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