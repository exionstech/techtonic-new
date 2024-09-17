import React from 'react'
import NavbarRoutes from './navbar-routes'
import MobileSideBar from './mobile-side-bar'

const Navbar = () => {
  return (
    <div className='p-4 h-full flex items-center shadow-sm'>
        <MobileSideBar/>
      <NavbarRoutes/>
    </div>
  )
}

export default Navbar
