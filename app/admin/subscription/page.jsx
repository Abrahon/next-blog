'use client'
import SubscriptionTableItem from '@/Components/AdminComponents/subscriptionTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmailList = async()=>{
    const response = await axios.get('/api/email')
    console.log(response.data)
    setEmails(response.data.email);
  }
  const emailDelete = async(mongoId)=>{

    const res = await axios.delete('/api/email',{
      params:{id:mongoId}
    });
    console.log(res.data)
    if(res.data.success){
      alert("delete email success fully")
      fetchEmailList()
    }
    else{
      alert("error")
    }

  }
  useEffect(()=>{
    fetchEmailList();
  },[])

  return (
    <div className=''>
      <h1>All Subscription</h1>
      <div className='flex justify-center items-center '>
        <table className='w-[800px]'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'> 
            <tr>
              <th scope='col' className='px-6 py-3'>Email Subscription</th>
              <th scope='col'className='px-6 py-3' >Date</th>
              <th scope='col' className='px-6 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              emails?.map((item,index)=><SubscriptionTableItem
              //  item={item}
                key={index} 
                mongoId = {item._id}
                email={item.email}
                date={item.date} 
                emailDelete={emailDelete}
                ></SubscriptionTableItem>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page