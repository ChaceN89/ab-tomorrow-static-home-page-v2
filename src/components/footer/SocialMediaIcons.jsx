import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

function SocialIcon({ href, Icon, hoverColor }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={`w-8 h-8 transition-colors duration-200 ${hoverColor}`} />
    </a>
  );
}



export default function SocialMediaIcons() {
  return (
    <div className="mt-4 flex gap-4">
      <SocialIcon 
        href="https://www.facebook.com/AlbertaTomorrow/" 
        Icon={FaFacebook} 
        hoverColor="hover:text-blue-500" 
      />
      <SocialIcon 
        href="https://twitter.com/AlbertaTomorrow" 
        Icon={FaTwitter} 
        hoverColor="hover:text-blue-400" 
      />
      <SocialIcon 
        href="https://www.youtube.com/albertatomorrow" 
        Icon={FaYoutube} 
        hoverColor="hover:text-red-500" 
      />
      <SocialIcon 
        href="https://www.instagram.com/alberta_tomorrow/" 
        Icon={FaInstagram} 
        hoverColor="hover:text-orange-400" 
      />
      <SocialIcon 
        href="https://www.pinterest.ca/AlbertaTomorrow/" 
        Icon={FaPinterest} 
        hoverColor="hover:text-red-600" 
      />
    </div>
  );
}
