import * as React from 'react'
import './footer.css'

import { FiGithub, FiInstagram, FiLinkedin, } from 'react-icons/fi'
import { RiBehanceLine } from 'react-icons/ri'

const Footer = () => {
    const ListStyle = {
        display: 'inline-flex',
        listStyle: 'none',
    }

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <ul className='nav-links' style={ListStyle}>
                    {/* GitHub */}
                    <li><a id='github' aria-label='Open Github' href='https://github.com/ojieloi' target='_blank' rel='noreferrer'><FiGithub /></a></li>

                    {/* Behance */}
                    <li><a id='behance' aria-label='Open Behance' href='https://www.behance.net/ikeojielo' target='_blank' rel='noreferrer'><RiBehanceLine /></a></li>

                    {/* LinkedIn */}
                    <li><a id='linkedin' aria-label='Open LinkedIn' href='https://www.linkedin.com/in/ikecojielo/' target='_blank' rel='noreferrer'><FiLinkedin /></a></li>

                    {/* Instagram */}
                    <li><a id='instagram' aria-label='Open Instagram' href='https://www.instagram.com/oeki_ikeo/' target='_blank' rel='noreferrer'><FiInstagram /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer