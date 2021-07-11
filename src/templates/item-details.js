import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export default function itemDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, date, media, img01, img02, img03 } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className="inner-content">
                <div className="item-text-wrapper">
                    <h2>{title}</h2>
                    <h3>{media}</h3>
                    <h3>{date}</h3>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <div className="item-image-wrapper">
                    <GatsbyImage className="item-image-main" image={img01.childImageSharp.gatsbyImageData}/>
                    <GatsbyImage className="item-image-second" image={img02.childImageSharp.gatsbyImageData}/>
                    <GatsbyImage className="item-image-third" image={img03.childImageSharp.gatsbyImageData}/>
                </div>
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
                media
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
