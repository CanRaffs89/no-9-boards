import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

export default function portfolio({ data }) {
    const penInkItems = data.penInkItems.nodes;
    const paintedItems = data.paintedItems.nodes;
    const zenItems = data.zenItems.nodes;
    const commissionItems = data.commissionItems.nodes;

    return (
        <Layout>
            <h1>Pen & Ink</h1>
            <div className="image-gallery">
                {penInkItems.map(item => (
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
            <h1>Zen Doodles</h1>
            <div className="image-gallery">
                {zenItems.map(item => (
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
            <h1>Commissions</h1>
            <div className="image-gallery">
                {commissionItems.map(item => (
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
            <h1>Painted</h1>
            <div className="image-gallery">
                {paintedItems.map(item => (
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
    penInkItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "pen-ink"}}}) {
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
    zenItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "zen"}}}) {
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
    commissionItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "commission"}}}) {
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
    paintedItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "painted"}}}) {
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
