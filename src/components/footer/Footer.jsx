import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";

import truEarhLogo from '../../assets/external-logos/tru-earth-logo.png';
import enviromentalPartner from '../../assets/external-logos/1ftp-EnvironmentalPartner-horizontal-FullColor.png';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary-alt text-white overflow-hidden">
      {/* Footer Main Section */}
      <div className=" px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2">© Alberta Tomorrow {new Date().getFullYear()}</p>
            <p>Alberta Tomorrow Executive Director: <b>Jennifer Janzen</b></p>
            <p>Email: <a href="mailto:info@albertatomorrow.ca" className="text-blue-400 hover:underline">info@albertatomorrow.ca</a></p>

            {/* Social Media Icons */}
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/AlbertaTomorrow/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com/AlbertaTomorrow" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 hover:text-blue-400" />
              </a>
              <a href="https://www.youtube.com/user/albertatomorrow" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-6 h-6 hover:text-red-500" />
              </a>
              <a href="https://www.instagram.com/alberta_tomorrow/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-pink-400" />
              </a>
              <a href="https://www.pinterest.ca/AlbertaTomorrow/" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="w-6 h-6 hover:text-red-600" />
              </a>
            </div>
          </div>

          {/* Donation Section */}
          <div>
            <h3 className="text-xl font-semibold">Support Alberta Tomorrow</h3>
            <p className="mt-2">Help keep Alberta Tomorrow FREE by making a donation or purchasing Tru Earth products!</p>
            <div className="mt-4">
              <a href="https://www.canadahelps.org/en/dn/60256/" target="_blank" rel="noopener noreferrer"
                className="btn-blue px-6 py-3 rounded-lg text-lg shadow-md">
                Make a Donation
              </a>
            </div>
            <div className="mt-4 flex gap-6">
              <img src={truEarhLogo} alt="Tru Earth" className="w-48 rounded-lg" />
              <img src={enviromentalPartner} alt="Tru Earth" className="w-48 rounded-lg" />
            </div>
          </div>

          {/* Sitemap */}
          <div className='flex-1'>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              
              {/* Site Navigation */}
              <div>
                <ul className="space-y-1">
                  <li><a href="/" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#intro" className="hover:text-blue-400">Intro</a></li>
                  <li><a href="#education" className="hover:text-blue-400">Tools</a></li>
                  <li><a href="#education" className="hover:text-blue-400">Education</a></li>
                  <li><a href="#about" className="hover:text-blue-400">About</a></li>
                </ul>
              </div>

              {/* Important Pages */}
              <div>
                <ul className="space-y-1">
                  <li><a href="/faq" className="hover:text-blue-400">FAQs</a></li>
                  <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                  <li><a href="/board-of-directors" className="hover:text-blue-400">Board of Directors</a></li>
                  <li><a href="/partners" className="hover:text-blue-400">Partners</a></li>
                </ul>
              </div>

              {/* Alberta Tomorrow Tools */}
       
              <div>

                <ul className="space-y-1">
                  <li><a href="https://www.simulator.albertatomorrow.ca" className="hover:text-blue-400">FREE sign up</a></li>
                  <li><a href="/privacy_policy" className="hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="/terms_of_use" className="hover:text-blue-400">Terms of Use</a></li>
                </ul>
              </div>

            </div>



            </div>

  

        </div>
        <div>
            <h4 className="text-lg font-bold mb-2">Our Education Tools</h4>
          <ul className="flex gap-2">
            <li><a href="https://www.simulator.albertatomorrow.ca" className="hover:text-blue-400">Simulator</a> / </li>
            <li><a href="https://www.simulator.albertatomorrow.ca" className="hover:text-blue-400">Energy Tomorrow</a> /</li>
            <li><a href="https://www.simulator.albertatomorrow.ca" className="hover:text-blue-400">Wildlife Tomorrow</a></li>
          </ul>
        </div>



      </div>

      

      {/* Bottom Section */}
      <div className="bg-secondary py-4 text-center text-sm">
        
        <p>The Alberta Tomorrow Foundation is a 100% non-profit organization, a Registered Non-Profit Society in Alberta with Canada Revenue Agency Charitable Status, dedicated to promoting sustainable land-use planning in Alberta.</p>

      </div>
    </footer>
  );
}
