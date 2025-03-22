import React from 'react'
import LinkItem from './LinkItem'
import { donateInfo } from '../../data/navData'

export default function DonateButton() {
  return (
    <LinkItem
      href={donateInfo.href}
      className="md:ml-nav p-3 py-1.5 rounded-lg bg-primary hover:bg-primary-alt text-white font-semibold transition"
    >
      {donateInfo.title}
    </LinkItem>  
  )
}
