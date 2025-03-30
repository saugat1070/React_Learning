import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import Card from '../../components/card'
import axios from 'axios';

function Home() {
  const [blogs,setBlogs] = useState([]);
  const baseURl = import.meta.env.VITE_BASE_URL;
  const fetchBlog = async ()=>{
    const response = await axios.get(`${baseURl}/blog`);
    if(response.status == 200){
      // console.log(response.data.data)
      setBlogs(response.data.data)
    }

  }

  useEffect(()=>{
    fetchBlog();

  },[])
  return (


    <Layout >
        <div className=' ml-5 flex justify-center flex-wrap space-x-5'>
        {
          blogs.length > 0 && blogs.map((blog)=>{
            //  console.log(blog);
            return (
              // title subtitle description category imageurl
              <Card 
              blogs={blog}
              />
            )
          })
        }
        
        
       
        </div>
    </Layout> 
    )
}

export default Home