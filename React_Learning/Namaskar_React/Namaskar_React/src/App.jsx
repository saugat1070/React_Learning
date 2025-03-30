import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/blog/Home'
import Login from './pages/auth/login'
import AddBlog from './pages/blog/AddBlog'
import Register from './pages/auth/register'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/singleBlog'


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blogs/add' element={<AddBlog/>}></Route>
        <Route path='blogs/edit' element={<EditBlog></EditBlog>}/>
        <Route path='/blogs/:id' element={<SingleBlog/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
