import React from 'react'
import './Hello.css'

import women from '../../../assets/woman-tech.svg'

const Hello: React.FC = () => {
  return (
    <div className="hello">
        <div>
            <h1>Maayan Ramot ,</h1>
            <p>full stack developer, full stack developer, full stack developer, full stack developer, full stack developer, full stack developer, full stack developer, full stack developer</p>
        </div>
        <img src={women}></img>
    </div>
  )
}

export default Hello