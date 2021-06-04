import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

export default function index({ data }) {
  const featuredItems = data.featuredItems.nodes;

  return (
    <Layout>
      <div className="image-gallery">
        {featuredItems.map(item => (
          <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
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
query FeaturedPage {
  featuredItems: allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}) {
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
        id
      }
    }
  }
`
