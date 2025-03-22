import React from 'react'
import Logo from '../../assets/site-logos/logo-sm.png'

export default function NavLogo() {
  return (
    <div className='flex justify-between items-center gap-2 hover:opacity-80  mr-nav pl-2 lg:pl-0'>
      <img src={Logo} alt="Logo" className="w-6 h-6 lg:w-8 lg:h-8" />
      <div className="whitespace-nowrap text-white">
        Alberta Tomorrow
      </div>
    </div>
  )
}
