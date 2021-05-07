import * as React from 'react'
import { SiBehance, SiGithub, SiLinkedin } from "react-icons/si"
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            {/* Logo */}
            <a className='logo' href='/' aria-label='Go Home'>Ik.</a>

            {/* Navbar links */}
            {/* Home, Behance, Dribbble, Resume */}
            <div className='right-nav'>
                <a className='behance' href='https://github.com/ojieloi' target="_blank" rel='noreferrer' aria-label='Open GitHub'><SiGithub /></a>
                <a className='dropbox' href='https://www.behance.net/ikeojielo' target="_blank" rel='noreferrer' aria-label='Open Behance'><SiBehance /></a>
                <a className='behance' href='https://www.linkedin.com/in/ikecojielo/' target="_blank" rel='noreferrer' aria-label='Open LinkedIn'><SiLinkedin /></a>
            </div>
        </div>
    )
}

export default Navbar