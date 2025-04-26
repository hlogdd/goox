'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

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
    `text-base font-medium ${
      isActive(href) ? 'text-primary underline underline-offset-4' : 'text-gray-800'
    }`

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50 h-[60px]">
    <div className="flex items-center justify-between px-4 h-full md:px-8 max-w-screen-xl mx-auto">
      {/* Left nav - Desktop only */}
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.slice(0, 3).map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>
  
      {/* Logo */}
      <Link href="/">
        <Image src="/ic_logo.svg" width={120} height={40} alt="logo" />
      </Link>
  
      {/* Right nav - Desktop only */}
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.slice(3).map((item) => (
          <Link key={item.href} href={item.href} className={linkClass(item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>
  
      {/* Toggle Button - Mobile & Tablet only */}
      <div className="lg:hidden flex items-center gap-2">
        <button onClick={() => setOpen((prev) => !prev)} className="text-gray-700">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
  
    {/* Slide-in Mobile Menu */}
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-[60px] right-0 w-full h-[calc(100vh-60px)] bg-white z-40 shadow-lg py-6 flex flex-col"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 px-4 border-b border-b-[#d5d5d5] hover:bg-gray-100 transition ${
                  isActive(item.href) ? 'text-[#061D1B] font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
  
  )
}
