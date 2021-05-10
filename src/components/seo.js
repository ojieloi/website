import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, lang, meta }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
                title,
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
            ]}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: `My personal website, with links to my social and professionl sites. From LinkedIn to Behance and GitHub.`,
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO