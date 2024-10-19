import { assets } from '@/Assests/Assets/assets'

import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImage, title,author,date,mongoId,handleDelete}) => {
  const blogDate = new Date(date);


  return (
           <tr classNameName='bg-white border-b'>

                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Image classNameName="w-10 h-10 rounded-full" src={authorImage?authorImage:assets.profile_icon} width={24} height={24} alt="Jese image"></Image>
                    <div class="ps-3">
                        
                        <div class="font-normal text-gray-500">{author?author:"No Author"}</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    {title?title:"No title"}
                </td>
               
                <td className="px-6 py-4">{blogDate.toDateString()}</td>
                <td onClick={()=>handleDelete(mongoId)} className="px-6 py-4 cursor-pointer">
                   Delete
                </td>
            </tr>
  )
}

export default BlogTableItem