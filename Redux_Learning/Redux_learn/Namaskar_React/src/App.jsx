import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/blog/Home'
import Login from './pages/auth/login'
import AddBlog from './pages/blog/AddBlog'
import Register from './pages/auth/register'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addblog' element={<AddBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
