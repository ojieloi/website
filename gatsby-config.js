module.exports = {
    siteMetadata: {
        title: "Website - Portfolio",
        siteUrl: "https://ikojielo.gatsbyjs.io/",
        description: `My personal website that acts as a hub for all my social and professional links. From LinkedIn, to my GitHub.`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
