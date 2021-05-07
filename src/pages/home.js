import * as React from "react"
import './home.css'

// Components
import Navbar from '../components/navbar'
import Hero from '../components/hero'

// styles
const pageStyles = {
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
}

// markup
const HomePage = () => {
    return (
        <main style={pageStyles}>
            <title>Ik.</title>

            {/* Page container */}
            <div className='container'>

                {/* Navbar Component */}
                <Navbar />

                <div className='content'>

                    {/* Hero Component */}
                    <Hero />

                </div>
            </div>
        </main>
    )
}

export default HomePage