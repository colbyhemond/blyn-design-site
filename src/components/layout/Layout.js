'use client'

import { use, useEffect } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { usePathname } from 'next/navigation'


const Layout = ({children, settings}) => {
    const pathname = usePathname()

    useEffect(() => {
        document.querySelector('body').style.opacity = 1
    }, [])

    // Parse pathname to determine if we are on the admin page
    const isAdminPage = pathname.startsWith('/admin')

    const title = settings?.title || "B. Lyn Design & Co";
    const socialLinks = settings?.socialLinks || [];

    if (isAdminPage) {
        return children
    }

    return (<>
        <Navbar title={title} />
        <div className="drop-shadow flex-grow mt-20">
          <div className="">
          {children}
          </div>
        </div>
        <Footer socialLinks={socialLinks} />
    </>)
}

export default Layout