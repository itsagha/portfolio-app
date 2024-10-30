import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/" className='siteTitle'>Agha's Portfolio</Link>
        <ul>
            <li><Link to="/expedu">Experience & Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}