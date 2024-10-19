import { assets } from '@/Assests/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center mb-5 shadow-xl p-2 rounded-lg'>
      {/* <nav > */}
      <Image src={assets.logo} width={180} alt='' className='w-[130px]'></Image>

      <ul class="flex justify-center   p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white w-full">
        <li>
          <Link href="/" class="block py-6 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="/about" class="block py-6 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">About</Link>
        </li>
        <li>
          <Link href="/admin" class="block py-6 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Admin</Link>
        </li>

      </ul>
      <button className='flex items-center justify-center gap-2 font-medium py-1 px-2 bg-green-400 shadow-xl hover:shadow-2xl hover:bg-green-700 w-[150px] '>Get started</button>
      <div>
                
            </div>
      {/* </nav> */}
      </div>
    </div>
  )
}

export default Navbar;