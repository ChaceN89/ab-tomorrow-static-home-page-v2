import React from 'react'
import Hero from '../home-sections/Hero'
import Intro from '../home-sections/Intro'
import CallToAction from '../home-sections/CallToAction'
import Education from '../home-sections/Education'
import TeacherTools from '../home-sections/TeacherTools'
import About from '../home-sections/About'
import GetInvolved from '../home-sections/GetInvolved'

export default function Home() {
  return (
    <div className='relative'>
      <Hero/>
      <Intro/>
      <CallToAction/>
      <Education/>
      <TeacherTools/>
      <About/>
      <GetInvolved/>
    </div>
  )
}
