import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa";
import SiteLogo from '../../assets/site-logos/logo-lg.png';
import PageTitle from '../routing/PageTitle';

export default function Contact() {
  return (
    <div className="section mt-20 flex flex-col items-center text-center text-gray-800">
      <PageTitle title="Contact Us" />
      
      {/* Site Logo */}
      <img src={SiteLogo} alt="Alberta Tomorrow Logo" className="w-36 mb-6" />

      {/* Contact Info */}
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-lg">
          Have a question or want to get involved? Reach out to us!
        </p>
        
        <div className="mt-6 text-lg">
          <p><strong>Alberta Tomorrow Executive Director:</strong> Jennifer Janzen</p>
          <p>
            Email: 
            <a href="mailto:info@albertatomorrow.ca" className="text-blue-600 underline ml-1">
              info@albertatomorrow.ca
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="mt-4 flex gap-6">
          <a href="https://www.facebook.com/AlbertaTomorrow/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com/AlbertaTomorrow" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-8 h-8 hover:text-blue-400 transition" />
          </a>
          <a href="https://www.youtube.com/user/albertatomorrow" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-8 h-8 hover:text-red-500 transition" />
          </a>
          <a href="https://www.instagram.com/alberta_tomorrow/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 hover:text-pink-400 transition" />
          </a>
          <a href="https://www.pinterest.ca/AlbertaTomorrow/" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="w-8 h-8 hover:text-red-600 transition" />
          </a>
        </div>
      </div>

      {/* Donate & Sponsor Package Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Support Alberta Tomorrow</h3>
        <p className="mt-2 text-lg">
          Help keep Alberta Tomorrow free by making a donation or downloading our sponsorship package!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Donate Button */}
          <a 
            href="https://www.canadahelps.org/en/dn/60256/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
          >
            Make a Donation
          </a>

          {/* Sponsor Package Download Button */}
          <a 
            href="/sponsorship-package.pdf" // Update with actual file path
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition duration-300"
          >
            Download Our Sponsor Package
          </a>
        </div>
      </div>

    </div>
  );
}
