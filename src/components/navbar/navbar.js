import * as React from 'react'
import './navbar.css'
import Resume from '../../docs/Resume.pdf'

const Navbar = () => {

    const ListStyle = {
        display: 'inline-flex',
        listStyle: 'none',
    }

    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                {/* Logo */}
                <ul className='brand' style={ListStyle}>
                    <li><a className='logo' href='/' aria-label='Go Home'>Ik.</a></li>
                </ul>

                {/* Navbar links */}
                <ul className='nav-links' style={ListStyle}>
                    <li><a id='resume-link' aria-label='Open resume' href={Resume} target='_blank' rel='noreferrer'>Resume</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar