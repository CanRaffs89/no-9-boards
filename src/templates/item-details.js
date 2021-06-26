import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export default function itemDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, date, img01, img02, img03 } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <div>
                    <GatsbyImage image={img01.childImageSharp.gatsbyImageData}/>
                    <GatsbyImage image={img02.childImageSharp.gatsbyImageData}/>
                    <GatsbyImage image={img03.childImageSharp.gatsbyImageData}/>
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
                img01 {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
                img02 {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
                img03 {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                }
            }
        }
    }
`
