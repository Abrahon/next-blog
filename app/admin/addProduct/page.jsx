'use client'
import { assets } from '@/Assests/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

const page = () => {
    const[image,setImage] = useState(false)
    const[data,setData] = useState({
        title:"",
        description:"",
        category:"Startup",
        author:"Sujon",
        authorImage:"/author_img.png"
    })

    const onChangeHandler = (event)=>{
        event.preventDefault()
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
        console.log(data)
    }

    const handleAddBlog = async (event)=>{
        event.preventDefault();
        // console.log(event)
        const formData = new FormData();
        formData.append('title',data.title)
        formData.append('description',data.description)
        formData.append('category',data.category)
        formData.append('author',data.author)
        formData.append('authorImage',data.authorImage)
        formData.append('image',image);
        const response = await axios.post('/api/blog',formData);
        if(response.data && response.data.success){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Blog item added successfully",
                showConfirmButton: false,
                timer: 1500
              });
            setImage(false);
            setData({
                title:"",
                description:"",
                category:"Startup",
                author:"Sujon",
                authorImage:"/author_img.png"
            })
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "unsuccess",
                title: "Blog item not added",
                showConfirmButton: false,
                timer: 1500
              });
        }
      

        // const blog = {title,description,category,image}
      
       
            
        
       
    }
  return (
    <>
    <div className='font-bold'>Add Product</div>
    <form onSubmit={handleAddBlog} className='my-10 ml-10'>
        <p className='text-xl font-medium'>upload thumbnail</p>
        <label htmlFor="image">
            <Image className='mt-5' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={120} name="image"></Image>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' />
        <p className='text-xl mt-4' > Blog title</p>
        <input onChange={onChangeHandler}  className='mt-4 border p-2 w-1/2'placeholder='Enter the blog tile' type="text" name="title" value={data.title}  />
        <p className='text-xl mt-4'>Blog description</p>
        <textarea onChange={onChangeHandler} className='mt-4 border px-2 w-1/2' placeholder='write a text' name="description" value={data.description} ></textarea>
        <p>Blog category</p>
        <select onChange={onChangeHandler} className='w-40 mt-4 border px-2' name="category" value={data.category}>
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='btn max-w-sm p-2 mx-auto ml-4 border-2 bg-amber-400 border-yellow-400 text-white rounded-2xl hover:bg-base-100 hover:text-amber-500 hover:border-amber-400 text shadow-sm shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-400 duration-300 my-2'>Add Blog</button>
        
    </form>
    </>
    
    
  )
}

export default page