import { useState } from 'react'
import './App.css'
import Markdown from './pages/markdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Markdown/>
    </>
  )
}

export default App
