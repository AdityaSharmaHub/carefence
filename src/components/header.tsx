import { login } from '@/actions/auth'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 bg-[var(--header)] backdrop-blur-lg z-10 border-b border-gray-200'>
        <div className='p-4 md:p-6 flex items-center justify-between max-w-7xl mx-auto'>

        {/* Logo */}
        <Link href="/">
            <Image src="/logo.svg" width={150} height={50} alt='CareFence logo' />
        </Link>

        {/* Navlinks */}
        <div className='hidden md:flex gap-8'>
            <Link href="#features" className='text-gray-800 hover:text-[var(--secondary) transition ease-in'>Features</Link>
            <Link href="#how-it-works" className='text-gray-800 hover:text-[var(--secondary)] transition ease-in'>How it works</Link>
            <Link href="#benefits" className='text-gray-800 hover:text-[var(--secondary)] transition ease-in'>Benefits</Link>
        </div>

        {/* Navbtns */}
        <div className='flex gap-2'>
            <a href={"/auth/login"}>
                <Button type="default">Login</Button>
            </a>
            <a href={"/auth/login"} className='hidden md:flex'>
                <Button type="primary">Get started</Button>
            </a>
            <a href="/auth/logout" className="underline">
                <Button type="text">Logout</Button>
            </a>
        </div>
        </div>
    </header>
  )
}

export default Header