import {React,useEffect,useState,use} from "react";
import { register, setStatus } from "../../../store/authSlice";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import STATUSES from "../../global/statuses";
//To write information in redux --> useDispatch
//To read information from redux --> useSelector

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const {status} = useSelector((state) => state.auth);
  const handleChange = (event)=>{
    const {name,value} = event.target;
    setData(()=>{
      return {
        ...data,
      [name] : value
    }
      
    })
    
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(register(data));
  }

  useEffect(()=>{
    if(status == STATUSES.SUCCESS){
      navigate('/login');

    }
    else{
      navigate('/register');
    }
  },[status])
  return (
    <div className="flex justify-center items-center mt-50">
      <div className="w-full max-w-xs flex justify-center content-center">
        <form className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="=email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
            >
              username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
              value={data.username}
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
              value={data.password}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline content-center"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
