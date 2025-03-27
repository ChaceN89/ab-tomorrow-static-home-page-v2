import React from 'react'
import { applicationList } from '@/data/aboutData'
import SectionHeader from '../common/SectionHeader'

export default function About() {

  return(
    <section className="bg-accent">
      <div className='home-section home-y-padding space-y-8 '>
          <SectionHeader
            title='About Alberta Tomorrow'
            description="Alberta Tomorrow was originally created in 2005 by Matthew Carlson and Dr. Brad Stelfox of the ALCES group. Since then, Alberta Tomorrow has been used extensively by teachers and students throughout Alberta."
          />
          <div>Alberta Tomorrow is critically reviewed and bias neutral. The continued development has been overseen by a steering committee comprised of representatives of industry, non-profits and government. The application is:</div>

          <ul className='list-disc list-inside'>
            <li>peer reviewed by qualified scientists,</li>
            <li>endorsed by environmentally focused non-profit organizations, industry and government, and</li>
            <li>teacher tested!</li>
          </ul>

          <div>The Alberta Tomorrow program is overseen by the Alberta Tomorrow Foundation. The Alberta Tomorrow Foundation is a registered charity in Canada. Alberta Tomorrow's board of directors is served by representatives from education, non-profit, government and industry sectors.</div>

          <div>Mission:
          To deliver a platform that empowers youth to design and sustain a future for our shared ecosystem.</div>
          <div>Vision:
          An informed society actively fostering sustainable futures.</div>
      </div>
    </section>
  )

}
