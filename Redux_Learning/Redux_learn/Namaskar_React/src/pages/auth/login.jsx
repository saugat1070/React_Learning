import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice';
import { useState } from 'react';


export default function Login() {
  const dispatch = useDispatch()
  const [data,setData] = useState({
    email:'',
    password:'',
  });

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData(()=>{
      return {
        ...data,
        [name]:value,

      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data);
    dispatch(login(data));
  }
  
  

  return (
    <div className="flex justify-center items-center mt-50">
      <div className="w-full max-w-xs flex justify-center content-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="***********"
              name="password"
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/register"
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
