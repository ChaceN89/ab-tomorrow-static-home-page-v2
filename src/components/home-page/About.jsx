import React from 'react'
import { applicationList } from '../../../data/aboutData'
import HexList from '../teacherTools/HexList'

export default function About() {
  return (
    <div id='about' className='py-10 bg-accent'> 
  <h1>ABOUT ALBERTA TOMORROW
  </h1>
      <p>Alberta Tomorrow was originally created in 2005 by Matthew Carlson and Dr. Brad Stelfox of the ALCES group. Since then, Alberta Tomorrow has been used by teachers and students throughout Alberta, Canada, and beyond.

</p>
      <p>
Alberta Tomorrow is critically reviewed and bias neutral. The continued development has been overseen by a steering committee comprised of representatives of industry, non-profits and government. The application is:

      </p>

      <HexList title={"Applications"} hexList={applicationList} />

      <p>The Alberta Tomorrow program is overseen by the Alberta Tomorrow Foundation. The Alberta Tomorrow Foundation is a registered charity in Canada. Alberta Tomorrow's board of directors is served by representatives from education, non-profit, government and industry sectors.</p>

      <p>Mission:
      To deliver a platform that empowers youth to design and sustain a future for our shared ecosystem.</p>
      <p>Vision:
      An informed society actively fostering sustainable futures.</p>

      <div className='btn-blue'>Meet board of Directions </div>
    </div>
  )
}
