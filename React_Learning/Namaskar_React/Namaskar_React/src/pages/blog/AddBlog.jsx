import React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import Form from "../../components/form"
import axios from "axios";
import { useNavigate } from "react-router-dom";



function AddBlog() {
  const navigate = useNavigate()
  const base_url = import.meta.env.VITE_BASE_URL;
  const handleCreateBlog = async (data)=>{
    try {
    const response = await axios.post(`${base_url}/blog`,data,{
      headers:{
        "Content-Type":"multipart/form-data", //for iamge upload to backend
        "Authorization" : localStorage.getItem('token'),
      }
    });
    console.log(response.status);
    if (response.status === 201) {
      navigate('/');
    } else {
      alert("Something is wrong");
    }
    // console.log(response);
    } catch (error) {
      console.log(error?.response?.message);
    }    
  }
  return (
    <Layout>
    <Form title="Create a Blog" on_click={handleCreateBlog}/>
    </Layout>
  );
}

export default AddBlog;
