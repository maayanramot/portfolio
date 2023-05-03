import React from 'react'
import './Main.css'
import Navbar from '../../general/Navbar/Navbar'
import Footer from '../../general/Footer/Footer'
import Hero from '../Hero/Hero'

const Main: React.FC = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Hero/>
      </div>
      <Footer />
    </>
  )
}

export default Main
