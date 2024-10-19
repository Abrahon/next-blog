
'use client'
import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const [data, setData] = useState(null);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: { id:params.id } // Adjust if you're using different props
      });
      setData(response.data); // Update state with fetched data
      console.log(response.data); // Log the data to console

    } catch (error) {
      console.error("Error fetching data:", error); // Handle errors
    }
  };

  // Use useEffect to fetch data when component mounts or params change
  useEffect(() => {
    fetchData();
  }, [params.id]);

 

  return (
    <div className='container mx-auto flex justify-center'>
     <div className='my-10'>
      <Image src={data?.image} width={400} height={300}></Image>
     <h1>{data?.author}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
     </div>
    </div>

  )
}

export default page