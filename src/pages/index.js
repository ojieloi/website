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
            {/* SEO */}
            {/* <SEO description="My personal website, with links to my social and professionl sites. From LinkedIn to Behance and GitHub." />
            <SEO title="Ik Ojielo - Website" />
            <SEO lang="en" /> */}
            <title>Ik Ojielo</title>
            <HomePage />
        </main>
    )
}

export default IndexPage
