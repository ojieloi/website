import * as React from "react"
import HomePage from "../components/home"
import SEO from "../components/seo"

// styles
const pageStyles = {
    fontFamily: "Poppins, -apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <title>Ik Ojielo - Website</title>
            {/* SEO */}
            <SEO description="My personal website, with links to my social and professionl sites. From LinkedIn to Behance and GitHub." />
            <HomePage />
        </main>
    )
}

export default IndexPage
