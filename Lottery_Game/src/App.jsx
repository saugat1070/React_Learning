import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Components/lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery/>
    </>
  )
}

export default App
