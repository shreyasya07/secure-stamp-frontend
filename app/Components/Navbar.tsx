import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Home from './home.png'

export default function Navbar() {
  return (
    <main>
        <div className='mx-10 my-10 flex justify-end'>
          
            <Link href=""><span className='mx-10 my-8 text-xl font-medium'>Verify Certificate</span></Link>
            <Link href=""><span className='mx-10 my-8 text-xl font-medium'>Generate Certificate</span></Link>
            <Link href=""><span className='mx-10 my-8 text-xl font-medium'>Dashboard</span></Link>
            <button><span className='mx-10 my-8 text-xl font-medium'>Logout</span></button>
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
    </main>
  )
}
