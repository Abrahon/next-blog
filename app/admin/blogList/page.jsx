'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {
  const [blogs,setBlogs] = useState([]);

  const fetchBlogListData = async()=>{
    const reseponse = await axios.get('/api/blog')
    setBlogs(reseponse.data.blogs)
  }

  const handleDelete = async (mongoId) => {
    try {
      // Log the ID being sent to verify correctness

      console.log('Deleting blog with ID:', mongoId);
  
      const response = await axios.delete('/api/blog', {
        params: { id:mongoId } // Use `params` to include query parameters
      });
  
      // Log the response to verify success
      console.log('Response from server:', response.data);
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((response) => {
        if (response.data.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your blogitem has been deleted.",
            icon: "success"
          });
        }
      });
  
      // Optionally refresh the blog list data
      fetchBlogListData();
    } catch (error) {
      // Log error details for debugging
      console.error('Error deleting the blog:', error.response ? error.response.data : error.message);
    }
  };

  useEffect(()=>{
    fetchBlogListData()
  },[])

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr className=''>
            <th scope='col' className='px-6 py-3'>Author Name</th>
            <th scope='col' className='px-6 py-3'>Blog Title</th>
            <th scope='col' className='px-6 py-3'>Date</th>
            <th scope='col' className='px-6 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
        {
           blogs?.map((item, index) => (
            <BlogTableItem
              key={index}
              mongoId={item._id}
              item={item.id}  
              title={item.title}    // It seems you are passing the item ID twice. Verify if both props are needed.
              author={item.author}
              authorImage={item.authorImage}
              date={item.date}
              handleDelete={handleDelete}
            />
  ))
}
        </tbody>
        
      </table>
      
    </div>
  )
} 

export default page