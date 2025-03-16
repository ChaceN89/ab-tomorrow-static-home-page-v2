import React from 'react'
import Hero from '../home-sections/Hero'
import Intro from '../home-sections/Intro'
import Education from '../home-sections/Education'
import About from '../home-sections/About'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <Intro/>
      <Education/>
      <About/>
    </div>
  )
}
