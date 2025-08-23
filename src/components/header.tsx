import { login } from '@/actions/auth'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 p-4 md:p-6 flex items-center justify-between bg-[var(--header)] backdrop-blur-lg border border-gray-200 z-10'>
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
            <Link href={"/auth/login"}>
                <Button type="default" size="middle">Login</Button>
            </Link>
            <Link href={"/auth/login"} className='hidden md:flex'>
                <Button type="primary" size="middle">Get started</Button>
            </Link>
        </div>
    </header>
  )
}

export default Header