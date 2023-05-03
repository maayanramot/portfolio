import React from 'react'
import './Navbar.css'

import logo from '../../../assets/light-logo.svg'
import email from '../../../assets/email-light.svg'
import work from '../../../assets/work-icon.svg'
import resume from '../../../assets/resume-icon.svg'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
        <div className='left'>
            <img src={logo}></img>
            <div className='navbar-links'><img className='navbar-icons' src={email} alt='email logo'></img>maayanramot1@gmail.com</div>
        </div>
        <div className='right'>
            <div className='navbar-links'><img className='navbar-icons' src={work} alt='work logo'/>Works</div>
            <div className='navbar-links'><img className='navbar-icons' src={resume} alt='resume logo'/>Resume</div>
        </div>
    </div>
  )
}

export default Navbar