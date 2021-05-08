import * as React from 'react'
import { SiBehance, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-content'>
                {/* Logo */}
                <a className='logo' href='/' aria-label='Go Home'>Ik.</a>

                {/* Navbar links */}
                {/* Home, Behance, Dribbble, Resume */}
                <div className='right-nav'>
                    <a href='https://www.instagram.com/oeki_ikeo/' target="_blank" rel='noreferrer' aria-label='Open Instagram'><SiInstagram /></a>
                    <a href='https://github.com/ojieloi' target="_blank" rel='noreferrer' aria-label='Open GitHub'><SiGithub /></a>
                    <a href='https://www.behance.net/ikeojielo' target="_blank" rel='noreferrer' aria-label='Open Behance'><SiBehance /></a>
                    <a href='https://www.linkedin.com/in/ikecojielo/' target="_blank" rel='noreferrer' aria-label='Open LinkedIn'><SiLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar