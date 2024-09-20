import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebar-routes'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col  bg-transparent pl-6 pt-12'>
      <div className="p-6">
        <Logo/>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes/>
      </div>
    </div>
  )
}

export default Sidebar
