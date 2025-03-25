/**
 * @file Home.jsx
 * @module Pages/Home
 * @desc The main landing page layout for the Alberta Tomorrow website.
 *       Contains all major homepage sections, scroll anchor IDs, and
 *       section-level background theming and hex separators.
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 25, 2025
 *
 * @features
 * - Assembles and orders homepage sections such as Hero, Intro, Tools, Education, About, and Get Involved
 * - Provides unique `id`s for each `<section>` to enable smooth scroll navigation
 * - Controls section background colors via Tailwind utility classes
 * - Integrates `HexSeparator` components between sections for visual continuity
 *
 * @dependencies
 * - Hero.jsx
 * - Intro.jsx
 * - CallToAction.jsx
 * - InteractiveTools.jsx
 * - Education.jsx
 * - TeacherTools.jsx
 * - About.jsx
 * - GetInvolved.jsx
 * - HexSeparator.jsx
 *
 * @notes
 * - Tailwind's `overflow-x-hidden` is applied at the top level to prevent horizontal scroll from hex grid bleed.
 * - All unused sections are commented out for now, but should be included in the final build.
 */
import React from 'react'
import Hero from '../home-sections/Hero'
import Intro from '../home-sections/Intro'
import CallToAction from '../home-sections/CallToAction'
import InteractiveTools from '../home-sections/InteractiveTools'
import Education from '../home-sections/Education'
import TeacherTools from '../home-sections/TeacherTools'
import About from '../home-sections/About'
import GetInvolved from '../home-sections/GetInvolved'

import HexSeparator from '../ui-utils/HexSeparator'

export default function Home() {
  return (
    <div className='overflow-hidden '>
      <section id='hero'>
        <Hero/>
      </section>
      <section id='intro' className='overflow-hidden' >
        <HexSeparator rows={13} hexClass="bg-secondary-alt opacity-40"/>
        <Intro/>
        <HexSeparator rows={4} parentClass='h-8 bg-primary' hexClass="bg-secondary-alt opacity-40"/>
        <CallToAction/>
        {/* <HexSeparator bottom hexClass='bg-secondary opacity-60'/> */}
      </section>
      <section id='tools' className='overflow-hidden'>
        <HexSeparator rows={100} hexClass='bg-accent-alt opacity-20'/>
        <InteractiveTools/>
      </section>
      {/* <section id='education'>
        <Education/>
        <Separator bgColor='bg-primary-alt'/>
        <TeacherTools/>
        <Separator bgColor='bg-primary-alt'/>
      </section> */}
      {/* <section id='about'>
        <About/>
        <Separator bgColor='bg-accent-alt'/>
        <GetInvolved/>
      </section> */}
    </div>
  )
}
