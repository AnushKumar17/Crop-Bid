import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Video from './Video'
import Section from './Section'
import About from './About'
import Carousel from './Carousel'
import { useRef } from 'react'
import { useEffect } from 'react'
import Aim from './Aim'

function Home() {

  return (
    <div>
      <Navbar />
      <Video/>
      <About/>
      <Aim/>
      <Section/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Home