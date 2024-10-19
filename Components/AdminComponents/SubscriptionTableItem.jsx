import React from 'react'

const SubscriptionTableItem = ({email,mongoId,date,emailDelete}) => {
    const emailDate  = new Date(date);
     
  return (
    
        <tr className='bg-white border-b '>
            <th>{email?email:"No Emai"}</th>
            <td className='px-6 py-3'>{emailDate.toDateString()}</td>
            <td onClick={()=>emailDelete(mongoId)} className='px-6 py-3 cursor-pointer'>Delete</td>
        </tr>
    
  )
}

export default SubscriptionTableItem