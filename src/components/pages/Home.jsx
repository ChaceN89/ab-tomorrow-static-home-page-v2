import React from 'react'
import Hero from '../home-sections/Hero'
import Intro from '../home-sections/Intro'
import CallToAction from '../home-sections/CallToAction'
import InteractiveTools from '../home-sections/InteractiveTools'
import Education from '../home-sections/Education'
import TeacherTools from '../home-sections/TeacherTools'
import About from '../home-sections/About'
import GetInvolved from '../home-sections/GetInvolved'

import Separator from '../ui-utils/Separator'

export default function Home() {
  return (
    <div className='relative'>
      <Hero/>
      <Intro/>
      <Separator bgColor='bg-primary-alt'/>
      <CallToAction/>
      <InteractiveTools/>
      <Separator bgColor='bg-secondary-alt'/>
      <section id='education'>
        <Education/>
      </section>
      <Separator bgColor='bg-primary-alt'/>
      <TeacherTools/>
      <Separator bgColor='bg-primary-alt'/>
      <About/>
      <Separator bgColor='bg-accent-alt'/>
      <GetInvolved/>
    </div>
  )
}
