import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export default function itemDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, date, thumb } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <div>
                    <GatsbyImage image={thumb.childImageSharp.gatsbyImageData}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PortfolioDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date
                slug
                thumb {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`
