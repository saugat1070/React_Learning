import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    console.log(data);
    setData(() => {
      return {
        ...data,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log("data submitted");
    console.log(data);
    const response = await axios.post(
      "https://react30.onrender.com/api/user/login",
      data
    );
    console.log(response);
    try {
      if(response.status === 200){
        navigate('/');
      }
      else{
        alert("Login Failed");
      }
      
    } catch (error) {
      alert(alert?.response?.data?.message);
      
    }
  }

  return (
    <div className="flex justify-center items-center mt-50">
      <div className="w-full max-w-xs flex justify-center content-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
        >
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
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
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
              required
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
              Go to Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
