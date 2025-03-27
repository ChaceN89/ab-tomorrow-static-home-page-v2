import React from 'react'

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p className="mt-2">© Alberta Tomorrow {new Date().getFullYear()}</p>
      <p>Alberta Tomorrow Executive Director: <b>Jennifer Janzen</b></p>
      <p>Email: <a href="mailto:info@albertatomorrow.ca" className="text-blue-400 hover:underline">info@albertatomorrow.ca</a></p>
    </div>
  )
}
