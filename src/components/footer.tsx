import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center p-4 md:p-6'>
        <p className='text-gray-600'>Made with ❤️ by <Link href={"https://adityacodes.com"} target='_blank' className='text-gray-800 hover:underline underline-offset-4'>Aditya Sharma</Link></p>
    </footer>
  )
}

export default Footer