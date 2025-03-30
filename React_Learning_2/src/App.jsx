import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Counter} from "./compenents/counter"
import LikeButton from './compenents/likeButton'
// import Ludo from './compenents/LudoBoard'
import LudoBoard from './compenents/LudoBoard'
import Todo_List from './compenents/Todo_List/todo_list'

function App() {


  return (
    <>

    {/* <Counter/> */}
    {/* {<LikeButton/>} */}
    {/* <Ludo/> */}
    {/* <LudoBoard/> */}
    <Todo_List/>

    
    
    </>
  )
}

export default App
