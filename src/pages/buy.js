import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

export default function buy({ data }) {
    const buyItems = data.buyItems.nodes;

    return (
        <Layout>
            <h1 className="grid-title">Boards For Sale</h1>
            <div className="image-gallery">
                {buyItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                            <div className="overlay-text">
                                <h2>{ item.frontmatter.title }</h2>
                                <span></span>
                                <p>{ item.frontmatter.media }</p>
                                <p>{ item.frontmatter.date }</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
query BuyPage {
  buyItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "buy"}}}) {
      nodes {
        frontmatter {
          title
          date
          media
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
