import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Layout = ({ showHeader, showFooter, showSidebar, children }) => {
    const [sidebar, setSideBar] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sidebar)
    }
    return (
        <div>
            {showSidebar && <Sidebar sidebar={sidebar} handleSideBar={handleSideBar} />}
            {showHeader && <Navbar handleSideBar={handleSideBar} />}
            {children}
            {showFooter && <Footer />}
        </div>

    )
}

export default Layout