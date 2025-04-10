import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/blog/Home'
import Login from './pages/auth/login'
import AddBlog from './pages/blog/AddBlog'
import Register from './pages/auth/register'
import {Provider} from 'react-redux' //<-- To connect redux and src
import store from '../store/store'
import SingleBlog from './pages/blog/single_blog'
function App() {
 

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addblog' element={<AddBlog/>}></Route>
        <Route path='/blog/:id' element={<SingleBlog/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
