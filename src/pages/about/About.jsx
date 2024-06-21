import React from 'react'
import './about.scss'
import Cursor from '../../components/cursor/Cursor'
import Navbar from '../../components/navbar/Navbar'

function About() {
  return (
    <div className='about-container'>
      <Cursor />
      <Navbar />

      <div className="about-wrapper">
        ABout

      </div>
    </div>
  )
}

export default About