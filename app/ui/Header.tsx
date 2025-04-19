'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Danh mục sản phẩm', href: '/product-listing' },
  { label: 'Dự án thực tế', href: '/projects' },
  { label: 'Thông tin thương hiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
  { label: 'Blog', href: '/blogs' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const linkClass = (href: string) =>
    `text-sm ${isActive(href) ? 'active underline underline-offset-4' : 'text-gray-700 '}`

  return (
    <header className="header w-full fixed top-0 z-50 ">
      <div className="flex items-center justify-between w-full mx-auto">
        {/* Left */}
        <nav className="header__link hidden md:flex items-center gap-[40]">
          {navItems.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          <Image src={"/ic_logo.svg"} width={172} height={80} alt='logo'/>
        </Link>

        {/* Right */}
        <nav className="header__link hidden md:flex items-center gap-[40]">
          {navItems.slice(3).map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 bg-white shadow rounded-md overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm border-b last:border-none hover:bg-gray-100 ${
                isActive(item.href) ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
