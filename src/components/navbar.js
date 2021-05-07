import * as React from 'react'
import { SiBehance, SiDropbox, SiGithub, SiLinkedin } from "react-icons/si"
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            {/* Logo */}
            <a className='logo' href='home'>Ik.</a>

            {/* Navbar links */}
            {/* Home, Behance, Dribbble, Resume */}
            <div className='right-nav'>
                <a className='behance' href='https://github.com/ojieloi' target="_blank" rel='noreferrer'><SiGithub /></a>
                <a className='dropbox' href='https://www.behance.net/ikeojielo' target="_blank" rel='noreferrer'><SiBehance /></a>
                <a className='behance' href='https://www.linkedin.com/in/ikecojielo/' target="_blank" rel='noreferrer'><SiLinkedin /></a>
            </div>
        </div>
    )
}

export default Navbar