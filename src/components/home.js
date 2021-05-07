import * as React from "react"
import './home.css'

// Components
import Navbar from './navbar'
import Hero from './hero'

// markup
const HomePage = () => {
    return (
        <div className='container'>
            {/* Navbar Component */}
            <Navbar />
            <div className='content'>
                {/* Hero Component */}
                <Hero />
            </div>
        </div>
    )
}

export default HomePage