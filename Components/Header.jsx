import { assets } from '@/Assests/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Header=()=>{
    const[email,setEmail] = useState('');
    // const [isSubmitting, setIsSubmitting] = useState(false);

    const emailSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);

        const response = await axios.post('/api/email', formData);

        if (response.data.success) {
            alert(response.data.msg);
            // Reset form state
            setEmail('');
        } else {
            alert('Subscription failed: ' + response.data.msg);
        }
    } 


    return(
        <div className=''>
            

            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Latest Blog</h1>
                <p className='max-w-[740px] m-auto text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium debitis, reprehenderit, eos facere explicabo sunt nesciunt nihil nostrum repellendus iste necessitatibus excepturi consequatur sit laboriosam! Fugiat eum quaerat aut!</p>
                <form onSubmit={emailSubmit} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-r-lg shadow-[-10px_12px_10px_3px]'>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enater your email' className='pl-4 outline-none' required />
                    <button type='submit'  className='border-1 border border-black rounded-lg px-4 py-4 sm:px-8 active:bg-green-600 active:text-white'>subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Header;