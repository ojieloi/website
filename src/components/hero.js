import * as React from "react"
import './hero.css'

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* Header */}
            <div>
                <h1><mark>UI/UX Designer & Front-End Developer</mark></h1>
            </div>

            {/* Bio */}
            <div>
                <p>Hi <span role='img' aria-label='wave'>👋</span>, I'm <span className='name'>Ike</span>. Aviation, motosport, and soccer enthusiast. Interested in all things design and development. Let’s have a conversation!</p>
            </div>

            {/* Resume Link */}
            <div>
                <a className='resume-link' href='https://www.dropbox.com/s/jegs86qn65z05dn/00%20-%20Resum%C3%A9.pdf?dl=0' target="_blank" rel='noreferrer'>View Resume</a>
            </div>
        </div>
    )
}

export default Hero;