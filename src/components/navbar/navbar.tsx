import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import arrow_right from '../../assets/arrow-right.png'
import nexcent_logo from '../../assets/nexcent-logo.png'

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const closeMenu = (): void => {
    setIsOpen(false);
};

  return (
    <div className='navbar'>

      <div className='menu-icon' onClick={toggleMenu}>
        <MenuIcon />
      </div>

      <div className='navbar-left'>
        <img src={nexcent_logo} alt="nexcent logo" />
        <p>Nexcent</p>
      </div>

      <div className='navbar-right'>  
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>

            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/features" onClick={closeMenu}>Features</Link>     
            <Link to="/community" onClick={closeMenu}>Community</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
        </div>

        <button className='nav-btn'>
            Register Now
            <img src={arrow_right} alt="Register" />    
        </button>
  

      </div>
    </div>
  )
}

export default Navbar
