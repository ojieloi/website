import * as React from "react"
import HomePage from "../components/home"

// styles
const pageStyles = {
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#F6F9FF",
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Ik Ojielo</title>
            <HomePage />
        </main>
    )
}

export default IndexPage
