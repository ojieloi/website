import * as React from "react"
import './hero.css'
import ProfilePic from '../../images/profile_picture.jpg'

const Hero = () => {
    return (
        <section className='hero'>

            {/* Header */}
            <div className='header'>
                <h1>Hi there,</h1>
                <h1>I'm Ik</h1>
            </div>

            {/* Profile Picture */}
            <div className='profile-picture'>
                <img src={ProfilePic} alt='Me in graduation gown' />

                <div className='picture-content'>
                    <p>I did it <span role='img' aria-label='Confetti emoji'>🎉</span></p>
                </div>
            </div>

            {/* Bio */}
            <div className='bio'>
                <p>I’m also an aviation, motosport, soccer, and photography enthusiast, passionate about creating user-centered, beautiful digital experiences, with the goal of turning ideas into practical and elegant solutions.</p>
            </div>
        </section>
    )
}

export default Hero;