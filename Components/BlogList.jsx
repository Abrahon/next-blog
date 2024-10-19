import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {
    const [menu,setMenu] = useState('All');
    const [blogs,setBlogs] = useState([]);
   

    const fetchBlogList = async()=>{
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
    }
    
    useEffect(()=>{
        fetchBlogList();
    },[])

  return (
   <div>
    <h1>Total blog data:{blogs.length}</h1>
    <div className='flex justify-center gap-6 my-6'>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
    </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 g-6 mx-auto max-w-screen-xl my-6'>
        
        {
            blogs?.filter((item)=>menu==='All'?true:item.category===menu).map((item,index)=>{
                return <BlogItem
                key={index}
                item={item}
                id={item._id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}>
                </BlogItem>

            }
            )
        }
    </div>
   </div>
  )
}

export default BlogList