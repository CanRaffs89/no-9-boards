import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

export default function index({ data }) {
  const portfolioItems = data.portfolioItems.nodes;
  console.log(portfolioItems);

  return (
    <Layout>
      <div className="image-gallery">
        {portfolioItems.map(item => (
          <Link to="/" className="grid-image">
            <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
            <div className="grid-image-overlay">
              <div className="overlay-text">
                <h2>{ item.frontmatter.title }</h2>
                <span></span>
                <p>Indian Ink - Pencil</p>
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
query PortfolioPage {
    portfolioItems: allMarkdownRemark {
      nodes {
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
  }
`
