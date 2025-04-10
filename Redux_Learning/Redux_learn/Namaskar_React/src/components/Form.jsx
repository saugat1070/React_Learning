import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import BlogSlice from '../../store/blogSlice';
import { BlogSlice } from '../../store/blogSlice';

function Form({title}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector((state)=>state.auth);
    console.log(authData);
  const [data,setData] = useState({
    title:'',
    description:'',
    category:'',
    subtitle:'',
    image:'',
  })

  const handleSubmit = (event)=>{
    event.preventDefault();
    // dispatch(AddBlog(data));
    // console.log(data);
    dispatch(BlogSlice(data,authData));
  }

  const handleChange = (event)=>{
    setData(()=>{
      const {name,value} = event.target;
      return {
        ...data,
        [name] :( name === 'image') ? event.target.files[0] : value ,
      }
    })
  }

  return (
    <section className="bg-red">
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">
       {title}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="titile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Blog Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Title of blog"
              required
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subtitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Subtitle
            </label>
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Title of blog"
              required
              onChange={handleChange}
            />
            <div className="sm:col-span-2">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Category"
              required
              onChange={handleChange}
            />
          </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-bl-lg cursor-pointer bg-gray-50 dark:text-black-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="image"
              type="file"
              name='image'
              onChange={handleChange}

            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="8"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add product
        </button>
      </form>
    </div>
  </section>
  )
}

export default Form