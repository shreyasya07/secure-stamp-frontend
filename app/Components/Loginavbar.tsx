import Link from 'next/link';
import React from 'react'
import Home from './home.png'
import Image from 'next/image'

export const navbar = () => {
  return (
    <div>
      <div className="mx-10 my-10 flex justify-end">
            <Link href="/Verify"><span className='mx-10 my-8 text-xl font-medium'>Verify Certificate</span></Link>
            <Link href="/Dashboard"><span className='mx-10 my-8 text-xl font-medium'>Dashboard</span></Link>
            <Link href="/Login"><span className='mx-10 my-8 text-xl font-medium'>Login/Signup</span></Link>
            <Link href="/">
            <Image
                className='mx-10 my-0.8 w-6'
                src={Home}
                alt="Logo"
                quality={100}
            > 
            </Image>
            </Link>
      </div>
    </div>
  );
}
export default navbar;
