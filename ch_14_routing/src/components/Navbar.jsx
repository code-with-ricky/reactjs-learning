import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3 className='logo'>Logo</h3>
        <div className='nav-items'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/contact" className='nav-link'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar