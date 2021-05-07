import * as React from "react"
import HomePage from "../components/home"

// styles
const pageStyles = {
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Home Page</title>
            <HomePage />
        </main>
    )
}

export default IndexPage
