import React from 'react'
import Logo from '../../assets/site-logos/logo-sm.png'

export default function NavLogo() {
  return (
    <div className='flex justify-between items-center gap-2 hover:opacity-80  mr-nav'>
      <img src={Logo} alt="Logo" className="w-10 h-10" />
      <div className="whitespace-nowrap text-white">
        Alberta Tomorrow
      </div>
    </div>
  )
}
