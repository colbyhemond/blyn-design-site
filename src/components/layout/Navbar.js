'use client'

import Link from 'next/link'
import { Menu, X } from 'react-feather'
import { useEffect, useRef, useState } from 'react'
import ScrollProgress from './ScrollProgress'
import { motion } from 'framer-motion'

const translateShow = '-translate-y-0'
const translateHide = '-translate-y-[120vh]'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ title = 'B. Lyn Design & Co' }) {
  const [translate, setTranslate] = useState(translateHide)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const openMenu = () => {
    setTranslate(translateShow)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    setTranslate(translateHide)
    setIsOpen(false)
    document.body.style.overflow = ''
  }
  const toggleMenu = () => (isOpen ? closeMenu() : openMenu())

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="w-full shadow pointer-events-none fixed top-0 z-50 font-libre-baskerville uppercase">
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center p-5 bg-base-100/95 backdrop-blur pointer-events-auto border-b">
          <div className="hidden md:flex md:flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              {title}
            </Link>
          </div>
          <nav className="hidden md:flex md:flex-none">
            <ul className="menu menu-horizontal px-1 gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="btn btn-ghost">
                    <span className="relative inline-block">
                      {item.label}
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary"
                        whileHover={{ width: '100%' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
              {/* Optional CTA */}
              {/* <li><Link href="/contact" className="btn btn-primary ml-2">Get a Quote</Link></li> */}
            </ul>
          </nav>
        </div>

        {/* Mobile bar */}
        <div className="md:hidden w-full pointer-events-auto">
          <div className="w-full p-5 text-base-content flex justify-between items-center bg-base-100/95 backdrop-blur border-b">
            <Link href="/" onClick={closeMenu} className="btn btn-ghost text-xl">
              {title}
            </Link>
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="btn btn-ghost btn-circle"
              onClick={toggleMenu}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* <ScrollProgress /> */}

        {/* Mobile full-screen menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`transition-transform duration-700 ease-in-out flex flex-col h-screen bg-neutral bg-opacity-95 text-neutral-content text-center gap-5 p-10 sticky top-0 w-full font-bold !z-[999] ${translate} pointer-events-auto overflow-y-auto md:hidden`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-3xl"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          {/* Optional CTA in mobile */}
          {/* <Link href="/contact" className="btn btn-primary mt-6" onClick={closeMenu}>Get a Quote</Link> */}
        </div>
      </div>
    </>
  )
}


// 'use client'

// import Link from "next/link"
// import { Menu } from "react-feather"
// import { useState } from "react"
// import ScrollProgress from "./ScrollProgress"

// const translateShow = '-translate-y-0'
// const translateHide = '-translate-y-[120vh]'

// const Navbar = ({title}) => {

//     const [translate, setTranslate] = useState(translateHide)

//     const handleNavToggle = () => {
//         if (translate === translateHide) {
//         setTranslate(translateShow)
//         }

//         if (translate === translateShow) {
//         setTranslate(translateHide)
//         }
//     }
    
    

//     return (<>
//         <div className=" w-full shadow pointer-events-none fixed top-0 z-50">
//             <div className="hidden md:flex justify-between items-center p-5 bg-base-100">
//                 <div className="hidden md:flex md:flex-1">
//                     {/* <Link href='/' className="btn btn-ghost text-xl pointer-events-auto"></Link> */}
//                     <Link href="/" className="btn btn-ghost text-xl pointer-events-auto">{title}</Link>
//                 </div>
//                 <div className="hidden md:flex mdflex-none pointer-events-auto">
//                     <ul className="menu menu-horizontal px-1 gap-4">
//                         <Link href="/" className="btn btn-ghost pointer-events-auto">Home</Link>
//                         <Link href="/about" className="btn btn-ghost pointer-events-auto">About</Link>
//                         <Link href="/blog" className="btn btn-ghost pointer-events-auto">Blog</Link>
//                         {/* <Link href="/contact">Contact</Link> */}
//                     </ul>
//                 </div>
                
//             </div>
            

//             <div className=" md:hidden w-full h-full overflow-hidden flex-col top-5 shadow-xl pointer-events-auto h-20">
//                 <div className="w-full p-5 text-base-content flex justify-between items-center bg-base-100">
//                     <div>
//                         <Link href='/' onClick={()=>{setTranslate(translateHide)}} className="btn btn-ghost text-xl">{title}</Link>
//                     </div>
//                     <div>
//                         <div onClick={()=>{handleNavToggle()}}><Menu className='bg-current w-12 h-12 p-2 rounded-full stroke-base-200 cursor-pointer'/></div>
//                     </div>
                
//                 </div>
                
                
//             </div>
//             <ScrollProgress />
//             <div className={`transition-all duration-700 ease-in-out flex flex-col h-screen bg-neutral bg-opacity-95 text-neutral-content text-center gap-5 p-10 sticky top-0 w-full font-bold !z-[999] ${translate} pointer-events-auto overflow-y-scroll`}>
//                 <Link className="pointer-events-auto text-3xl" href='/' onClick={()=>{setTranslate(translateHide)}}>Home</Link>
//                 <Link className="pointer-events-auto text-3xl" href='/about' onClick={()=>{setTranslate(translateHide)}}>About</Link>
//                 <Link className="pointer-events-auto text-3xl" href='/blog' onClick={()=>{setTranslate(translateHide)}}>Blog</Link>
//                 {/* <Link className="pointer-events-auto text-3xl" href='/contact' onClick={()=>{setTranslate(translateHide)}}>Contact</Link> */}
//             </div>
            
//         </div>
        
//     </>)
// }

// export default Navbar

