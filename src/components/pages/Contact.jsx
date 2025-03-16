import React from 'react'
import PolicySection from '../policies/PolicySection'
import PolicyText from '../policies/PolicyText'

// Change this with a better verison that isn't a drop down 

export default function Contact() {
  return (
    <div className='section' >
      <PolicySection title="7. Contact Information" initiallyOpen>
        <PolicyText>
          For inquiries, contact:
          <br />
          <strong>Alberta Tomorrow Executive Director:</strong> Jennifer Janzen
          <br />
          Email: <a href="mailto:info@albertatomorrow.ca" className="text-blue-600 underline">info@albertatomorrow.ca</a>
        </PolicyText>
      </PolicySection>
    </div>
  )
}
