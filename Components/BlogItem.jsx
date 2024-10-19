
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({id,title,description,image,category}) => {

  return (
    <div className='max-w-[330px] sm:max-w-[300px] border border-black bg-white my-4 p-2 shadow xl hover:shadwo-2xl curor-pointer'>
        <Link href={`/blog/${id}`}>
        <Image src={image} width={300} height={300}></Image>
        </Link>
        <p className='inline-block bg-black text-white mt-5 ml-5 px-1 text-sm'>{category}</p>
        <div>
          <p className='font-semibold'>{title}</p>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default BlogItem
