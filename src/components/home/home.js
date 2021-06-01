import * as React from "react"
import './home.css'

// Components
import Navbar from '../navbar/navbar'
import Hero from '../hero/hero'
import Footer from '../footer/footer'

// markup
const HomePage = () => {
    return (
        <div className='container'>
            {/* Navbar Component */}
            <Navbar />

            {/* Hero Component */}
            <Hero />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage