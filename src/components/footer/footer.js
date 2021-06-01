import * as React from 'react'
import './footer.css'

import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    const ListStyle = {
        display: 'inline-flex',
        listStyle: 'none',
    }

    return (
        <footer className='footer'>
            <div className='footer-content'>

                {/* Header */}
                <p>Social Links</p>

                {/* Navbar links */}
                <ul className='nav-links' style={ListStyle}>
                    <li><a id='link' aria-label='Open Github' href='https://github.com/ojieloi' target='_blank' rel='noreferrer'><FaGithub /></a></li>
                    <li><a id='link' aria-label='Open Behance' href='https://www.behance.net/ikeojielo' target='_blank' rel='noreferrer'><FaBehance /></a></li>
                    <li><a id='link' aria-label='Open LinkedIn' href='https://www.linkedin.com/in/ikecojielo/' target='_blank' rel='noreferrer'><FaLinkedin /></a></li>
                    <li><a id='link' aria-label='Open Instagram' href='https://www.instagram.com/oeki_ikeo/' target='_blank' rel='noreferrer'><FaInstagram /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer