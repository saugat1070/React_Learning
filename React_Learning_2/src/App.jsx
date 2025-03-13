import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} from "./compenents/counter"
import LikeButton from './compenents/likeButton'

function App() {


  return (
    <>
    <h1>States in React</h1>
    {/* <Counter/> */}
    {<LikeButton/>}
    </>
  )
}

export default App
