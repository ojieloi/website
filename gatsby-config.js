module.exports = {
	siteMetadata: {
		title: "Ik Ojielo - Website",
		siteUrl: "https://ikojielo.gatsbyjs.io/",
		description:
			"My personal website, with links to my social and professionl site. From LinkedIn to Behance and GitHub.",
	},
	plugins: [
    "gatsby-plugin-netlify",
		"gatsby-plugin-styled-components",
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
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
