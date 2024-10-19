import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
       
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0 mr-2'>
                <div className='flex items-center justify-center border border-black cursor-pointer gap-3 font-medium px-2 py-3 bg-white'>
                    <Link href='/admin/addProduct'>Add blog</Link>
                </div>
                <div className='flex items-center justify-center border border-black cursor-pointer gap-3 font-medium px-2 py-3 bg-white'>
                    <Link href='/admin/blogList'>BlogList</Link>
                </div>
                <div className='flex items-center justify-center border border-black cursor-pointer gap-3 font-medium px-2 py-3 bg-white'>
                    <Link href='/admin/subscription'>Subscription</Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Sidebar