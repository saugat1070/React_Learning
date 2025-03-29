import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SingleBlog() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const id = useParams(); //<-- In this line useParams reads object type but we need string or number to call api
  const [blog, setBlog] = useState({});
  const navigate = useNavigate;
  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseUrl}/blog/${id.id}`);
      console.log(response);
      if(response.status === 200){
        console.log(response.data.data);
        setBlog(response.data.data);
      }
      
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }
  }
  const deleteBlog = async ()=>{
    const response = await axios.delete(`${baseUrl}/blog/${id.id}`,{
      headers:{
        "Authorization":localStorage.getItem('token')
      }
    })
    if(response.status === 200){
      navigate('/');
    }
    else{
      alert("Delete is not perform")
    }
  }
  useEffect(()=>{
    fetchBlog()
  },[])

  return (
    <Layout>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blog.imageUrl}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                
                <Link to="/blogs/edit">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Edit
                  </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                
                  <button 
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  onClick={deleteBlog}
                  >
                    Delete
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.title || "Title"}
              </h2>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Blog Description
                </span>
                <p className="bg-amber-50">{blog.category}</p> <p className="bg-amber-50 ml-3">{blog.subtitle
                  }</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {blog.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleBlog;
