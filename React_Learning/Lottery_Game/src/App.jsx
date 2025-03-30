import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form_handling/form'
// import Lottery from './Components/lottery'
import Lottery_Interface from './Components/lottery/lottery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Lottery/> */}
      {/* <Lottery_Interface size_of_ticket={3} />
      <Lottery_Interface size_of_ticket = {5} /> */}
      <Form/>
    </>
  )
}

export default App
