import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import '../assets/css/css/Navbar.css'
import { VscThreeBars } from 'react-icons/vsc'
const Navbar = ({ handleSideBar }) => {
    
    
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to={'/'} className='logo__link'>
                    Ecotem
                </Link>
            </div>

            <div className="nav__links">
                <ul>
                    <li>
                        <Link to={'/'} className='links'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/all'} className='links'>Templates</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='links'>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='links'>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="nav-icon" onClick={handleSideBar}>
                <VscThreeBars size={30} />
            </div>

           

        </nav>
    )
}

export default Navbar