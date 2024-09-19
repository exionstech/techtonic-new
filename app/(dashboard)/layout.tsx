import React from 'react'
import Sidebar from './_components/sidebar'
import { Inter } from "next/font/google";
import Opportunity from '@/components/Opportunity/Opportunity';

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full'>
      {/** navbar */}
        {/* <header className='h-20 md:pl-56 fixed inset-y-0 w-full z-50'>
            <Navbar/>
        </header> */}

      {/** sidebar */}
      {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar/>
      </div> */}

      
      
      <div className='bg-gray-900 dark !scroll-smooth'>
    
      <main className={`${inter.className} h-full dark:bg-gray-900 dark:text-white`} >
        {children}
        <Opportunity/>
      </main>
      </div>

      
    </div>
  )
}

export default DashboardLayout
