import React from 'react'
import './Hero.css'

import linkedin from '../../../assets/linkedin-icon.svg'
import github from '../../../assets/github-icon.svg'
import Hello from '../Hello/Hello'
import line from '../../../assets/line.svg'

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img className="side-links linkedin" src={linkedin} />
        <img className="side-links git" src={github} />
      </div>
      <div className="hero-right">
        <Hello />
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Hero
