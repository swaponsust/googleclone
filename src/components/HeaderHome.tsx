import Link from 'next/link'
import React from 'react'
import { TbGridDots } from 'react-icons/tb'

export default function HeaderHome() {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
            <Link href='https://mail.google.com/' target='_blank'>Gmail</Link>
            <Link href='https://mail.google.com/' target='_blank'>Image</Link>
            <TbGridDots className='hover:bg-slate-500 rounded-full text-4xl p-2' />
            <button className='bg-blue-500 rounded-lg px-6 py-2 text-white hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
          
          </div>
    </header>
    
  )
}
