'use client'
import Header from "@/Components/Header";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "@/Components/About";

export default function Page() {
  const{blogs, setBlogs} = useState()

  // get method for data fetch

  const fetchBlogList = async()=>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs)
  }

  useEffect(()=>{
    fetchBlogList();

  },[])

  // delete mothod for data fetch

  const fetchDeleteBlogs = async({mongoId})=>{
    const reponse = await axios.delete('/api/blog/',{
      params:{id:mongoId}
    });
    
    alert('success');
    fetchBlogList();

  }

  return (
    <div className="">
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
      <About></About>
      
    </div>
    
  );
}
