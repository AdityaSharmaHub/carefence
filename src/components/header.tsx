"use client"

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="sticky top-0 bg-[var(--header)] backdrop-blur-lg z-10 border-b border-gray-200">
      <div className="p-4 md:p-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={150} height={50} alt="CareFence logo" />
        </Link>

        {/* Navlinks */}
        <div className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="text-gray-800 hover:text-[var(--secondary) transition ease-in"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-800 hover:text-[var(--secondary)] transition ease-in"
          >
            How it works
          </Link>
          <Link
            href="#benefits"
            className="text-gray-800 hover:text-[var(--secondary)] transition ease-in"
          >
            Benefits
          </Link>
        </div>

        {/* Navbtns */}
        {!user ? (
          <div className="flex items-center gap-2">
            <a href={"/auth/login"}>
              <Button type="default">Login</Button>
            </a>
            <a href={"/auth/login"} className="hidden md:flex">
              <Button type="primary">Get started</Button>
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href={"/dashboard/worker"}>
                <Button type="primary">Dashboard</Button>
            </Link>
            <a href="/auth/logout">
                <Button>Logout</Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
