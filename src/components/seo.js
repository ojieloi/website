import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta }) {
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
    title: `Ik Ojielo - Website`,
    lang: `en`,
    meta: [],
    description: `My personal website, with links to my social and professionl sites. From LinkedIn to Behance and GitHub.`,
}

export default SEO