import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
    src='/logo.png'
    alt='logo'
    width={100}
    height={100}
    className='cursor-pointer'
    />
  )
}

export default Logo
